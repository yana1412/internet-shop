import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from './components/Header/Header'
import Drawer from './components/Drawer/Drawer'
import Card from './components/Card/Card'

import './styles/reset.css'
import './styles/main.scss'


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    axios.get('https://6460a855ca2d89f7e75c2f78.mockapi.io/items').then(res =>
      setItems(res.data)
    )

    axios.get('https://6460a855ca2d89f7e75c2f78.mockapi.io/cart').then(res =>
      setCartItems(res.data)
    )
  }, [])

  const onRemoveItem = (id) => {
    axios.delete(`https://6460a855ca2d89f7e75c2f78.mockapi.io/cart/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const onAddToCart = (obj) => {

    if (cartItems.find((item) => item.id === obj.id)) {
      setCartItems(prev => prev.filter(item => item.id !== obj.id))
    } else {
      axios.post('https://6460a855ca2d89f7e75c2f78.mockapi.io/cart', obj)
      setCartItems(prev => [...prev, obj])
    }
  }

  const onChangrSearchInput = (event) => {
    setSearchValue(event.target.value)
  }

  return (
    <div className={`wrapper ${cartOpened ? 'mobile-hide' : ''}`}>
      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} /> : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className='contentWrapper'>
          <h1>{searchValue ? `Пoиск по запросу: ${searchValue}` : 'Bсе красовки'}</h1>
          <div className='seach'>
            <img src='./images/seach.svg' alt="search" />
            <input onChange={onChangrSearchInput} value={searchValue} type="text" placeholder='Поиск...' />
          </div>
        </div>
        <div className='sneakers'>
          {
            items
              .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) =>
                <Card name={item.name}
                  key={index}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onPlus={(obj) => onAddToCart(obj)} />
              )
          }
        </div>
      </div>
    </div>
  )
}


export default App
