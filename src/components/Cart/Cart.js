import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart}=props;
    let total =0;
    let shipping=0;
    for(const product of cart){
        total=total+product.price
        shipping=shipping+product.shipping
    }
    const tax = (total * .01).toFixed(2)
    const grandTotal = total+ parseFloat(tax)
    return (
        <div className='cart'>
            <p>hi</p>
            <p>item:{cart.length}</p>
            <p>total price:${total}</p>
            <p>total shipping:{shipping}</p>
            <p>Tax: ${  tax } </p>
            <h5>Grand Total:{grandTotal.toFixed(2 )}</h5>
            {props.children}
        </div>
    );
};

export default Cart;