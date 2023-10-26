import React from 'react'
function Aside ({ title, elements }) {
    return (

        <aside className="aside-container">
            <div className="aside__title">

                <h2>{title}</h2>
            </div>
            <ul className="element-list">
                {elements.map((element, index) => (
                    <li className='element-list__item'key={index}>{element}</li>
                ))}
            </ul>
        </aside>
    )
}

export default Aside
