import React from 'react'
import { useState } from 'react'

import './style.scss'

function Card({ imageUrl, name, price, onPlus }) {
    const [isAdded, setIsAdded] = useState(false)
    const [isFavorite, setFavorite] = useState(false)

    const onClickPlus = () => {
        onPlus({ imageUrl, name, price })
        setIsAdded(!isAdded)
    }

    const onClickFavorite = () => {
        if (isFavorite === false) {
            setFavorite(true)
        } else {
            setFavorite(false)
        }
    }

    return (
        <div className='card'>
            <div className='favorite' onClick={onClickFavorite}>
                <img src={isFavorite ? './images/heart-like.svg' : './images/heart-unliked.svg'} alt="unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="img" />
            <h5>{name}</h5>
            <div className='cardPrise'>
                <div>
                    <p>Цена:</p>
                    <b>{price} pyб.</b>
                </div>
                <img className='plus' width={32} height={32} src={isAdded ? './images/cheked.svg' : './images/plus.svg'} alt="sneaker" onClick={onClickPlus} />
            </div>
        </div>
    )
}


export default Card
