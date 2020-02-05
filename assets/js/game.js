const questions = document.getElementById('question');
const answers = Array.from(document.getElementsByClassName('answer'));



// function created to populate the dropdowns
function populateDropDowns(data) {
    console.log('DATA IN POP DROPDOWNS ', data)
    // - was used for debugging and finding the trivia_categories object
    // Selecting the elements by ID using Jquery
    const categoryDropDown = $('#categories');
    const difficultyDropDown = $('#difficulty');
    // const numberQuestions = $('#questions');
    let i;
    const triviaCategories = data.trivia_categories;
    // loop trough triviaCategories array and add them to the categories dropdown removal of id numbers that had no data from the API
    for (i = 0; i < triviaCategories.length; i++) {
        if (triviaCategories[i].id != 13 && triviaCategories[i].id != 19 && triviaCategories[i].id != 24 && triviaCategories[i].id != 25 && triviaCategories[i].id != 29 && triviaCategories[i].id != 30) {
            categoryDropDown.append(`<option value="${triviaCategories[i].id}">${triviaCategories[i].name}</option>`);
            console.log(i);
        } else {
            console.log('Index -', i, '& ID -', triviaCategories[i].id, 'was removed');
        }
    }
    // Appending hard coded values for the difficulty
    difficultyDropDown.append("<option value='easy'>Easy</option>");
    difficultyDropDown.append("<option value='medium'>Medium</option>");
    difficultyDropDown.append("<option value='hard'>Hard</option>");
}
// END of populateDropDowns function


//Pulling the data from the api category list.
const fetchCategories = () => {
    fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => {
            populateDropDowns(data);
        });
}
// END of fetchCategories.

//startGame function created to append the difficulty and categories per the ID specified by the user.
function startGame() {
    const categoryDropDown = $('#categories')[0].value;
    const difficultyDropDown = $('#difficulty')[0].value;

    const questions = document.getElementById('question');
    const answers = Array.from(document.getElementsByClassName('answer'));


    let waitRequest = false;

    
    //Generate the API url based on the user input (categoryDropDown,difficultyDropDown)
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryDropDown}&difficulty=${difficultyDropDown}&type=multiple`;
    //questionsArray set to an empty array so i can then iterate through the length of the data results and populate the array with the returned data
    const questionsArray = [];

    //Pulling the data from the url and pushing the data into the empty questions array.
    fetch(url).then(response => response.json()).then(data => {
        for (let x = 0; x < data.results.length; x++) {
            questionsArray.push(data.results[x]);
        }
        console.log('questions array ', questionsArray);
        console.log('categories data', categoryDropDown);

        // At this point I may show modal with first questions (questionsArray[0])
        const questionsLength = Math.random(Math.floor() * questionsArray.length);
        const liveQuestion = questionsArray[0].question;

        answers.forEach(answer => {
            const dataSet = answer.dataset["number"];
            answer.innerText = questionsArray["answer" + number];
        })


        const correctAnswer = questionsArray[0].correct_answer;
        const wrongAnswer = questionsArray[0].incorrect_answers;
        console.log('wrong answer', wrongAnswer);
        console.log('correct answers', correctAnswer);
        console.log('current question', liveQuestion);

        // Be sure to store the entire length of the array so i know when I am on the last question and can show the user the question count (const questionsLength = questionsArray.length)

        // slap the questionsArray[0] answers into answer boxes
        console.log('answers', answers);







        // ensure onClick handlers on each box (answer-box should probably be a button but I may use divs and paragraphs)

        // on click for the selected answer - remove that question from the array, or iterate onto the next index (so questionsArray[0] -> questionsArray[1] and so on so forth)

        // rinse and repeat until I reach the final index (array length) at which point I will have a show score button which will add up the count of all correct answers vs incorrect answers etc

    });
}

fetchCategories();