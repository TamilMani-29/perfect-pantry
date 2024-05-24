import CartContainer from "../CartContainer"
import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event';

const handleBuy = jest.fn();

describe('test cart container functionality', ()=>{
    test('test buy now renders correctly', ()=>{
        render(<CartContainer />);
        const buyBtn = screen.getByRole('button', {name: 'Buy Now'}); 
        expect(buyBtn).toBeInTheDocument();  
    })
})