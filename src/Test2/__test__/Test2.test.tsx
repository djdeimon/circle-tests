import React from "react";
import { render, screen } from '@testing-library/react';
import Test2 from "../Test2";

test('Test2/test1', ()=>{
    render(<Test2 />);
    const text = screen.getByText(/Some text 2/)
    expect(text).toBeInTheDocument();

})