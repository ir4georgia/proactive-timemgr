export default async function Goals() {
  // const data = await fetch('https://api.vercel.app/blog')
  const data = await fetch('http://localhost/fetchData-temp.php')
  const goals = await data.json()
  return (
    <div className="flex flex-col gap-4 mb-2">
      {goals.map((item:any) => (
        <div key={item.id} className="flex-col grow bg-white mx-2 min-h-24 px-2  my-auto">
          <ul>
            {item.Goals.map((goals: any) => (
              <li key={goals.id} className="list-disc text-black font-bold text-lg  text-left">{goals.GoalName}</li>
            ))}
          </ul>
        </div>
      ))}

    </div>
  )
}