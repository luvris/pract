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

  const [isListVisible, setIsListVisible] = useState(true);
  function handleToggleList() {
    setIsListVisible((currentVisibility) => !currentVisibility);
  }

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

      <button onClick={handleToggleList}>
        {isListVisible ? "ซ่อนรายชื่อพนักงาน" : "แสดงรายชื่อพนักงาน"}
      </button>
      {isListVisible ? (
        employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onToggle={handleToggleEmployeeStatus}
          />
        ))
      ) : (
        <p>ยังไม่ได้แสดงรายชื่อพนักงาน</p>
      )}
    </main>
  );
}

export default App;