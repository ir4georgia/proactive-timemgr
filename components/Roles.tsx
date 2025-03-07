export default async function Roles() {
  // const data = await fetch('https://api.vercel.app/blog')
  const data = await fetch('http://localhost/fetchData-temp.php')
  const roles = await data.json()
  return (
    <div className="flex flex-col gap-4 mb-2">
      {roles.map((role: any) => (
        <div key={role.id} className="flex-col grow bg-white mx-2 min-h-24 text-black font-bold text-xl text-center my-auto"><span>{role.RoleName}</span></div>
      ))}

    </div>
  )
}