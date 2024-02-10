import { Component, useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/userContext";
const RestaurantCard = (props) => {
  const { loggedInUser } = useContext(UserContext);
  const { resData } = props;

  console.log("resData in Restaurant", resData);
  const { info } = resData;
  const { cloudinaryImageId } = resData;
  return (
    <div className="m-4 p-4 w-[230px] h-[380px] bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        src={CDN_URL + resData?.info?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{info?.name}</h3>
      <h4>{info?.cuisines?.join(", ")}</h4>
      <h4>{info?.avgRating} stars</h4>
      <h4>{info?.costForTwo}</h4>
      <h4>{info?.sla?.deliveryTime} minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black m-1 p-1 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;

// Higher Order Component
// input-RestaurantCard=>RestaurantCardPromoted
