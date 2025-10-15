import EmployeeCard1 from "./components/EmployeeCard1";
import EmployeeCard2 from "./components/EmployeeCard2";
import EmployeeCard3 from "./components/EmployeeCard3";


export default function App() {
  return (
    <div>
      <div>
        <header className="text-center p-4 border-b text-2xl font-semibold text-gray-700">
          Employee Title Card
        </header>
      </div>
      <div className="flex flex-col gap-6 p-8">
        <EmployeeCard1 />
        <EmployeeCard2 />
        <EmployeeCard3 />
      </div>
      <div>
        <footer className="text-center p-4 border-t mt-8 text-sm text-gray-500">
          2025 Lisa Mapp 0181917 Assessment
        </footer>
      </div>
    </div>
  );
}