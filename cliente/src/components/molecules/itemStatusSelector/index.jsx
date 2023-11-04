import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useParams } from 'react-router-dom'

function ItemStatusSelector ({ selectedStatus }) {
    const [selectedOption, setSelectedOption] = selectedStatus
    const { id } = useParams()
    const user = JSON.parse(localStorage.getItem('user'))
    const [statusLists, setStatusLists] = useState(null)

    const handleOptionChange = (e) => {
        setSelectedOption((prevStatus) => {
            if (prevStatus === '') {
                return e.target.value
            }
            deleteItemFromList({ lists: statusLists, idToDelete: id })
            return e.target.value
        })
    }
    const deleteItemFromList = ({ lists, idToDelete }) => {
        const listWithItem = lists.find((list) => list.list.includes(idToDelete))
        const listDeletedItem = listWithItem.list.filter((item) => Number(item) !== Number(idToDelete))
        const otherLists = lists.filter((list) => list.name !== listWithItem.name)
        const newLists = [...otherLists, { name: listWithItem.name, list: listDeletedItem }]

        setStatusLists(newLists)
        localStorage.setItem(`statusLists${user.id}`, JSON.stringify({ userId: user.id, lists: newLists }))
    }
    const addItemToList = ({ lists, idToAdd, listNameToAdd }) => {
        const listToIncrease = lists.find((list) => list.name === listNameToAdd)
        if (!listToIncrease.list.includes(idToAdd)) {
            listToIncrease.list.push(idToAdd)
            const otherLists = lists.filter((list) => list.name !== listNameToAdd)
            const newLists = [...otherLists, listToIncrease]

            setStatusLists(newLists)
            localStorage.setItem(`statusLists${user.id}`, JSON.stringify({ userId: user.id, lists: newLists }))
        }
    }
    const isAnimeInLists = ({ animeId, lists }) => {
        const isInAnyList = lists.find((list) => list.list.includes(animeId))
        if (isInAnyList) {
            setSelectedOption(isInAnyList.name)
        }
    }
    useEffect(() => {
        const localStatusList = localStorage.getItem(`statusLists${user.id}`)
        if (localStatusList) {
            const statusListParsed = JSON.parse(localStatusList)
            console.log('StatusListParsed: ', statusListParsed)

            if (Number(statusListParsed.userId) === Number(user.id)) {
                setStatusLists(statusListParsed.lists)
                isAnimeInLists({ animeId: id, lists: statusListParsed.lists })
            }
        } else {
            const userList = {
                userId: user.id,
                lists: [
                    {
                        name: 'Viendo',
                        list: []
                    },
                    {
                        name: 'Para Ver',
                        list: []
                    },
                    {
                        name: 'Visto',
                        list: []
                    }
                ]
            }
            localStorage.setItem(`statusLists${user.id}`, JSON.stringify(userList))
        }
    }, [])

    useEffect(() => {
        if (selectedOption !== '') {
            toast.success(`Estas siguiendo esta serie en ${selectedOption}`)
            addItemToList({ lists: statusLists, idToAdd: id, listNameToAdd: selectedOption })
            console.log('LocalStatusList: ', JSON.parse(localStorage.getItem(`statusLists${user.id}`)))
        }
    }, [selectedOption])

    return (
        <form>
            <Toaster/>
            <label
                aria-label='Select a status for this Item'
                htmlFor="status-select"
            >
                <select
                    name="status"
                    value={selectedOption}
                    onChange={handleOptionChange}
                    id="status-select"
                >
                    <option value="">-/Selecciona un estado\-</option>
                    <option value="Viendo">
                    Viendo
                    </option>
                    <option value="Visto">Visto</option>
                    <option value="Para Ver">Para ver</option>
                </select>
            </label>
        </form>
    )
}

export default ItemStatusSelector
