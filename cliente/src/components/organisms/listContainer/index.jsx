import React from 'react'
import ListCard from '../../molecules/listCard'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'

const ListContainer = ({ listArray }) => {
    return (
        <div className='list-container'>
            <Link to={'/profile'} className='back-to-profile'><BsArrowLeft/> Volver al perfil</Link>
            {/* para editar la lista */}
            <button className='edit-list'><TbEdit /></button>
            <div className='list-container_info'>
                <p className='list-container_title'>{listArray.title}</p>
                <p className='list-container_description'>{listArray.description}</p>
            </div>
            <div className='list-container_items'>
                {
                    listArray.animes.map(item => {
                        return <ListCard key={item.id} item={item}/>
                    })
                }
            </div>
        </div>
    )
}

export default ListContainer
