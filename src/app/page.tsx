import { AddItem, DisplayItems, IntroSection } from "@/components";
import { fetchFoods, ItemInput, parseDateString } from "@/util";

export default async function Home() {
  const items = await fetchFoods();
  const normalizedItems = items.map((item: ItemInput) => ({
    ...item,
    expiry: parseDateString(item.expiry),
  }));

  return (
    <div className="min-h-screen w-full px-8 py-[10%]">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto gap-8 lg:gap-12">
        <div className="w-full flex justify-center px-4">
          <IntroSection />
        </div>

        <div className="w-full flex flex-col items-center gap-8 px-4">
          <div className="w-full max-w-4xl">
            <AddItem />
          </div>

          <div className="w-full max-w-4xl">
            <DisplayItems foodItems={normalizedItems} />
          </div>
        </div>
      </div>
    </div>
  );
}
