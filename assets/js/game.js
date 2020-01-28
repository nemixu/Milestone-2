// function created to populate the dropdowns
function populateDropDowns(data) {
    //console.log('DATA IN POP DROPDOWNS ', data) - was used for debugging
    // Selecting the elements by ID using Jquery
    const categoryDropDown = $('#categories');
    const difficultyDropDown = $('#difficulty');
    const numberQuestions = $('#questions');
    let i;
    const triviaCategories = data.trivia_categories;

    // loop trough triviaCategories array and add them to the categories dropdown
    for (i = 0; i < triviaCategories.length; i++) {
        categoryDropDown.append(`<option value="${triviaCategories[i].id}">${triviaCategories[i].name}</option>`);

    }
    // Appened easy to difficulty dropdown
    difficultyDropDown.append("<option value='easy'>Easy</option>");
    // Appened medium to difficulty dropdown    
    difficultyDropDown.append("<option value='medium'>Medium</option>");
    // Appened hard to difficulty dropdown
    difficultyDropDown.append("<option value='hard'>Hard</option>");
    //Append some question counts - ToDo Add more after potentially removing this field
    numberQuestions.append("<option value=10>10</option>");
}

//below is a function that pulls the category from the api
const fetchCategories = () => {
    fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => {
            populateDropDowns(data);
        });
}

function startGame() {
    //Get the value from the Category dropdown.
    const categoryDropDown = $('#categories')[0].value;
    //Get the difficulty from the difficulty dropdown.
    const difficultyDropDown = $('#difficulty')[0].value;
    //Get the type of questions.
    const numberQuestions = $('#questions')[0].value;
    //Generate the API url based on the user input (numberQuestions,categoryDropDown,difficultyDropDown)
    const url = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${categoryDropDown}&difficulty=${difficultyDropDown}&type=multiple`;
    //questionsArray set to an empty array so i can then iterate through the lenght of the data results and populate the array with the returned data
    const questionsArray = [];
    //Make a fetch request with the url for questions based on user input
    fetch(url).then(response => response.json()).then(data => {
        // questions back from the API
        // iterate over the questions response (array) and populate ur local questions array
        for (let x = 0; x < data.results.length; x++) {
            questionsArray.push(data.results[x]);
        }
        console.log('questions array ', questionsArray);
        // At this point I may show modal with first questions (questionsArray[0])
        // Be sure to store the entire length of the array so i know when I am on the last question and can show the user the question count (const questionsLength = questionsArray.length)

        // slap the questionsArray[0] answers into answer boxes

        // ensure onClick handlers on each box (answer-box should probably be a button but I may use divs and paragraphs)

        // on click for the selected answer - remove that question from the array, or iterate onto the next index (so questionsArray[0] -> questionsArray[1] and so on so forth)

        // rinse and repeat until I reach the final index (array length) at which point I will have a show score button which will add up the count of all correct answers vs incorrect answers etc

    });
}

fetchCategories();