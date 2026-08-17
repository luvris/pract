import { useState } from "react";
import Counter from "./components/Counter";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Test",
      department: "IT",
      position: "IT Intern",
      isActive: true,
    },
    {
      id: 2,
      name: "Test 2",
      department: "HR",
      position: "HR Intern",
      isActive: false,
    },
  ]);

  function handleToggleEmployeeStatus(employeeId) {
    setEmployees((currentEmployees) => {
      return currentEmployees.map((employee) => {
        if (employee.id === employeeId) {
          return {
            ...employee,
            isActive: !employee.isActive,
          };
        }

        return employee;
      });
    });
  }

  return (
    <main>
      <h1>Employee Management</h1>

      <Counter />

      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          onToggle={handleToggleEmployeeStatus}
        />
      ))}
    </main>
  );
}

export default App;