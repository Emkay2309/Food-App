import React from 'react'
import "./Body.css";


const url = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";


function Card({imgId , name , rating , cuisines , edt , locality}) {
  return (
    <div className='food-card'>
        <img className='res-img' src={url + imgId}></img>
        <h2>{name}</h2>
        <h3>{rating}</h3>
        <h3>{cuisines.join(", ")}</h3>
        <h3>{edt}</h3>
        <h3>{locality}</h3>
    </div>
  )
}

export default Card