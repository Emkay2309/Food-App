import Card from "./Card"
import "./Body.css";

const resObj = [
    {
    "id": "708880",
    "name": "KFC",
    "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
    "locality": "Sydenhams Road",
    "areaName": "Periyampet",
    "costForTwo": "₹400 for two",
    "cuisines": [
    "Burgers",
    "Biryani",
    "American",
    "Snacks",
    "Fast Food"
    ],
    "avgRating": 4,
    "edt": "31 mins"
    },
    {
    "id": "407244",
    "name": "La Pino'z Pizza",
    "cloudinaryImageId": "zuobkwprhpluer4xqo1k",
    "locality": "Kilpauk",
    "areaName": "Kilpauk",
    "costForTwo": "₹300 for two",
    "cuisines": [
    "Pizzas",
    "Pastas",
    "Italian",
    "Desserts",
    "Beverages"
    ],
    "avgRating": 4,
    "edt": "26 mins"
    },
    {
    "id": "18341",
    "name": "Doveton Cafe",
    "cloudinaryImageId": "dkds8g7ak8rneieejko6",
    "locality": "Purasavakkam High Road",
    "areaName": "Purasaiwakkam",
    "costForTwo": "₹250 for two",
    "cuisines": [
    "North Indian",
    "Chinese",
    "South Indian",
    "Indian",
    "Tandoor"
    ],
    "avgRating": 4.3,
    "edt": "53 mins"
    },
    {
      "id": "37067",
      "name": "Subway",
      "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
      "locality": "Kilpauk",
      "areaName": "Poonamallee High Road",
      "costForTwo": "₹350 for two",
      "cuisines": [
      "Salads",
      "Snacks",
      "Desserts",
      "Beverages"
      ],
      "avgRating": 4,
      "edt": "13 mins"
    },
    {
      "id": "141364",
      "name": "Starbucks Coffee",
      "cloudinaryImageId": "8e8e3d2bd79e5e43dd483b8cf135280b",
      "locality": "Bergamo Mall",
      "areaName": "Thousand Lights",
      "costForTwo": "₹400 for two",
      "cuisines": [
      "Beverages",
      "Cafe",
      "Snacks",
      "Desserts",
      "Bakery",
      "Ice Cream"
      ],
      "avgRating": 4.3,
      "edt": "23 mins"
    },
    {
      "id": "391590",
      "name": "The Belgian Waffle Co.",
      "cloudinaryImageId": "846dab8cca3c56a482d7cbcda0dd0eb9",
      "locality": "Sowcarpet",
      "areaName": "George Town",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Waffle",
      "Desserts",
      "Ice Cream",
      "Beverages"
      ],
      "avgRating": 4.4,
      "edt": "56 mins"
    },
    {
      "id": "16543",
      "name": "A2B - Adyar Ananda Bhavan",
      "cloudinaryImageId": "dsliyhlbtgtnnuxyrpsf",
      "locality": "Purasai High Road",
      "areaName": "Purasaiwakkam",
      "costForTwo": "₹300 for two",
      "cuisines": [
      "South Indian",
      "North Indian",
      "Sweets",
      "Chinese"
      ],
      "avgRating": 4.5,
      "edt": "16 mins"
    },
    {
      "id": "224426",
      "name": "Faasos - Wraps & Rolls",
      "cloudinaryImageId": "af33b81798b11deba338e94b7585d348",
      "locality": "Brickklin Road",
      "areaName": "Purasaiwakkam",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Kebabs",
      "Fast Food",
      "Snacks",
      "North Indian",
      "American",
      "Healthy Food",
      "Desserts",
      "Beverages"
      ],
      "avgRating": 4.3,
      "edt": "06 mins"
    },
    {
      "id": "257162",
      "name": "The Brooklyn Creamery - Healthy Ice Cream",
      "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
      "locality": "Mahaveer Colony",
      "areaName": "Vepery",
      "costForTwo": "₹200 for two",
      "cuisines": [
      "Healthy Food",
      "Desserts",
      "Ice Cream"
      ],
      "avgRating": 4.6,
      "edt": "43 mins"
    }
    
    ];

export default Body = () => {
    return (
        <>
            <div className="search">
                <input placeholder="search here..."></input>
                <button >search</button>
            </div>

            <div className="food-container">
                {
                    resObj.map( (restaurant) => (
                        <Card imgId={restaurant.cloudinaryImageId} name={restaurant.name}  rating={restaurant.rating} cuisines={restaurant.cuisines}  edt={restaurant.edt}  locality={restaurant.locality}/>
                    ))
                }
            </div>
        </>
    )
}


