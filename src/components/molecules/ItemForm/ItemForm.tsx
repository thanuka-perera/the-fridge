'use client'

import { useState, useEffect,FC  } from 'react';
import {  ItemFormProps, isValidDateFormat } from '@/util';
import { Button, CustomInput } from '@/components';
import { Loader,Replace  } from 'lucide-react'

export const ItemForm: FC<ItemFormProps> = ({ itemToEdit, onClose, onConfirm, setUpdatedItem }: ItemFormProps) => {

  const [title, setTitle] = useState('');
  const [expiry, setExpiry] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setExpiry(itemToEdit.expiry);
    }
  }, [itemToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !expiry) {
      setError('Both fields are required.');
      return;
    }

    if (!isValidDateFormat(expiry)) {
      setError('Expiry date must be in YYYY/MM/DD format.Please check whether the given date is valid');
      return;
    }

    const enteredDate = new Date(expiry.replaceAll('/', '-'));
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (enteredDate < today) {
      setError('Expiry date cannot be in the past.');
      return;
    }
    if (itemToEdit?._id) {
      setLoading(true);
      await onConfirm();
      setLoading(false);
    } 
    onClose();
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/50'>
      <div className='bg-white rounded-2xl shadow-lg w-96 p-6 relative'>
        <div className='flex flex-col justify-center items-center gap-4'>

          <Replace
            size={40}
            className='text-[#005B8F]'
          />

          <h2 className='text-lg font-bold text-gray-800'>
            Update &quot;{title}&quot;?
          </h2>

          <form onSubmit={handleSubmit} className='space-y-2'>

            <CustomInput
              inputType='text'
              inputValue={title}
              onChange={e => {
                const value = e.target.value;
                setTitle(value)
                setUpdatedItem?.(prev => prev ? { ...prev, title: value } : prev)
              }}
              inputPlaceholder='Item title'
              classname='w-full border px-2 py-1'
            />

            <CustomInput
              inputType='text'
              inputValue={expiry}
              onChange={e => {
                const value = e.target.value;
                setExpiry(e.target.value);
                setUpdatedItem?.(prev => prev ? { ...prev, expiry: value } : prev);
              }}
              inputPlaceholder='Expiry (DD/MM/YYYY)'
              classname='w-full border px-2 py-1'
            />

            {error && (
              <div className='text-red-500 text-sm flex items-center sm:justify-start justify-center gap-1 p-1'>
                {error}
              </div>
            )}

            <div className='flex items-center justify-center gap-6 mt-4'>

              <Button
                buttonText='Cancel'
                onClick={onClose}
                classname='flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer'
              />

              <Button
                classname="text-white flex items-center gap-2"
                type="submit"
                buttonText={
                  loading ? (
                    <>
                      Updating
                      <Loader className="animate-spin w-4 h-4" />
                    </>
                  ) : (
                    'Update Item'
                  )
                }
              />


            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
