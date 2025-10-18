export default function EmployeeCard1() {
  const name = "Maria Rodriguez";
  const title = "Marketing Manager";
  const bio = "Manages digital marketing campaigns and social media strategy. Highly skilled in SEO and content creation.";

  return (
    <div className="max-w-sm mx-auto rounded-lg overflow-hidden shadow-md">
      <div className="bg-cyan-600 text-white p-4 w-[400px]">
        <p>{bio}</p>
      </div>
      <div className="bg-gray-50 p-4 text-center w-[400px]">
        <h2 className="text-cyan-700 font-medium text-lg">{name}</h2>
        <p className="text-gray-400 text-sm">{title}</p>
      </div>
    </div>
  );
}