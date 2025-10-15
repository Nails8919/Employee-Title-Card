export default function EmployeeCard2() {
  return (
    <div className="flex max-w-2xl mx-auto rounded-r-full shadow-md overflow-hidden">
      <div className="bg-blue-600 rounded-s-md text-white p-6 w-1/3">
        <h2 className="text-lg font-semibold">Theodore Carter Junior</h2>
        <p className="text-sm text-slate-300 mt-1">Customer Service Representative</p>
      </div>
      <div className="bg-slate-100 p-4 w-2/3 text-sm text-black">
        <p>Handles customer inquiries and provides technical support. Known for excellent communication and problem-solving skills.</p>
      </div>
    </div>
  );
}