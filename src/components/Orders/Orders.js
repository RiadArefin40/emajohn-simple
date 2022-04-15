import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../RiviewItem/ReviewItem';
import './Orders.css'

const Orders = () => {
    const [products,setProducts]=useProducts()
    const[cart,setCart]=useCart(products)
    const handleRemoveProducts = product =>{
       const rest = cart.filter(pd=> pd.id !== product.id);
       setCart(rest);
       removeFromDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className="review-product-container">
                       {
                           cart.map(product=><ReviewItem handleRemoveProducts={handleRemoveProducts} key={product.id} product={product}></ReviewItem>)
                       }
            </div>
            <div className="cart-container">
            <Cart cart={cart}>
                <Link to="/shipment"><button>Proceed Checkout</button></Link>
            </Cart>
            </div>
          
            
        </div>
    );
};

export default Orders;