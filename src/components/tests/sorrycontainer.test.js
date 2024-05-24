import { render, screen} from "@testing-library/react"
import SorryContainer from "../SorryContainer";

describe("test sorry container", ()=>{
    test("sorry container renders correctly", ()=>{
        render(<SorryContainer />)  
        const imgElement = screen.getByAltText('sorry-background'); 
        expect(imgElement.getAttribute("src")).toBe(
          "sorry2.png"
        );
    })
})