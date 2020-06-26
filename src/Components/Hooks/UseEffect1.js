import React, {useState,useEffect} from 'react'

function UseEffect1() {

    const [count, setcount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })


    return (
        <div>
            <button onClick={() => setcount(count + 1)}  > Click {count} times </button>
            
        </div>
    )
}

export default UseEffect1
