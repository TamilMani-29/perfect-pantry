import { render, screen } from "@testing-library/react"
import Categories from "../Categories"
import "@testing-library/jest-dom/extend-expect";
import user from '@testing-library/user-event';

const category = 'fruits';

const setCurrCategory = jest.fn((category)=> currCategory= category);
const setIsSearching = jest.fn();
const updateCategory = jest.fn();

describe('test categories functionality', ()=>{
    test('categories renders correctly', ()=>{
        render(<Categories currCategory={'fruits'} setCurrCategory={setCurrCategory} setIsSearching={setIsSearching}/>) 
        const pasteriesElement = screen.getByText(/pasteries/i);
        expect(pasteriesElement).toBeInTheDocument();
    })

    test('background of categories changes upon click functionality', async ()=>{
        user.setup();
        render(
          <Categories
            currCategory={category}
            setCurrCategory={setCurrCategory}
            setIsSearching={setIsSearching}
          />
        );  
        const pasteriesElement = screen.getByTestId('pasteries');
        await user.click(pasteriesElement); 
        expect(pasteriesElement.style.backgroundColor).toBe('#6ed7d3');
        expect(updateCategory).toHaveBeenCalledTimes(1);
    })
})