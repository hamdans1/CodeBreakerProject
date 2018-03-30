let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    if (answer == '' && attempt == 0){
        setHiddenFields();
    }
    //add functionality to guess function here
}

//implement new functions here
function setHiddenFields(){
    attempt = 0;
    answer = Math.floor(Math.random()*10000 + 1).toString();
    while (answer.length < 4){
        answer = "0" + answer;
    }
    return answer;
}