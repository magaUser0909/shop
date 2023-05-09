import React, { useState } from 'react'
import Order from './Order'

const showToOrder = (props) => {
    let summa = 0

    props.orders.forEach(order => summa += Number.parseFloat(order.price))

    return (
        <div>
            {props.orders.map(el => (
                <Order key={el.id} item={el} onDelete={props.onDelete} />
            ))}
            <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}$</p>
        </div>
    )
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пуста</h2>
        </div>
    )
}

const Header = (props) => {
    let [cartOpen, setCartOpen] = useState(false)

    return (
        <header>
            <nav className="nav">
                <span className='logo'>House staff</span>
                <div className='list_icon'>
                    <ul>
                        <li><a href="#">Про нас</a></li>
                        <li><a href="#">Контакты</a></li>
                        <li><a href="#">Кабинет</a></li>
                    </ul>
                    <div onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`}><i className="bi bi-cart-fill"></i></div>
                    {cartOpen && (
                        <div className='shop-cart'>
                            {props.orders.length > 0 ?
                                showToOrder(props) : showNothing()
                            }
                        </div>
                    )}
                </div>
            </nav>
            <div className="presentation"></div>
        </header>
    )
}

export default Header