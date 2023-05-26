import React from "react"

import './style.scss'


function Header(props) {
    return (
        <header>
            <div className="headerLeft">
                <img src='./images/logo.png' alt="logo" />
                <div className="headerInfo">
                    <h3>REACT SNEAKERS</h3>
                    <p>Магазин лучших кроссовок</p>
                </div>
            </div>
            <ul className="headerRight">
                <li>
                    < img src='./images/card.svg' alt="card" onClick={props.onClickCart} /><span className='headerSpan'><b>1205 руб.</b></span>
                </li>
                <li>
                    <img src='./images/user.svg' alt="user" />
                </li>
            </ul>
        </header>
    )
}

export default Header