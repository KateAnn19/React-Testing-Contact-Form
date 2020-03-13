import React from 'react';
import ContactForm from './components/ContactForm';
import {render, fireEvent, wait} from "@testing-library/react";

test("renders correctly", () => {
    render(<ContactForm/>);
})

//---------------------------------------------------------
// Write a test that will pass for the "expected" behavior
//---------------------------------------------------------
// What was I expecting?
//--------------------------!!!!!!!!!!-----------------------------------------
// I was expecting the user to be able to type more than 2-3 letters
//--------------------------!!!!!!!!!!-----------------------------------------

//-----------------------------------------------------------------------------
//  Write a test that will pass for the "expected" behavior
//----------------------------------------------------------------------------------


test("user should be able to type in first name, last name, message and email", async() => {

    const {getByLabelText, findByText, getByTestId} = render(<ContactForm/>);

    //query for the form inputs

    const userFirstName = getByLabelText(/first name/i)
    const userLastName = getByLabelText(/last name/i)
    const userMessage = getByLabelText(/message/i)
    const userEmail = getByLabelText(/email/i)
    const button = getByTestId('button')

    // const button = findByTestId('submit').the((res) => {
    //     fireEvent.click(res)
    // })

    


    fireEvent.change(userFirstName, {target: {name: 'firstName', value: 'KateAnnAnn'}});
    fireEvent.change(userLastName, {target: {name: 'lastName', value: 'McGee'}});
    fireEvent.change(userEmail, {target: {name: 'email', value: "mcgeehee@gmail.com"}});
    fireEvent.change(userMessage, {target: {name: 'message', value: 'I am learning to test code. It is amazing' }})

    fireEvent.click(button);


     await findByText(/kateannann/i);
     await findByText(/mcgee/i);
     await findByText(/mcgeehee@gmail.com/i);
     await findByText(/I am learning to test code. It is amazing/i);
    


    //const submitButton = getByText(/submit/i);

})


//-------------------------------------------------------------------------------------
//  Confirm that the test fails, because of the "unexpected" behavior
//----------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------
//  Look at the code in the project to find what is causing the behavior
//---------------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------
//  Fix the code so that your new test passes
//------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------
//  Celebrate that your test helped you find and fix a bug!
//----------------------------------------------------------------------------------------------------