import productList from '../data/productData'
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice"; 

const Product = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    return (
        <div className='product-container'>
            <div className='product-grid'>
                {productList.map((product) => (
                    <div key={product.id} className='product-card'>
                        <img src={product.img} alt={product.name} className="product-image" />
                        <h2>{product.name}</h2>
                        <p>{product.desc}</p>
                        <p>Price: ${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Product;
