import{fireEvent, render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import appStore from"../../utils/appStore";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
it("Should load login button inside the header component",()=>{
    
       render(
        <BrowserRouter>
         <Provider store={appStore}>
        
           <Header/>
         </Provider>
        </BrowserRouter>
      
    );
    const loginButton=screen.getByRole("button",{name:"login"});
    expect(loginButton).toBeInTheDocument();
    
})
it("Should load cart inside the header component",()=>{
    
    render(
     <BrowserRouter>
      <Provider store={appStore}>
     
        <Header/>
      </Provider>
     </BrowserRouter>
   
 );
 const cart=screen.getByText("Cart-(0)");
 expect(cart).toBeInTheDocument();
 
})
it("Should change login button to logout",()=>{
    
    render(
     <BrowserRouter>
      <Provider store={appStore}>
     
        <Header/>
      </Provider>
     </BrowserRouter>
   
 );
 const loginButton=screen.getByRole("button",{name:"login"});
 fireEvent.click(loginButton);
 const logoutButton=screen.getByRole("button",{name:"Logout"});
 expect(logoutButton).toBeInTheDocument();

 
})