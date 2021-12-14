import React from "react";
import { render, screen } from '@testing-library/react';
import Test3 from "../Test3";

test('Test3/test1', ()=>{
    render(<Test3 />);
    const text = screen.getByText(/Some text 3/)
    expect(text).toBeInTheDocument();

})