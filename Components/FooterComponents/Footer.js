import FooterHead from "./FooterHead.js"
import CopyRight from "./CopyRight.js"

export default Foot = () =>  {
    return (
        <div className="footerHead">
            <div className="footerHeadBox">
                <h3>For better experience,download the Swiggy app now</h3>
                <FooterHead/>
            </div>
            <div className="footerFoot">
                <CopyRight/>
            </div>
        </div>
    )
}