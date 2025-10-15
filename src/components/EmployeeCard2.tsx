export default function EmployeeCard2() {
  const name = "Theodore Carter Junior";
  const title = "Customer Service Representative";
  const bio = "Handles customer inquiries and provides technical support. Known for excellent communication and problem-solving skills.";

  return (
    <div className="flex max-w-2xl mx-auto rounded-r-full shadow-md overflow-hidden">
      <div className="bg-blue-600 rounded-s-md text-white p-6 w-1/3">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-slate-300 mt-1">{title}</p>
      </div>
      <div className="border border-stone-300 p-4 w-2/3 text-sm text-black">
        <p>{bio}</p>
      </div>
    </div>
  );
}