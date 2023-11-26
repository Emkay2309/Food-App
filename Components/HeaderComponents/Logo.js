import logoImage from "../../images.png";
import  "./header.css";

export default Logo = ()=> {
    return (
        <div className="logo">
            <img src={logoImage}></img>
        </div>
    )
}