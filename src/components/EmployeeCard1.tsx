export default function EmployeeCard1() {
  const name = "Theodore Carter Junior";
  const title = "Customer Service Representative";
  const description = "Handles customer inquiries and provides technical support. Known for excellent communication and problem-solving skills.";

  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md">
      <div className="bg-cyan-600 text-white p-4">
        <p>{description}</p>
      </div>
      <div className="bg-gray-50 p-4 text-center">
        <h2 className="text-cyan-700 font-medium text-lg">{name}</h2>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
}