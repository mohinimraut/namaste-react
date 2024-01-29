import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const {resId}=useParams();

  const resInfo=useRestaurantMenu(resId);


  //empty dependency array so api call ony initial render

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API+resId);
  //   //Convert data to json

  //   const json = await data.json();

  //   // console.log("cards >>>>",json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  //   setResInfo(json?.data);
  // };

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};
    
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(",")} - {costForTwoMessage}
      </h3>
      <h2>Menus</h2>
      <ul>
        {itemCards && itemCards.map((itemcard) => (
          <li key={itemcard?.card?.info?.id}>{itemcard?.card?.info?.name} - {itemcard?.card?.info?.price/100 || itemcard?.card?.info?.defaultPrice/100} </li>
        ))}
      </ul>
    </div>
  );
};
export default RestaurantMenu;
