import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

//--------------------------------------------------------------
// first test 
//--------------------------------------------------------------

test("renders App without crashing", () => {
  render(<App />);
});

//--------------------------------------------------------------
// second test 
//--------------------------------------------------------------

test('renders the app header', () => {
 //arrange
  const {getByText} = render(<App />);
  // render returns an object with a bunch of query functions

   //act
   //--------------------------------------------------
   // Remember that this is case sensitive
   //--------------------------------------------------
   // const header = getByText("ADD NEW ANIMAL")
   //--------------------------------------------------
   // using regex makes it case insensitive
   //--------------------------------------------------

  const header = getByText(/welcome to form awesome/i);

  // assert that the header element is being rendered
  // without JEST DOM we wouldn't be able to run tis function
  // toBeInTheDocument() is called an assertion function

  //assert
  expect(header).toBeInTheDocument();

})


//--------------------------------------------------------------
// third test 
//--------------------------------------------------------------

test("renders the app header (concise)", () => {
  // arrange
  const {getByText} = render (<App/>);

  //act 
  //getByText("Add New Animal");
  //------------------------------------------------
  //(/add new animal/i) makes it case insensitive
  //------------------------------------------------

  //assert that the header element is being rendered
  //without JEST DOM we wouldn't be able to run this function
  
  getByText(/welcome to form awesome/i);
})

//------------------------------------------------------------------------------------------------------------------
// Instructions and/or completion requirements (MVP)
// In order to complete your mission for today, you will need to write tests to help you feel confident in shipping this component. 
//----------------------------------------------------------------------------------------------------
// Take a good amount of time to use the form. Find out what behaviors you expect, and any you don't expect.
// Add your first test. This one should be a very simple test to make sure the testing setup is working.
// Write a sufficient amount of tests to give you confidence in the project's code
//------------------------------------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------------------------------------
// Write down on a piece of paper what you want to test. (This is a very important step - always plan before coding!)
//-----------------------------------!!!!!!-------------------------------------------------------------------------------------
// I want to test everything Dustin tested in lecture plus 2-3 more
//-------------------------------------!!!!!!--------------------------------------------------------------------------------------



//-------------------------------------------------------------------------------
// If you come across any "unexpected" behaviors, try this flow:
//------------------------------------------------------------------------------
//  Write a test that will pass for the "expected" behavior
//-------------------------------------------------------------------------------
//  Confirm that the test fails, because of the "unexpected" behavior
//---------------------------------------------------------------------------------
//  Look at the code in the project to find what is causing the behavior
//-----------------------------------------------------------------------------------
//  Fix the code so that your new test passes
//--------------------------------------------------------------------------------------
//  Celebrate that your test helped you find and fix a bug!
//----------------------------------------------------------------------------------------------



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





//------------------------------------------------------------------------------
//this is being rendered to the virtual DOM so it won't show up if I inspect it
//------------------------------------------------------------------------------

//-----------------------------------------------------------------------------
// WE DO:                npm run test to see test
//-------------------------------------------------------------------------------------------

//--------------------------------------------------------------------------------
//anytime we want to write a test we write it in these types folders
//--------------------------------------------------------------------

//App.spec.js
//App.test.js
