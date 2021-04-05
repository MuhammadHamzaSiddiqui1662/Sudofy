import { useHistory, useParams } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../App";

const Card = (props) => {
  const {product} = props;
  const {cart, setCart} = useContext(CartContext);
  const updateCart =(product)=>{
    console.log(cart);
    console.log(product);
    const newCart = cart.push(product);
    // setCart(newCart);
    setCart('update');
    console.log(cart);
  }
  return(
    <div className="card">
      <div className="productImage">
        <img 
          src={product.image.src}
          alt={product.image.alt || "Product Image"}
        />
      </div>
      <div className="productCaption">
        <h1 className="productName">{product.name}</h1>
        <h1 className="productPrice">{product.price}</h1>
        <div className="updateCart" onClick={()=>{updateCart(product)}}>
          <button className="cartButtons subtract" hidden >-</button>
          <p>Add To My Cart</p>
          <button className="cartButtons add" hidden >+</button>
        </div>
      </div>
    </div>
  )
}
export default Card;