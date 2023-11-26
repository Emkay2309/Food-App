import  "./header.css";
import { MdShoppingCartCheckout } from "react-icons/md";

export default NavItems = ()=> {
    return (
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact</li>
                <li>Orders</li>
                <li><MdShoppingCartCheckout /></li>
            </ul>
        </div>
    )
}