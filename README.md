# Trivia
Interactive-frontend-project

My project will be a trivia style Interactive site that is focused with the mobile first approach.
The game will target 5 categories with multiple questions that are pulled from an API.

 
## UX
 
Use this section to provide insight into your UX process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. These files should themselves either be included as a pdf file in the project itself (in an separate directory), or just hosted elsewhere online and can be in any format that is viewable inside the browser.

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

For some/all of your features, you may choose to reference the specific project files that implement them, although this is entirely optional.

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

- HTML5
- CSS3
- Bootstrap v4.3.1
- ES6 JavaScript
- Google Chrome Dev tools for debugging
- Google Light house for audits
- vsCode - to beautify code (gitpod not formatting)
- [JQuery](https://jquery.com) The project uses **JQuery** to simplify DOM manipulation.

## Testing

### Testing planning.

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Bugs and problems

- API BUG -
Issue with the api that has been identified - some of the results from the api come back with no objects this is due to the api not having questions for the specific topics, to overcome this I will be removing the topics that come back with no data from the array so the user experience is continued.
Below is the topics from the api that are currently showing results of [];

1. [4]Entertainment : musicals & Theatres
2. [10]Science: Mathematics
3. [24]Politics
4. [25]Art

- Url fetch issue
Changing the parameter of my const URL was showing issues in the debugging process - I was using google chrome tools for debugging, I began using the breakpoints to pause the action of a function to ensure things were running correctly - I found I was getting a failed promise from the api response as the URL details were incorrect - only after debugging and spending time trying to resolve the issue proved that the spelling of one word was incorrect, once this was changed the api began pulling the information correctly once again.

- Issue with removing 4 empty objects from the array at categoryDropDown.append - this was proven to be an issue to write clean code without having four if statements. I wanted to try and have the cleanest solution possible for this problem. The solution I currently have removes one of the objects from the array that has empty data from the api.


## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub Pages or Heroku).

In particular, you should provide all details of the differences between the deployed version and the development version, if any, including:
- Different values for environment variables (Heroku Config Vars)?
- Different configuration files?
- Separate git branch?

In addition, if it is not obvious, you should also describe how to run your code locally.


## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The api resource is used from the opensource API Open Trivia DB - https://opentdb.com/
- Background Image was sourced from https://www.pexels.com/
- 

### Acknowledgements

- I received inspiration for this project from my Mentor Simen Daehlin who suggested doing a project like this.
- Slack community for the help with small issues that I was overlooking.
- Reggie Morgan (Senior Dev) who gave suggestions on best practices.
