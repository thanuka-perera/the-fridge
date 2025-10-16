'use client'

import { Button } from '@/components';
import { ConfirmDeleteProps } from '@/util'
import { FC, useState } from 'react'
import { Loader,Trash2 } from 'lucide-react'

export const DeleteConfirmDialog: FC<ConfirmDeleteProps> = ({
    itemToDelete,
    onCancel,
    onConfirm,
    onClose,
}: ConfirmDeleteProps) => {

    const [loading, setLoading] = useState<boolean>(false);

    const handleDelete = async (e: React.FormEvent) => {
        e.preventDefault();
    
          setLoading(true);
          await onConfirm();
          setLoading(false);
        
        onClose();
      }

    return (

        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50'>

            <div className='bg-white rounded-2xl shadow-lg w-96 p-6 relative'>
                <div className='flex flex-col items-center gap-4'>
                    <Trash2
                        className='text-red-500'
                        size={36}
                    />
                    <h2 className='text-lg font-bold text-gray-800'>
                        Delete &quot;{itemToDelete.title}&quot;?
                    </h2>
                    <p className='text-sm text-gray-500 text-center'>
                        This action is irreversible. Are you sure you want to delete this item from your fridge?
                    </p>

                    <div className='flex items-center justify-center gap-12 mt-4 w-full'>

                        <Button
                            buttonText='Cancel'
                            onClick={onCancel}
                            classname='flex-1 border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                        />

                        <Button
                            buttonText={
                                loading ? (
                                    <>
                                        Deleting
                                        <Loader className="animate-spin w-4 h-4" />
                                    </>
                                ) : (
                                    'Delete Item'
                                )
                            }
                            onClick={handleDelete}
                            
                            classname={`flex gap-2 items-center bg-red-500 text-white hover:bg-red-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                        />

                    </div>
                </div>
            </div>

        </div>
    )

}