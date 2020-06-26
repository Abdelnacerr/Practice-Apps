import React, {useState} from 'react'

function HookCounter2() {
    const initialCount = 0
    const [count, setcount] = useState(initialCount)
    return (
        <div>
            count: {count}
            <button onClick= {() => setcount(initialCount)}>Reset</button>
            <button onClick= {() => setcount(count + 1)}>Increment</button>
            <button onClick= {() => setcount(count - 1)}>Decrement</button>
        </div>
    )
}

export default HookCounter2
