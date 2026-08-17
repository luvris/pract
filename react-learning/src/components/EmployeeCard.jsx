export default function EmployeeCard() {
    const employee = {
        name: "อุ๋งอิ๋งง",
        department: "IT",
        position: "IT Intern",
        isActive: false
    }

    return (
        <article className="employee-card">
            <h2>ข้อมูลพนักงาน</h2>
            <p>ชื่อ: {employee.name}</p>
            <p>แผนก: {employee.department}</p>
            <p>ตำแหน่ง: {employee.position}</p>
            <p>สถานะ: {employee.isActive ? "กำลังฝึกงาน" : "ฝึกงานเสร็จสิ้น"}</p>
        </article>
    )
}