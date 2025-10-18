'use client'

import { ItemComponent, UpdateModal, DeleteModal } from '@/components';
import { DisplayItemsProps, deleteFood, ItemInput, Item, updateFood, dateToInputString } from '@/util'
import { FC, useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'sonner'

export const DisplayItems: FC<DisplayItemsProps> = ({ foodItems }: DisplayItemsProps) => {

    const [items, setItems] = useState<Item[]>(foodItems);
    const [deleteItemData, setDeleteItemData] = useState<Item | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [updateItemData, setUpdateItemData] = useState<Item | null>(null);
    const [isUpdating, setIsUpdating] = useState(false);
    const [formItemData, setFormItemData] = useState<ItemInput | null>(null);
    const router = useRouter();

    const handleDelete = async () => {
        if (!deleteItemData || isDeleting) return;
        try {
            setIsDeleting(true);
            await deleteFood(deleteItemData._id);
            router.refresh();
            toast.success('Item deleted successfully');
            setDeleteItemData(null);
        } catch (err) {
            console.error('Delete failed:', err);
            toast.error('Error deleting Item')
        } finally {
            setIsDeleting(false);
        }
    };

    const handleUpdate = async () => {

        if (!updateItemData || isUpdating) return;

        if (!formItemData) return;

        try {
            setIsUpdating(true);
            await updateFood(updateItemData._id!, { title: formItemData.title, expiry: formItemData.expiry });
            router.refresh();
            setUpdateItemData(null)
            toast.success(`${updateItemData.title} updated successfully`);
        }
        catch (err) {
            console.error('Update failed:', err);
            toast.error(`Failed to update ${updateItemData.title}`)
        }
        finally {
            setIsUpdating(false);
        }
    }

    useEffect(() => {
        const sorted = [...foodItems].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setItems(sorted);
    }, [foodItems]);

    return (
        <div className='w-full space-y-1'>

            <div className="flex justify-end items-center">

                <div className='text-sm font-medium px-3 py-4 grid justify-end items-center'>
                    Total items- {items.length}
                </div>
            </div>

            {items.length === 0 ? (
                <div className='w-full flex flex-col items-center justify-center gap-3 p-6 border  border-gray-300 rounded-lg bg-white'>
                    <div className='text-gray-500 text-center'>No items in the fridge. Start by adding some!</div>
                </div>
            ) : (
                <div className="grid gap-2">
                    {items.map(item => (
                        <ItemComponent
                            key={item._id}
                            itemDetails={item}
                            onDelete={() => setDeleteItemData(item)}
                            onClick={() => {
                                setUpdateItemData(item);
                                setFormItemData({
                                    _id: item._id,
                                    title: item.title,
                                    expiry: item.expiry ? dateToInputString(item.expiry) : '',
                                    price: item.price,
                                    createdAt: item.createdAt,
                                });
                            }}
                        />
                    ))}

                </div>

            )}

            {deleteItemData && (
                <DeleteModal
                    itemToDelete={deleteItemData}
                    onConfirm={handleDelete}
                    onClose={() => setDeleteItemData(null)}
                />
            )}

            {updateItemData && (
                <UpdateModal
                    itemToEdit={formItemData}
                    setUpdatedItem={setFormItemData}
                    onClose={() => { setUpdateItemData(null); setFormItemData(null); }}
                    onConfirm={handleUpdate}
                />
            )}

        </div>
    )
}