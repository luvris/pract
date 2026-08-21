import { useState } from "react";
import Counter from "./components/Counter";
import EmployeeCard from "./components/EmployeeCard";
import EmployeeForm from "./components/EmployeeForm";

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

  function handleClearEmployees() {
    setEmployees([]);
  }

  function handleAddEmployee(newEmployee){
    console.log(newEmployee)
  }

  return (
    <main>
      <h1>Employee Management</h1>
      <EmployeeForm onAddEmployee={handleAddEmployee}/>

      <Counter />

      <button onClick={handleToggleList}>
        {isListVisible ? "ซ่อนรายชื่อพนักงาน" : "แสดงรายชื่อพนักงาน"}
      </button>
      <button onClick={handleClearEmployees}>
        ลบพนักงานทั้งหมด
      </button>
      {isListVisible ? (
        <>
          {employees.length === 0 && <p>ไม่พบพนักงาน</p>}

          {employees.map((employee) => (
            <EmployeeCard
              key={employee.id}
              employee={employee}
              onToggle={handleToggleEmployeeStatus}
            />
          ))}
        </>
      ) : (
        <p>คลิกปุ่มด้านบนเพื่อแสดงรายชื่อพนักงาน</p>
      )}
    </main>
  );
}

export default App;