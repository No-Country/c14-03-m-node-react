import React, { useState } from 'react'
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'
import PlayButton from '../../atoms/playButton'
export default function TrailerCard ({ item }) {
    const [isMarked, setIsMarked] = useState(item.isMarked)
    function handleBookmark () {
        setIsMarked(!isMarked)
    }
    return (
        <>
            <div className="trailer card">
                <div className="trailer__image-container">

                    <img src={item.image} alt= {`Caratula trailer de ${item.title}`} className="trailer__image" />
                    <div className="trailer__image--gradient">
                    </div>
                    <PlayButton/>
                </div>
                <div className="trailer__title-container">
                    <div>
                        <p className="trailer__title">{item.title}</p>
                    </div>
                    <div className="bookmark-icon" onClick={handleBookmark}>

                        {isMarked
                            ? <BsBookmarkFill />
                            : <BsBookmark/>
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
