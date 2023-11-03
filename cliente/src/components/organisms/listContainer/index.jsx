import React from 'react'
import ListCard from '../../molecules/listCard'
import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'
import { TbEdit } from 'react-icons/tb'

const ListContainer = ({ list }) => {
    const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div className='list-container'>
            <Link to={`/profile/${user.id}`} className='back-to-profile'><BsArrowLeft/> Volver al perfil</Link>
            {/* para editar la lista */}
            <button className='edit-list'><TbEdit /></button>
            <div className='list-container_info'>
                <p className='list-container_title'>{list.title}</p>
                <p className='list-container_description'>{list.description}</p>
            </div>
            <div className='list-container_items'>
                <ListCard list={list}/>
            </div>
        </div>
    )
}

export default ListContainer
