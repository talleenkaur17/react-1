import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { useEffect, useState ,useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body=()=>{
  const [listOfRestaurants,setlistOfRestaurants]=useState([]);
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard);
  const[searchText,setSearchText]=useState("");
  const[filteredRestaurant,setfilteredRestaurant]=useState([]);

  console.log("Body Rendered",listOfRestaurants);
 
  useEffect(()=>{
  fetchData();
  },[]);

  

  const fetchData=async()=>{
    const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.738337&lng=77.130622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
   const json=await data.json();
   console.log(json);
  
    setlistOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    


  };
  const OnlineStatus=useOnlineStatus();
  if(OnlineStatus===false) return (<h1>You are offline!!!Please check your internet connection.</h1>);
  const {loggedInUser,setuserName}=useContext(UserContext);
  return listOfRestaurants.length===0 ? (
     <Shimmer/>
  ):
  (
        <div className="body">
       <div className="filter flex items-center rounded-xl">
        <div className="search  m-4 p-4   ">
         <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}></input>
         <button className="px-4 py-2 bg-orange-100 m-4 rounded-lg" onClick={()=>{
          console.log(searchText);
          const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
          console.log(filteredRestaurant);
         setfilteredRestaurant(filteredRestaurant);

          
         }}>Search</button>
        </div>
        
        <div>
        <button className="filter-btn  px-4 py-2 m-4 bg-neutral-300 rounded-lg "
        onClick={()=>{
          const filteredList=listOfRestaurants.filter(
            (name)=>name.info.avgRating  > 4

          );
         setfilteredRestaurant(filteredList);
        }}
        >Top Rated restaurant</button>
        </div>

        <div className="search m-4 p-4 flex items-center ">
          <label className="font-bold">User Name :</label>
        <input className="border border-black p-2"
        value={loggedInUser}
        onChange={(e)=>setuserName(e.target.value)}/>
        </div>
       
       </div>
        <div className="res-container flex flex-wrap">
            {filteredRestaurant.map((restaurant)=>(
               <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> 
                {console.log("HEY!!", restaurant.info.avgRating)} 
                
               {
                
                (restaurant.info.avgRating>4.0)?(
                  <RestaurantCardPromoted resData={restaurant}/>
                ):(
                  <RestaurantCard resData={restaurant}/>
                )
               }
               
               
               </Link>
           

            ))}
          
           
        </div>

        </div>
      
    )
            }

export default Body;