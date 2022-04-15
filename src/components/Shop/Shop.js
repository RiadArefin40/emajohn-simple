import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import './Shop.css'

const Shop = () => {
    const [cart,setCart] = useState([])
    const [products, setProducts] = useProducts()
   
    useEffect(()=>{
        const storedCart=getStoredCart();
        console.log(storedCart);
        for(const id in storedCart){
            const addedProduct = products.find(product=>product.id===id)
            console.log(addedProduct)
        }
    },[products])
    const handleAddToCart = (product) =>{
        console.log(product)
        const newCart=[...cart,product];
        setCart(newCart);
        addToDb(product.id);
    }
    return (
        <div className='shop-container '>
            <div className="product-container">
               
                {
                    products.map(product=><Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)

                }

            </div>
            <div className="cart-container">
                <h3>order summary</h3>
                <p>Selected Item{cart.length}</p>
                <Cart cart={cart}>
                <Link to="/orders"><button>Rivew Order</button></Link>
                </Cart>

            </div>
        </div>
    );
};

export default Shop;