import { useState, useEffect } from 'react';
import { useFridge } from '@/context/FridgeContext';
import {  AddItem } from '@/util/interfaces/fridge';
import Button from '../atoms/Button';
import { Replace } from 'lucide-react';
import Input from '../atoms/Input';
import { ItemFormProps } from '@/util/interfaces/fridge'



export default function ItemForm({ itemToEdit, onClose }: ItemFormProps) {
  const { addItem, updateItem } = useFridge();
  const [title, setTitle] = useState('');
  const [expiry, setExpiry] = useState('');

  useEffect(() => {
    if (itemToEdit) {
      setTitle(itemToEdit.title);
      setExpiry(itemToEdit.expiry);
    }
  }, [itemToEdit]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data: AddItem = { title, expiry };
    if (itemToEdit?._id) {
      await updateItem(itemToEdit._id, data);
    } else {
      await addItem(data);
    }
    onClose();
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">

      <div className="bg-white rounded-2xl shadow-lg w-96 p-6 relative">

        <div className="flex flex-col justify-center items-center gap-4">
          <Replace size={36} className="text-[#005B8F]"/>

          <h2 className="text-lg font-bold text-gray-800">

            Update &quot;{title}&quot;?

          </h2>

          <form onSubmit={handleSubmit} className="space-y-2">

            <Input type="text" value ={title} onChange={e => setTitle(e.target.value)} placeholder="Item title" className="w-full border px-2 py-1"/>

            <Input type="text" value={expiry} onChange={e => setExpiry(e.target.value)} placeholder="Expiry (DD/MM/YYYY)" className="w-full border px-2 py-1" />

            <div className="flex items-center justify-center gap-6 mt-4">

              <Button 
                text="Cancel" 
                onClick={onClose} 
                className="flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 cursor-pointer"
              />

              <Button 
                className="text-white" 
                text={`Update ${title}`} 
              />

            </div>

          </form>
        </div>
      </div>
    </div>
  )
}
