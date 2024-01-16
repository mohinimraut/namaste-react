import { CDN_URL} from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    // name,cusines,avgRating,costForTwo,deliveryTime
    const {info}=resData;
    const {cloudinaryImageId}=resData;
    return (
        <div className='res-card' style={{
            backgroundColor:"#f0f0f0"
        }}>
         {/* <img className="res-logo" src={rice2}/> */}
          <img src={CDN_URL+resData?.info?.cloudinaryImageId}/>
         <h3>{info?.name}</h3>
         <h4>{info?.cuisines?.join(', ')}</h4>
         <h4>{info?.avgRating} stars</h4>
         <h4>{info?.costForTwo}</h4>
         <h4>{info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;