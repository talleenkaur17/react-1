import React, { Children, useEffect, useState } from "react";
import { lazy ,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Footer from "./components/Footer";


const Grocery=lazy(()=>import("./components/Grocery"));
const About=lazy(()=>import("./components/About"));




const AppLayout=()=>{

    const[userName,setuserName]=useState();
    useEffect(()=>{
        const data={
            name:"Talleen Kaur"
        }
        setuserName(data.name);
    },[]);

    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser:userName,setuserName}}>
            <div className="app">
            <Header/>
            <Outlet/>
            <Footer/>
           
            
             </div>

        </UserContext.Provider>
        </Provider>
        
    )
}
const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<AppLayout/>,
       
        children:[
        { path:'/',
        element:<Body/>

        },
        
        {
            path:'/about',
            element:<Suspense fallback={<h1>LOADING....</h1>}><About/></Suspense>
        },{
            path:'/contact',
            element:<Contact/>
        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>LOADING....</h1>}><Grocery/></Suspense>
        },
        {
            path:'/restaurants/:resId',
            element:<RestaurantMenu/>
        },{
            path:'/cart',
            element:<Cart/>
        },
    ], 
    errorElement:<Error/>
    
}
    
   
])

const root=ReactDOM.createRoot(document.getElementById("root"));

  

root.render(<RouterProvider router={appRouter}/>);