import React from 'react';
import { Route, Link } from 'react-router-dom';
import menuData from '../menu.json';
import style from './Cart.module.css';
function Cart() {
    


    return(
        <div>
            <h2>Корзина</h2>
            <ul>
                {cartItems.map((item) =>{
                    <li>
                        <div>
                            <div>
                                <img className={style.image_cart} src={item.image} alt={item.image} />
                                <span>{item.image} - {item.quantity} шт. - ${item.price.toFixed(2)}</span>
                            </div>
                            <button onClick={handleRemoveFromCart(item.id)}>X</button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}
export default Cart;