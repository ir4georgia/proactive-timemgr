import Image from "next/image";
import DateTimeComp from "@/components/DateTimeComp"
import Calender from "@/components/Calendar"

export default function Home() {
  return (
    <div className="mainContainer 2xl:container mx-auto p-2 mt-4 mb-4">

      <div className="grid grid-cols-3 md:grid-cols-5 grid-rows-12 md:grid-rows-9 gap-2 auto-rows-fr">
        <div className="superDiv col-span-3 md:col-span-5 bg-red-600">
          <span className="text-lg font-bold">Menu</span>
          <DateTimeComp/>
        </div>
        <div className="superDiv hidden md:block md:row-start-2">Review</div>
        <div className="superDiv hidden md:block md:row-start-2">Planning</div>
        <div className="superDiv hidden md:block md:row-span-2 col-start-3 md:row-start-2">Current Month
          <Calender />
        </div>
        <div className="superDiv hidden md:block row-span-2 col-start-4 md:row-start-2">Current Month +1
          <Calender />
        </div>
        <div className="superDiv hidden md:block row-span-2 col-start-5 md:row-start-2">Current Month +2
          <Calender />
        </div>
        <div className="superDiv hidden md:block col-span-2 col-start-1 md:row-start-3 bg-white text-red-600">Proactive Time Manager Version 0.1</div>
        <div className="superDiv row-span-6 row-start-2 md:row-start-4">Roles</div>
        <div className="superDiv row-span-6 row-start-2 md:row-start-4">Goals</div>
        <div className="superDiv row-span-2 row-start-2 md:row-start-4">Sharpen the Saw
          <Calender />
        </div>
        <div className="superDiv row-span-4 col-start-3 row-start-4 md:row-start-6">Reminders</div>
        <div className="superDiv col-span-3 row-span-5 row-start-8 md:col-span-2 md:col-start-4 md:row-start-4 md:row-span-6">Weekly Schedule</div>
      </div>

    </div>
  );
}
