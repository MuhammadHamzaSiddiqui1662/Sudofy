import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Card from "./Card";

export default function Home(props) {
    return (
        <div className="home">
            <Content />
        </div>
    );
}

const Content=()=>{
    // useEffect(()=>{})
    return(
        <div className="content">
            <Category products={products} />
        </div>
    )
}
const Category=(props)=>{
    const history = useHistory();
    const {products}=props;
    return(
        <div className="category">
            <div className="catHead">
                <h1>Suggested Products</h1>
            </div>
            <div className="products">
                {products.map( (product) => <Card product={product} onClick={()=>{ history.push(`/productDetails/:${product.name}`,product) }} />)}
            </div>
        </div>
    )
}

const products = [
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    },
    {
        name: "Men's Shirt",
        price: "$20",
        image: {
            src: "https://5.imimg.com/data5/WI/EB/MY-45054986/boys-designer-shirts-500x500.jpg",
            alt: "shirt image"
        }
    }
]
