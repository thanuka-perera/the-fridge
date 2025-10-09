'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { Item, AddItem, FridgeContextType } from "@/util/interfaces/fridge"
import { fetchItems, saveItem, removeItem, updateItem2 } from '@/util/api/Api';
import { toast } from 'sonner'
import { FC } from 'react'


const FridgeContext = createContext<FridgeContextType>({
  items: [],
  loading: false,
  error: '',
  refreshFridge: () => { },
  addItem: async () => { },
  deleteItem: async () => { },
  updateItem: async () => { }
});

export const FridgeProvider: FC<{ children: React.ReactNode }> = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('')

  const getItems = async () => {
    try {
      setLoading(true);
      const data = await fetchItems();
      setItems(data);
      setError("");
    }
    catch (error) {
      setError("Failed to load items. Please try again later.");
      toast.error('Failed to load fridge items');
      console.error("Failed to fetch items: ", error)
    }
    finally {
      setLoading(false)
    }

  }

  const addItem = async (item: AddItem) => {
    try {
      setLoading(true);
      await saveItem(item);
      toast.success(`${item.title} Item added to Fridge`)
      await getItems();
    } catch (error) {
      console.error("Add item error:", error);
      toast.error(`Error adding ${item.title}`)
      setError("Failed to add item.");
    } finally {
      setLoading(false);
    }
  };

  const deleteItem = async (itemId: string) => {
    try {
      setLoading(true);
      await removeItem(itemId);
      toast.success("Item deleted successfully");
      await getItems();
    } catch (error) {
      console.error("Failed to delete item:", error);
      toast.error("Error deleting Item")
      setError("Failed to delete item.");
    } finally {
      setLoading(false);
    }
  };

  const updateItem = async (itemId: string, updatedItem: AddItem) => {
    try {
      setLoading(true);
      await updateItem2(itemId, updatedItem);
      toast.success(`${updatedItem.title} updated successfully`);
      await getItems();
    } catch (err) {
      console.error("Update item error:", err);
      toast.error(`Failed to update ${updatedItem.title}`)
      setError("Failed to update item");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getItems();
  }, []);

  return (
    <FridgeContext.Provider value={{ items, loading, error, refreshFridge: getItems, addItem, deleteItem, updateItem }}>
      {children}
    </FridgeContext.Provider>
  );
}

export const useFridge = (): FridgeContextType => {  
  const context = useContext(FridgeContext);
  if (!context) throw new Error('useFridge must be used within FridgeProvider');
  return context;
}
