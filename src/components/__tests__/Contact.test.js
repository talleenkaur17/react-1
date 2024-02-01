import { render,screen } from "@testing-library/react"
import "@testing-library/jest-dom"
import Contact from "../Contact"
describe("Contact us page test cases",()=>{
    test("Should load contact us component",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    })
    test("Should load button inside contact us component",()=>{
        render(<Contact/>)
        const button=screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    })
    test("Should load input name inside contact us component",()=>{
        render(<Contact/>)
        const inputName=screen.getByPlaceholderText("name");
    
        expect(inputName).toBeInTheDocument();
    })
    test("Should load 2 input boxes when the contact us component loads",()=>{
        render(<Contact/>)
        const inputBox=screen.getAllByRole("textbox");
    
        expect(inputBox.length).toBe(2);
    })

})
