import { CDN_URL} from "../utils/constants";
const RestaurantCard=(props)=>{
    const {resData}=props;
    const {info}=resData;
    const {cloudinaryImageId}=resData;
    return (
        <div className='m-4 p-4 w-[230px] h-[380px] bg-gray-100 hover:bg-gray-200' >
         <img className="rounded-lg" src={CDN_URL+resData?.info?.cloudinaryImageId}/>
         <h3 className="font-bold py-4 text-lg">{info?.name}</h3>
         <h4>{info?.cuisines?.join(', ')}</h4>
         <h4>{info?.avgRating} stars</h4>
         <h4>{info?.costForTwo}</h4>
         <h4>{info?.sla?.deliveryTime} minutes</h4>
        </div>
    )
}
export default RestaurantCard;

