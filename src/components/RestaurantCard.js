import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const RestaurantCard=(props)=>{
    const {resData}=props;
 
   
    const{name,cuisines,avgRating,costForTwo}=resData?.info ;
    const {loggedInUser}=useContext(UserContext);
    
    return(
        <div className="m-4 p-4 w-[350px] rounded-xl bg-gray-50 hover:bg-gray-200">
            <img  alt=""src={CDN_URL+ resData.info.cloudinaryImageId} className=" res-logo rounded-lg"></img>
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="">{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo}</h4>
            <h4>{loggedInUser}</h4>
        </div>

    )
}
export const withPromotedLabel=()=>{
    return(props)=>{
        return(
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
                <RestaurantCard  {...props}/>
            </div>
        )

    }
}
export default RestaurantCard;