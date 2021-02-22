import { useState } from "react";

function Counter () {
    let [count, setCount] = useState(0);

    return (
        <div style={{
            width: 200,
            height: 200,
            display: 'grid',
            margin: 'auto',
            justifyItems: 'center',
            alignSelf: 'center',
            padding: 10,
            marginBottom: 10,
        }}>
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