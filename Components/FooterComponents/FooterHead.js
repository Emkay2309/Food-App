import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";
import "./footer.css";
import Box from "./Box";

export default FooterHead = () => {
    return (
        <div className="FooterHeadImage">
            {/* Sending component as a prop */}
            <Box className="google" title="Get It On" store="Google Play" Icon={<BiLogoPlayStore/>}/>
            <Box className="apple" title="Download From" store="Apple Store" Icon={<FaApple />}/>
        </div>
    )
}