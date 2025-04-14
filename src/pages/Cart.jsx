import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../redux/slices/cartSlice";

const ShoppingCart = () => {
  const cart = useSelector((state) => state.cart.items);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  return (
    <main className="cart-main">
      <h2 className="cart-title">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="cart-box">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">${item.price}</p>
              </div>

              <div className="cart-item-quantity">
                <button
                  className="cart-btn cart-btn-green"
                  onClick={() => dispatch(incrementQuantity(item))}
                >
                  +
                </button>
                <span className="cart-qty">{item.quantity}</span>
                <button
                  className="cart-btn cart-btn-red"
                  onClick={() => dispatch(decrementQuantity(item))}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
              </div>

              <button
                className="cart-remove-btn"
                onClick={() => dispatch(removeFromCart(item))}
              >
                Remove
              </button>
            </div>
          ))}

          <hr className="cart-divider" />

          <div className="cart-total">
            <h3>
              Total: <span className="cart-total-price">${totalPrice ? totalPrice.toFixed(2) : "0.00"}</span>
            </h3>
            <button className="cart-checkout-btn">Checkout</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default ShoppingCart;
