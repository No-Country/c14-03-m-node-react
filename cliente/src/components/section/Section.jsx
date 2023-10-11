import React from 'react'
export function Section ({ title, children }) {
    return (
        <section id={`section-${title}`} >
            <span className='section-title__shadow'>
                {title.split(' ')[0]}
            </span>
            <h3 className='section-title'>{title}</h3>
            <div>
                {children}
            </div>
        </section>
    )
}
