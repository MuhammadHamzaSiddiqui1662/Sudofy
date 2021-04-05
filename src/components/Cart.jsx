import { useContext } from "react";
import { CartContext } from "./../App";

const Cart=()=>{
    const {cart, setCart} = useContext(CartContext);
    console.log(cart);
    return(
        <div className="cart">
            <div className="catHead">
                <h1>My Cart</h1>
            </div>
            <div className="products">
                {cart.map( (item) => <CartItem item={item} /> ) }
                <div className="cartFooter cartItem">
                    <div className="grandTotal">Grand Total: 8</div>
                    <div className="checkout">Confirm Order</div>
                </div>
            </div>
            
        </div>
    )
}
export default Cart;

const CartItem=({item})=>{
    return(
        <div className="cartItem">
            <div className="cartImage">
            <img
                src={item.image.src}
                alt={item.image.alt || "Product Image"}
            />
            </div>
            <div className="productName2"><h2>{item.name}</h2></div>
            <div className="updateCart2">
                <button className="cartButtons2 subtract">-</button>
                <p>{item.quantity||1}</p>
                <button className="cartButtons2 add">+</button>
            </div>
            <div className="subTotal">{`${item.price/* * (item.quantity||1)*/}`}</div>
        </div>
    )
}