import { useState } from "react"

export default function EmployeeForm({ onAddEmployee }) {

    const [name, setName] = useState("");
    const [department, setDepartment] = useState("");
    const [position, setPosition] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        onAddEmployee({
            id: Date.now(),
            name: name,
            department: department,
            position: position,
            isActive: true
        })
        setName("");
        setDepartment("");
        setPosition("");
    }

    return (
        <section>
            <h2>
                เพิ่มพนักงาน
            </h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="employeeName">ชื่อพนักงาน</label>
                <input id="employeeName" type="text" value={name} onChange={(e) => { setName(e.target.value) }} /> <br></br>
                <label htmlFor="department">
                    แผนก
                </label>
                <input id="department" type="text" value={department} onChange={(e) => { setDepartment(e.target.value) }} />
                <br></br>
                <label htmlFor="position">
                    ตำแหน่ง
                </label>
                <input id="position" type="text" value={position} onChange={(e) => { setPosition(e.target.value) }} />
                <br>
                </br>
                <button type="submit">เพิ่มพนักงาน</button>
            </form>
        </section>
    )

}