import EmployeeCard from "./components/EmployeeCard";
import Counter from "./components/Counter";

function App() {

  return (
    <main>
      <h1>Employee Management</h1>

      <Counter />

      <EmployeeCard
        name="Test"
        department="IT"
        position="It intern"
        isActive={true}
      />
      <EmployeeCard
        name="Test 2"
        department="HR"
        position="HR intern"
        isActive={false}
      />
    </main>
  );
}

export default App;