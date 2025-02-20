import React from 'react'
import './exploremenu.css'
import { menu_list } from '../../assets/frontend_assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='exploreMenu' id='exploreMenu'>
        <h1>Explore Menu</h1>
        <div className='exploreMenuText'>
            Choose from diverse...
        </div>
        <div className='exploreMenuList'>
            {menu_list.map((item, index) => (
                <div 
                    onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)}
                    key={index} 
                    className='exploreMenuListItem'
                >
                    <img 
                        className={category === item.menu_name ? "active" : ""} 
                        src={item.menu_image} 
                        alt={item.menu_name} 
                    />
                    <span>{item.menu_name}</span>
                </div>
            ))}
        </div>
        <hr />
    </div>
  )
}

export default ExploreMenu