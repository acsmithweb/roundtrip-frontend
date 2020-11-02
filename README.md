### Write up and notes
This application is a simple react application used for servicing an API backend that handles mapping and organizing insurance plans. Thanks to the JSON server this front end can easily be directed to a proper api which as long as it meets the same documentation will work the same.

The bulk of the application is located within master_plan_form.js where it calls javascript in api_facade.js to get the information needed to either create or display the corresponding information.

As noted below bootstrap-react library was used to provide nice looking and easy to use elements.

**Testing**

Normally when working through tasks I will work on the automated tests first. However I do not have any familiarity with testing react components and the corresponding framework. Given more time I know I would have been able to write up those tests however I figured my time was best spent focusing on the features or else there would have been nothing to actually test.
Using what I know of automated testing here is a list of what I would be looking to test.
- Ensure all elements are present labeled and properly populated with given data.
- Ensure the match button loads disabled and can be enabled and re disabled via the Closest Match Select.
- Ensure that the alert pop ups appear when the appropriate buttons are pressed.
- Ensure that appropriate error messages appear.
- Ensure that the Closest Match selector is populated with the appropriate master plans.
- Ensure that when the api calls are made when clicking the appropriat buttons that they succeed.
- Although there is no indication testing for invalid parameters to an api call would also be useful
- Javascript tests for the api calls.

**Improvements**

*styling*

- I used bootstrap react for simple and easy styling however the elements do need some tweaking
  - space between the buttons
  - better spacing between labels and input boxes
- Better looking alert messages

*architecture*

- Ideally I would have separated the api based on what endpoints they are utilizing
  - due to lack of time I was unable to do this
  - I also think that there could be a cleaner way of setting up the api calls such as passing in the type of call you want to make (POST, DELETE, etc..) as an argument along with the required parameters.
- I could see the possibility of the closest match options element being extracted into it's own component since there is potential reusability there.
- I wrote the form with the intention of keeping it flexible. Although I did not have time setup the component to take a prop for the id this would allow the form to appropriately populate when clicked from a list of master plans.

*Code Quality*

- I have not had the opportunity to work with react in a professional setting so my conventions for component names, function names, and variable names certainly need to be revisited.
- Jquery is a possible candidate to clean up some of the code and make cleaner api calls

*Features*

- I would have liked to implement better functioning alert messages that also displayed error handling for example if the api endpoint was down there should be some sort of indication saying that the call had failed.
- Add error functionality with the application as is null values can be passed through which is not ideal.

**Closing**

As stated above I normally do not dive head first into feature work as I would normally write the tests for it first. However I felt that given the limited time I would have been unable to learn the testing framework and get feature work completed. Given more time I would have added in jquery as well as cleaned up the code and keep things a consistent format such as the id in master_plan_form.js on line 96. I also recognize that my function names are snake case and should probably be in camel case to match react standards. I also would have put a much bigger focus on ensuring error handling would be in place. I am also not super familiar with what libraries are commonly used in conjunction with react so given more time that would have also looked into those possibilities.

Although there is not much to it the following link has been my application that I have been using to learn React which utilizes a currently small ruby on rails api backend for it's information.
- https://github.com/acsmithweb/campaign_manager_react
