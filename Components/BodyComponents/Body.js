import Card from "./Card"
import "./Body.css";
import resList from "../../utils/mockData";
import { useState } from "react";

export default Body = () => {

    const [listOfRestaurant , setListOfRestaurant] = useState(resList);

    return (
        <>
            <div 
                className="search">
                <input placeholder="search here..."></input>
                <button 
                    className="filter-btn" 
                    onClick={()=> {
                        const filtered = listOfRestaurant.filter
                        (
                            (res) => res.avgRating > 4
                        );
                        setListOfRestaurant(filtered);
                    }}
                >
                    Get Top Rated Restaurant
                </button>
            </div>

            <div className="food-container">
                {
                    listOfRestaurant.map( (restaurant) => (
                        <Card imgId={restaurant.cloudinaryImageId} name={restaurant.name}  rating={restaurant.rating} cuisines={restaurant.cuisines}  edt={restaurant.edt}  locality={restaurant.locality}/>
                    ))
                }
            </div>
        </>
    )
}


