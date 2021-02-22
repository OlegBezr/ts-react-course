import { useState } from "react";
import styleClasses from "./Counter.module.css";

function Counter () {
    let [count, setCount] = useState(0);

    return (
        <div className={styleClasses.Counter}>
            <h1>
                {count}
            </h1>
            <br/>
            <button
                onClick={
                    () => {
                        setCount(count + 1);
                    }
                }
                style={{
                    width: 100,
                    height: 100
                }}
            >
                +1
            </button>
        </div>
    );
}

export {Counter};