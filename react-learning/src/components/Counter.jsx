import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrease() {
        setCount((currentCount) => currentCount + 1);
    }

    function handleDecrease() {
        setCount((currentCount) => {
            if (currentCount <= 0) {
                return 0;
            }

            return currentCount - 1;
        });
    }

    function handleIncreaseFive() {
        setCount((currentCount) => currentCount + 5);
    }

    function handleReset() {
        setCount(0)
    }

    return (
        <section>
            <h2>
                Employee Counter
            </h2>
            <p>จำนวนพนักงานที่เลือก: {count}</p>
            <button onClick={handleIncreaseFive}>เพิ่มทีละ5</button>
            <button onClick={handleIncrease}>เพิ่ม</button>
            <button onClick={handleDecrease}>ลด</button>
            <button onClick={handleReset}>Reset</button>
        </section>
    )

}