import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, player) => total + player.salary, 0);
    const grandTotal = totalPrice.toFixed(2);

    return (
        <div className="cart">
            <h1>Paris Saint-Germain F.C.</h1>
            <h3>Selected Players: <span className="player-selected">{cart.length}</span></h3>
            <h3>Total budget: <span className="total-budget">${grandTotal} million</span></h3>
            <h3>Selected Player Name: {cart.name}</h3>
            {
                    cart.map(player => <p>{player.name} <span className="salary">$({player.salary} million)</span></p>)
            }
            
        </div>
    );
};

export default Cart;