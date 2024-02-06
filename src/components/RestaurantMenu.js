import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  const { resId } = useParams();
const dummy="Dummy Data";
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(null);

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || {};

  console.log(
    "resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards",
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  );

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return resInfo === null ? (
    <Shimmer />
  ) : (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">
        {cuisines?.join(",")} - {costForTwoMessage}
      </h3>
      {/* categories accordian */}
      {categories.map((category, index) => (
        // This is controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          // ()=>this function set the setShowIndex
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
