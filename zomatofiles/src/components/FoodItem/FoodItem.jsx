import React, { useContext, useState } from 'react';
import './foodItem.css'
import { assets } from '../../assets/frontend_assets/assets'
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';



const FoodItem = ({id,name,price,description,image}) => {

    

    
    const {cartItems,addToCart, removeFromCart,url}=useContext(StoreContext)
  return (
    <div className='foodItem'>
        <div className="foodItemContainer">
            <img className='foodItemImage' src={url+"/images/"+image} alt="" />
            {
                !cartItems[id]?<img onClick={()=>addToCart(id)} className='add' src={assets.add_icon_white}/>:<div className='foodItemCounter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
        <div className="foodItemInfo">
            <div className="foodItemNameRating">
                <p>
                    {name}
                </p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="foodItemDescription">
                {
                    description
                }
            </p>
            <p className="foodItemPrice">
                R{price}
            </p>
            <a href="R{item.buy_now_url}">Buy Now</a>
        </div>
    </div>
  )
}

export default FoodItem