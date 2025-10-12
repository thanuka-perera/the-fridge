'use client'

import { ItemComponent, Loading, DeleteConfirmDialog, ItemForm } from '@/components';
import { useFridge } from '@/context';
import { Item } from '@/util'
import { FC ,useState } from 'react'


export const DisplayItems: FC = () => {
    const { items, loading, deleteItem } = useFridge();
    const [deleteItemData, setDeleteItemData] = useState<Item | null>(null);
    const [isDeleting, setIsDeleting] = useState(false);
    const [editItem, setEditItem] = useState<Item | null>(null);

    const handleDelete = async () => {
        if (!deleteItemData || isDeleting) return;
        try {
            setIsDeleting(true);
            await deleteItem(deleteItemData._id!);
            setDeleteItemData(null);
        } catch (err) {
            console.error("Delete failed:", err);
        } finally {
            setIsDeleting(false);
        }
    };

    if (loading) return <Loading />
    
    return (
        <div className="w-full grid grid-cols-1  space-y-1">

            <div className="font-semibold px-3 py-4 grid justify-end items-center">
                Total items- {items.length}
            </div>

            {items.map(item => (
                <ItemComponent 
                    key={item._id} 
                    itemDetails={item} 
                    onDelete={() => setDeleteItemData(item)} 
                    onClick={() => setEditItem(item)} 
                />
            ))}

            {deleteItemData && (
                <DeleteConfirmDialog
                    itemToDelete={deleteItemData}
                    onCancel={() => setDeleteItemData(null)}
                    onConfirm={handleDelete}
                />
            )}

            {editItem && (
                <ItemForm
                    itemToEdit={editItem}
                    onClose={() => setEditItem(null)}
                />
            )}

        </div>
    )
}