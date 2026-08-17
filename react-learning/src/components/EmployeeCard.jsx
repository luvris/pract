import { useState } from "react"

export default function EmployeeCard({
    name,
    department,
    position,
    isActive,
}) {

    const [isEmployeeActive, setIsEmployeeActive] = useState(isActive);
    function handleToggleStatus(){
        setIsEmployeeActive((currentStatus) => !currentStatus);
    }

    return (
        <article className="employee-card">
            <h2>ข้อมูลพนักงาน</h2>
            <p>ชื่อ: {name}</p>
            <p>แผนก: {department}</p>
            <p>ตำแหน่ง: {position}</p>
            <p>สถานะ: {isEmployeeActive ? "กำลังทำงาน" : "ไม่ได้ทำงาน"}</p>
            <button onClick={handleToggleStatus}>
                {isEmployeeActive ? "ปิดสถานะพนักงาน":"เปิดสถานะพนักงาน"}
            </button>
        </article>
    )
}