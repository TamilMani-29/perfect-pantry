import { render, screen } from "@testing-library/react"
import AppDetails from "../AppDetails"
import "@testing-library/jest-dom/extend-expect";

describe('test logo section', ()=>{
    test('app logo renders correctly', ()=>{
        render(<AppDetails />) 
        const appLogo = screen.getByAltText("pantry-logo"); 
        expect(appLogo).toBeInTheDocument();
        expect(appLogo.getAttribute("src")).toBe("logo.png");
    })
    test('app name is rendered', ()=>{
        render(<AppDetails />); 
        const logoText = screen.getByText(/the perfect pantry/i);
        expect(logoText).toHaveTextContent('The Perfect Pantry');
    })
})