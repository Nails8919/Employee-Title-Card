import EmployeeCard1 from "./components/EmployeeCard1";
import EmployeeCard2 from "./components/EmployeeCard2";
import EmployeeCard3 from "./components/EmployeeCard3";

<div>
  <p>Employee Title Card</p>
</div>

export default function App() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <EmployeeCard1 />
      <EmployeeCard2 />
      <EmployeeCard3 />
    </div>
  );
}