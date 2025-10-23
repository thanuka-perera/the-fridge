import { Loader } from "lucide-react";
import { FC } from "react";

export const Loading: FC = () => {
  return (
    <div className="flex flex-col space-y-4 text-gray-500 items-center justify-center p-12">
      <Loader className="animate-spin" />

      <span>Loading Fridge Items</span>
    </div>
  );
};
