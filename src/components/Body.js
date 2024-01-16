import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
const Body=()=>{
   
  let [listOfRestaurants,setListOfRestaurants]=useState([])
  const [searchText,setSearchText]=useState("");

  useEffect(()=>{
   fetchData();
  },[]);
// 19.46161,72.80964
  const fetchData=async ()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(">>>>>>>",json?.data?.cards[1].card.card.gridElements.infoWithStyle.restaurants);
   
    
  }
  // if(listOfRestaurants.length===0){
  //   return <Shimmer/>

  // }

  //conditional rendering using ternary operators
    return listOfRestaurants?.length===0?<Shimmer/>:(
        <div className='body'>
         <div className='filter'>

          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
              console.log(">>>>>",searchText)
            }}/>
            <button onClick={()=>{
              //Filter the restaurant and update the UI
              //searchText
              const filteredRestaurant=listOfRestaurants.filter((res)=>res?.info?.name?.includes(searchText));
              setListOfRestaurants(filteredRestaurant);
            }}>Search</button>
          </div>

          <button className="filter-btn" onClick={()=>{
           filteredList=listOfRestaurants.filter((res)=>res.info.avgRating>4.4);
            setListOfRestaurants(filteredList)
          }}>Top Rated Restaurant</button> 
         </div>
         <div className='res-container'>
            {listOfRestaurants?.map((restaurant)=>(
              <RestaurantCard key={restaurant?.info?.id} resData={restaurant}/>
            ))}
         
         
         </div>
        </div>
    )
}
 export default Body;