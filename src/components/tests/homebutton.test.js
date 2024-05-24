import { render , screen} from "@testing-library/react"
import HomeButton from "../HomeButton"
import user from '@testing-library/user-event'
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";

describe('test home button functionality',  ()=>{
    test('home button renders properly', async ()=>{
        user.setup();
        render(
          <BrowserRouter>
            <HomeButton />
          </BrowserRouter>
        );
        const homeBtn = screen.getByRole('button', {name: 'Back To Home'}); 
        expect(homeBtn).toBeInTheDocument();  
        await user.click(homeBtn); 
        expect(window.location.pathname).toBe('/');
    })
})