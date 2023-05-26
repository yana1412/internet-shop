import React from "react"

import './style.scss'
function Drawer({ onClose, items = [], onRemove }) {
    return (
        <div className="overlay">
            <div className="drawer">
                <div className='drawerWrapper'>
                    <h2>Корзина <img onClick={onClose} className='cardRemove' src='/images/delete.svg' alt="delete" /></h2>
                    {items.length > 0 ?
                        <div className="itemsWrapper">
                            <div className="items">
                                {items.map(obj =>
                                    <div className="cartItem">
                                        <img width={70} height={70} src={obj.imageUrl} alt="sneakers" />
                                        <div className='cartPrise'>
                                            <p>{obj.name}</p>
                                            <b>{obj.price}</b>
                                        </div>
                                        <img className='cardRemove' onClick={() => {
                                            onRemove(obj.id)
                                        }} src='./images/delete.svg' alt="delete" />
                                    </div>
                                )}
                            </div>
                            <div className='cardTotalBlock'>
                                <ul>
                                    <li>
                                        <span>Итого</span>
                                        <div></div>
                                        <b>21 498 руб. </b>
                                    </li>
                                    <li>
                                        <span>Налог 5%</span>
                                        <div></div>
                                        <b>1074 руб. </b>
                                    </li>
                                </ul>
                                <button className='greenButton'>Оформить заказ
                                    <img src='./images/arrow.svg' alt="arrow" />
                                </button>
                            </div>
                        </div>

                        : (<div className="cartEmpty">
                            <img className="cartEmptyImg" src="/images/cart.jpg" alt="cart" />
                            <h2>Корзина пустая</h2>
                            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button className='greenButton' onClick={onClose}>
                                <img className="greenButtonImg"  src='./images/arrow.svg' alt="arrow" />
                                Вернуться назад
                            </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Drawer