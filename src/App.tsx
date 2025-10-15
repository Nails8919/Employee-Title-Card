import EmployeeCard1 from "./components/EmployeeCard1";
import EmployeeCard2 from "./components/EmployeeCard2";
import EmployeeCard3 from "./components/EmployeeCard3";

export default function App() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <EmployeeCard1 />
      <EmployeeCard2 />
      <EmployeeCard3 />
    </div>
  );

<div>
  <footer className="text-center text-gray-400 text-sm mt-12">
  {new Date().getFullYear()} Lisa Mapp 0181917 Assessment
  </footer>
</div>
}