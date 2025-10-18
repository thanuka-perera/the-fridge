"use client";

import { useRouter } from "next/navigation";
import { TriangleAlert, Loader } from "lucide-react";
import { useState, FC } from "react";
import { Button, CustomInput } from "@/components";
import { FormData, inputStringToDisplayString, saveFood } from "@/util";
import { toast } from "sonner";

export const AddItem: FC = () => {
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState<FormData>({
    itemName: "",
    expiryDate: "",
  });
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

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

    const formattedDate = inputStringToDisplayString(formData.expiryDate);
    if (!formattedDate) {
      setError("Invalid date entered.");
      return;
    }

    const enteredDate = new Date(formData.expiryDate.replaceAll("/", "-"));

    if (isNaN(enteredDate.getTime())) {
      setError("Invalid date entered.");
      return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (enteredDate < today) {
      setError("Expiry date cannot be in the past.");
      return;
    }

    const item = {
      title: formData.itemName,
      expiry: formattedDate,
    };

    try {
      setLoading(true);
      await saveFood(item);
      toast.success(`${item.title} added to Fridge`);
      setFormData({ itemName: "", expiryDate: "" });
    } catch (error) {
      console.error("Add item error:", error);
      toast.error(`Error adding ${item.title}`);
      setError("Failed to add item.");
    } finally {
      setLoading(false);
    }
    setError("");

    router.refresh();
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-white border border-[#E3E9F1] rounded-xl shadow-sm p-6 lg:p-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6 items-end">
          <div className="lg:col-span-1">
            <CustomInput
              inputLabel="Item Name"
              inputEmoji="🍉"
              inputName="itemName"
              inputPlaceholder="Enter item name"
              inputValue={formData.itemName}
              onChange={handleChange}
            />
          </div>

          <div className="lg:col-span-1">
            <CustomInput
              inputLabel="Expiry Date"
              inputEmoji="⏰"
              inputName="expiryDate"
              inputPlaceholder="YYYY-MM-DD"
              inputType="date"
              inputValue={formData.expiryDate}
              onChange={handleChange}
            />
          </div>

          <div className="lg:col-span-1 flex lg:justify-end">
            <Button
              classname="w-full lg:w-auto text-white text-md flex gap-2 items-center justify-center min-w-[200px]"
              disabled={loading}
              buttonText={
                loading ? (
                  <>
                    Adding
                    <Loader className="animate-spin w-4 h-4" />
                  </>
                ) : (
                  "Add to Fridge"
                )
              }
              type="submit"
            />
          </div>
        </div>

        {error && (
          <div className="mt-4 text-red-500 text-sm flex items-center gap-2 p-2 bg-red-50 rounded-lg border border-red-200">
            <TriangleAlert size="14" /> {error}
          </div>
        )}

        <div className="mt-4 text-gray-500 text-sm flex items-center sm:justify-start justify-center gap-1 p-1">
          <TriangleAlert
            className="text-gray-500 mt-0.5 flex-shrink-0"
            size="14"
          />
          We don&apos;t want more than one piece of the same food in our fridge.
        </div>
      </form>
    </div>
  );
};
