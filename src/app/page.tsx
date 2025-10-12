import { AddToFridge,DisplayItems,Greeting } from "@/components";

export default function Home() {

  return (
    <div 
      className="min-h-screen flex flex-col gap-4 w-full items-center justify-center px-6 py-10"
    >
      <Greeting />

      <div className="">
        <AddToFridge />
        <DisplayItems />
      </div>

    </div>
  );
}
