import React from 'react'
function Aside ({ title, elements }) {
    return (

        <aside className="aside-container">
            <h2>{title}</h2>
            <ul className="element-list">
                {elements.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside
