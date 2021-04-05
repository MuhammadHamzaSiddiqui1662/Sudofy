import { Link } from "react-router-dom";

function NavBar(props) {
    return (
        <div>
            <nav>
                <ul className="navigation" >
                    <li className="navLi"><h3>HLX</h3></li>
                    <li className="navLi"><Link to="/">HOME</Link></li>
                    <li className="navLi"><Link to="/Cart">CART</Link></li>
                    <li className="navLi"><Link to="/Login">LOGIN</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default NavBar;