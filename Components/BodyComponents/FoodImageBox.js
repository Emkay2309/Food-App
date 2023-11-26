import logoImage from "../../burger.png";

export default FoodImageBox = (foodImage,offer)=> {
    return (
        <div>
            <img src={foodImage}></img>
            <h3>{offer}</h3>
        </div>
    )
}