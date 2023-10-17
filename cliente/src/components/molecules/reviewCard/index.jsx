import React from 'react'
import StarRating from '../../atoms/starRating'
import MangaCover from '../../atoms/mangaCover'
const arrManga = [
    {
        id: 1,
        title: 'Demon Slayer y sus redonditos de ricota',
        image: 'https://i.ebayimg.com/images/g/ACIAAOSwdnphKthz/s-l1600.png',
        score: 9.7
    },
    {
        id: 2,
        title: 'Demon Slayer y sus redonditos de ricota pasados por manteca',
        image: 'https://prod-printler-front-as.azurewebsites.net/media/photo/126779.jpg',
        score: 9.0
    },

    {
        id: 3,
        title: 'Otro titulo falso de demostracion',
        image: 'https://m.media-amazon.com/images/I/81pO1o2RmPL.jpg',
        score: 5.6
    },
    {
        id: 4,
        title: 'Y uno mas',
        image: 'https://www.ubuy.com.ph/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFzK2p4RTVLRUwuX0FDX1NMMTUwMF8uanBn.jpg'
    }
]
// const arrUsers = [

//     {
//         id: 1,
//         user: 'juanito',
//         userImage: 'https://randomuser.me/api/portraits/men/79.jpg'
//     },
//     {
//         id: 2,
//         user: 'carlita',
//         userImage: 'https://randomuser.me/api/portraits/women/79.jpg'
//     }
// ]

export default function ReviewCard ({ item }) {
    // const user = arrUsers.filter(u => u.id === item.idUser)[0]
    const manga = arrManga.filter(u => u.id === item.idManga)[0]
    return (
        <>
            <div className='review-card'>
                <a className='review-card__link' href="#">
                    <div className="review-card__cover">

                        <MangaCover item ={manga}/>
                    </div>
                    <div className="review-card__data">
                        <div className="review-card__title">
                            <div className='review-card__title--trunc'>
                                {manga.title}
                            </div>
                            {manga.score && (
                                <div className='review-card__rating'>
                                    <StarRating itemScore={manga.score}/>
                                </div>
                            )
                            }
                        </div>
                        <p className="review-card__content">
                            {item.content}
                        </p>
                        <div className="review-card__user-info">
                            <span>{item.date}</span>
                        </div>
                    </div>

                </a>
            </div>
        </>
    )
}
