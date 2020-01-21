fetch("https://opentdb.com/api_category.php")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        generateAnswers(data);
    })
    .catch(err => console.log(err));

function generateAnswers(questions) {
    questions.trivia_categories.forEach(element => {
        fetchNewData(element.id);
    });
}
/*
function fetchNewData(id) {
    fetch(`https://opentdb.com/api.php?amount=10&category=${id}`).then(res =>
        res.json().then(data => console.log(data))
    );
}*/