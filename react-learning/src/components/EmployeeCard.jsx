export default function EmployeeCard({
    name,
    department,
    position,
    isActive,
}) {
    return (
        <article className="employee-card">
            <h2>ข้อมูลพนักงาน</h2>
            <p>ชื่อ: {name}</p>
            <p>แผนก: {department}</p>
            <p>ตำแหน่ง: {position}</p>
            <p>สถานะ: {isActive ? "กำลังฝึกงาน" : "ฝึกงานเสร็จสิ้น"}</p>
        </article>
    )
}