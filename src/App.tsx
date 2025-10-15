import EmployeeCard1 from "./components/EmployeeCard1";
import EmployeeCard2 from "./components/EmployeeCard2";

export default function App() {
  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      <EmployeeCard1 />
      <EmployeeCard2 />
    
    </div>
  );
}