import ReactDOM from "react-dom/client";
import React from "react";
import Head from "./Components/HeaderComponents/Header.js";
import Foot from "./Components/FooterComponents/Footer.js";
import Body from "./Components/BodyComponents/Body.js";



/* header
        -- logo
        -- nav-items
        -- cart
    body 
        -- search
        -- food-container
        -- food-card
    footer
        -- copyright
        -- links
        -- address
        -- contact


*/

const Main = ()=> {
    return (
        <>
            <div>
                <Head/>
                {/* <Body/> */}
                <Foot/>
            </div>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));  
//index.html --> div_id=root
root.render(<Main/>);
