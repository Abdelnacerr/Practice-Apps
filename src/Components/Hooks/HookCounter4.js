import React, {useState} from 'react'

function HookCounter4() {

    const initialItems = []
    const [items, setitems] = useState(initialItems)
    const addItem = ()=>{
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div>
            <button onClick= {addItem}>Add a number</button>
            <button onClick={ () => setitems(initialItems)}>Reset</button>
            <ul>
                {items.map(item =>(
                    <li key={item.id}> {item.value}</li>
                    ))}
            </ul>
        </div>
    )
}

export default HookCounter4
