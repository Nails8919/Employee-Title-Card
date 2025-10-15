export default function EmployeeCard3(){
  const name = "Chloe Lee";
  const title = "UX/UI Designer";
  const bio = "Creates user-friendly interfaces and visual designs.";

  return (
    <div className="flex flex-col items-start max-w-lg mx-auto">
      <div className="bg-pink-500 text-white p-4 w-full rounded-r-lg rounded-tl-lg text-center">
        {bio}
      </div>
      <div className="bg-pink-100 p-3 rounded-b-lg border border-pink-300 -mt-0 ml-0 shadow-sm">
        <h2 className="text-pink-700 font-medium">{name}</h2>
        <p className="text-sm text-pink-600">{title}</p>
      </div>
    </div>
);
}