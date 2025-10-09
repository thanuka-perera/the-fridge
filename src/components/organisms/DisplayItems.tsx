'use client'
import Loading from '../atoms/Loading';
import ItemComponent from '../atoms/Item';
import { useFridge } from '@/context/FridgeContext';
import { useState } from 'react'
import DeleteConfirmDialog from './DeleteConfirmDialog';
import { Item } from '@/util/interfaces/fridge'
import ItemForm from '../molecules/ItemForm';

export default function DisplayItems() {
    const { items, loading, error, deleteItem } = useFridge();
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
    if (error) return <div className="text-red-500 text-center">{error}</div>;

    return (
        <div className="w-full grid grid-cols-1  space-y-1">
            
            <div className="font-semibold px-3 py-4 grid justify-end items-center">Total items- {items.length}</div>
            {items.map(item => (
                <ItemComponent key={item._id} item={item} onDelete={() => setDeleteItemData(item)} onClick={() => setEditItem(item)} />
            ))}

            {deleteItemData && (
                <DeleteConfirmDialog
                    item={deleteItemData}
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