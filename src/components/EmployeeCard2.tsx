export default function EmployeeCard2() {
  const name = "Theodore Carter Junior";
  const title = "Customer Service Representative";
  const bio = "Handles customer inquiries and provides technical support. Known for excellent communication and problem-solving skills.";

  return (
    <div className="flex max-w-2xl mx-auto rounded-r-full shadow-md overflow-hidden">
      <div className="bg-blue-600 rounded-s-md text-white p-6 w-1/2">
        <h2 className="text-lg font-semibold">{name}</h2>
        <p className="text-sm text-slate-300 mt-1">{title}</p>
      </div>
      <div className="border border-slate-300 rounded-r-full text-sm p-4 text-black">
        <p className="m-4">{bio}</p>
      </div>
    </div>
  );
}