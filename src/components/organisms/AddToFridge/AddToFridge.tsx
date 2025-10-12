'use client'

import { TriangleAlert } from 'lucide-react';
import { useState } from 'react'
import { Button, CustomInput } from '@/components'
import { FormData, isValidDateFormat } from '@/util'
import { useFridge } from '@/context';
import { FC } from 'react'

export const AddToFridge: FC = () => {
  const { addItem, error, setError } = useFridge();
  const [formData, setFormData] = useState<FormData>({ itemName: '', expiryDate: '' })


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.itemName || !formData.expiryDate) {
      setError("Both fields are required.");
      return;
    }

    if (!isValidDateFormat(formData.expiryDate)) {
      setError("Expiry date must be in YYYY/MM/DD format.Please check whether the given date is valid");
      return;
    }

    const enteredDate = new Date(formData.expiryDate.replaceAll('/', '-'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (enteredDate < today) {
      setError("Expiry date cannot be in the past.");
      return;
    }

    setFormData({ itemName: '', expiryDate: '' });

    await addItem({
      title: formData.itemName,
      expiry: formData.expiryDate,
    });

    setError("");
  };

  return (
    <div className="flex flex-col items-center w-full">
      <form onSubmit={handleSubmit}
        className="w-full bg-white border border-[#E3E9F1] rounded-lg shadow-sm p-6 flex flex-col gap-4"
      >
        <div className="flex flex-wrap items-end sm:justify-between justify-center gap-4">

          <div className="flex-1 w-[240px] max-w-sm">
            <CustomInput
              inputLabel="Item Name"
              inputEmoji="🍉"
              inputName="itemName"
              inputPlaceholder="Enter item name"
              inputValue={formData.itemName}
              onChange={handleChange}
            />
          </div>

          <div className="flex-1 w-[240px] max-w-sm">
            <CustomInput
              inputLabel="Expiry Date"
              inputEmoji="⏰"
              inputName="expiryDate"
              inputPlaceholder="YYYY/MM/DD"
              inputValue={formData.expiryDate}
              onChange={handleChange}
            />
          </div>

          <Button className="text-white text-md" buttonText='ADD TO FRIDGE' />
        </div>

        {error && (
          <div className="text-red-500 text-sm flex items-center sm:justify-start justify-center gap-1 p-1">
            <TriangleAlert size="14" /> {error}
          </div>
        )}

        <div className="text-gray-500 text-sm flex items-center sm:justify-start justify-center gap-1 p-1">
          <TriangleAlert className="text-gray-500" size="14" />
          We don&apos;t want more than one piece of the same food in our fridge.
        </div>
      </form>
    </div>
  )
}

