'use client'
import { TriangleAlert } from 'lucide-react';
import { useState } from 'react'
import Button from '../atoms/Button'
import Input from '../atoms/Input'
import { formData } from '@/util/interfaces/fridge'
import { useFridge } from '@/context/FridgeContext';


export default function AddToFridge() {
  const { addItem } = useFridge();
  const [formData, setFormData] = useState<formData>({ itemName: "", expiryDate: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.itemName || !formData.expiryDate) return;
    console.log(formData.expiryDate)
    await addItem({
      title: formData.itemName,
      expiry: formData.expiryDate,
    });

    setFormData({ itemName: '', expiryDate: '' });
  };
  return (
    <div className="flex flex-col items-center w-full">

      <form onSubmit={handleSubmit} className="w-full bg-white border border-[#E3E9F1] rounded-lg shadow-sm p-6 flex flex-col gap-4">

        <div className="flex flex-wrap items-end sm:justify-between justify-center gap-4">

          <div className="flex-1 w-[240px] max-w-sm">

            <Input label="Item Name" emoji="🍉" name="itemName" placeholder="Enter item name" value={formData.itemName} onChange={handleChange} />

          </div>

          <div className="flex-1 w-[240px] max-w-sm">

            <Input label="Expiry Date" emoji="⏰" name="expiryDate" type="date" value={formData.expiryDate} onChange={handleChange} />

          </div>

          <Button className="text-white" text='ADD TO FRIDGE' />

        </div>

        <div className="text-gray-500 text-sm flex items-center sm:justify-start justify-center gap-1 p-1">

          <span className="text-xs w-fit flex items-center justify-center mr-2">

            <TriangleAlert className="text-gray-500" size="14" />

          </span>

          We don&apos;t want more than one piece of the same food in our fridge.

        </div>

      </form>

    </div>
  )
}
