export default function PlanStep() {
    return (
        <div className="grid grid-cols-4 grid-rows-2 gap-1">
            <div className="w-full h-full border border-red-600 text-center">3</div>
            <div className="col-span-3 w-full h-full border border-red-600 text-left">Identify Goals</div>
            <div className="row-start-2 w-full h-full border border-red-600 text-center">4</div>
            <div className="col-span-3 row-start-2 w-full h-full border border-red-600 text-left">Plan Weekly</div>
        </div>
    )
}