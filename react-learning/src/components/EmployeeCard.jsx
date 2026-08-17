export default function EmployeeCard({ employee, onToggle }) {
  function handleToggleStatus() {
    onToggle(employee.id);
  }

  return (
    <article className="employee-card">
      <h2>ข้อมูลพนักงาน</h2>
      <p>ชื่อ: {employee.name}</p>
      <p>แผนก: {employee.department}</p>
      <p>ตำแหน่ง: {employee.position}</p>
      <p>สถานะ: {employee.isActive ? "กำลังทำงาน" : "ไม่ได้ทำงาน"}</p>

      <button onClick={handleToggleStatus}>
        {employee.isActive ? "ปิดสถานะพนักงาน" : "เปิดสถานะพนักงาน"}
      </button>
    </article>
  );
}