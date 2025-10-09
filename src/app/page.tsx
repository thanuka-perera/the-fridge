'use client'
import AddToFridge from "@/components/organisms/AddToFridge";
import DisplayItems from "@/components/organisms/DisplayItems";
import Greeting from "@/components/organisms/Greeting";

export default function Home() {

  return (
    <div className="min-h-screen flex flex-col gap-4 w-full items-center justify-center px-6 py-10">
      <Greeting />
      <div className="">
        <AddToFridge />
        <DisplayItems />
      </div>
    </div>
  );
}
