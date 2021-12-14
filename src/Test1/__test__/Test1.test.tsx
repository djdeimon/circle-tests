import React from "react";
import { render, screen } from '@testing-library/react';
import Test1 from "../Test1";

test('Test1/test1', ()=>{
    render(<Test1 />);
    const text = screen.getByText(/Some text 1/)
    expect(text).toBeInTheDocument();

})