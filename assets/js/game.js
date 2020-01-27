//Fetching data from the API
// https://opentdb.com/api.php?amount=10

// https://opentdb.com/api.php?amount=10&category=10&difficulty=easy

// OLD syntax 
// function fetchCatagories() {
//     fetch('https://opentdb.com/api_category.php')
//         .then(function(result) {
//             return result.json()}
//         )
//         .then(function(data) {
//             return populateDropDowns(data);
//         });
// }

//below is a function 
function fetchCatagories() {
    fetch('https://opentdb.com/api_category.php')
        .then(result => result.json())
        .then(data => {
            populateDropDowns(data);
        });
}

fetchCatagories()

// function created to populate the dropdowns

function populateDropDowns(data) {
    // Select the elements by ID using Jquery
    const catagoryDropDown = $('#catagories');
    const difficultyDropDown = $('#difficulty');
    const numberQuestions = $('#questions');
    let i;
    const triviaCategories = data.trivia_categories;

    // loop trough triviaCategories array and add them to the catagories dropdown
    for (i = 0; i < triviaCategories.length; i++) {
        catagoryDropDown.append(`<option value="${triviaCategories[i].id}">${triviaCategories[i].name}</option>`);

    }
    // Appened easy to difficulty dropdown
    difficultyDropDown.append("<option value='easy'>Easy</option>");
    // Appened easy to difficulty dropdown    
    difficultyDropDown.append("<option value='medium'>Medium</option>");
    // Appened easy to difficulty dropdown
    difficultyDropDown.append("<option value='hard'>Hard</option>");
}

const Person = {
    name: 'Phil'
};

//$('#catagories')[0].value;
function startGame() {
    // 1. Get the value from the Category dropdown.
    const catagoryDropDown = $('#catagories')[0].value;
    // 2. Get the difficulty from the difficulty dropdown.
    const difficultyDropDown = $('#difficulty')[0].value;
    // 4. Get the type of questions.
    const numberQuestions = $('#questions')[0].value;
    // 5. Generate the API url based on the user input (catagoryDropDown,difficultyDropDown)
    const url = `https://opentdb.com/api.php?amount=${numberQuestions}&category=${catagoryDropDown}&difficulty=${difficultyDropDown}&type=mutliple`;

    // 6. Make a fetch request with the url

    // 7. Parse data like before and console.log
    console.log(startGame);
    // 8. Review and relax.
}



//trying to log the apoi
// fetch("https://opentdb.com/api.php?amount=100&category=15&difficulty=easy&type=multiple")
//     .then(res => {
//         return res.json();
//     })
//     .then(loadedQuestions => {
//         console.log(loadedQuestions);
//     })

const question = document.getElementById('question');
const answer = Array.from(document.getElementsByClassName('answer'));
const points = 1;
const maxquestions = 3;

let openQuestion = {};
let allowAnswers = true;
let score = 0;
let questionNumber = 0;
let remainingQuestions = [];

let questions = [{
        question: "Which of these is a type of monster found in Minecraft?",
        choice1: "Skeleton",
        choice2: "Vampire",
        choice3: "Warewolf",
        choice4: "Minotaur",
        answer: 1
    },
    {
        question: "Who is the writer of the game Half-Life?",
        choice1: "Robin Walker",
        choice2: "Gabe Newell",
        choice3: "Marc Laidlaw",
        choice4: "Chet Faliszek",
        answer: 3
    },
    {
        question: "What is the title of song on the main menu in Halo?",
        choice1: "Opening Suite",
        choice2: "Shadows",
        choice3: "Suite Autumn",
        choice4: "Halo;",
        answer: 4
    }
]


//https://8000-d4c04d7c-700e-4c83-9d3d-84de3dca9633.ws-eu01.gitpod.io/test.html

//https://opentdb.com/api_category.php