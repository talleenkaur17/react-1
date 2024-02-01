import { render ,screen} from "@testing-library/react"
import MOCK_DATA from"../mocks/mockResListData.json"
import { act } from "react-dom/test-utils"
import Body from "../Body"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"
global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA);
        },
    })
})
it("Should render the body component  with Search",async()=>{
    await act(async()=>render(<BrowserRouter> <Body/></BrowserRouter>));
    const searchButton=screen.getByRole("button",{name:"Search"});
    console.log(searchButton);
    expect(searchButton).toBeInTheDocument();
       
})