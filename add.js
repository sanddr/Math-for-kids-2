let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let answer = 0;
let audio = document.getElementById("myAudio");


function generateEquation(){
//Assign random numbers to make the equation
    let num1 = Math.floor(Math.random() * 11);
    let num2 = Math.floor(Math.random() * 11);

//Add randomly generated numbers to create the equation
    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

//Calculate the correct answer
    answer = num1 + num2;

//Assign dummy anserws
    let dummyAnswer1 = Math.floor(Math.random() * 21);
    let dummyAnswer2 = Math.floor(Math.random() * 21);


//array with all choices
    let allAnswers = [answer, dummyAnswer1, dummyAnswer2];
    let switchAnswers = [];

//shuffle possible answers
//////////////// come back HERE////////////
for(i = allAnswers.length; i--;){
    switchAnswers.push(allAnswers.splice(Math.floor(Math.random() * (i+1)), 1));
}

//Assign all possible answers in HTML
    option1.innerHTML = switchAnswers[0];
    option2.innerHTML = switchAnswers[1];
    option3.innerHTML = switchAnswers[2];
}


//Add click function to every option and evaluate if the answer is correct
option1.addEventListener("click", function(){
    if(option1.innerHTML == answer){  //option1.innerHTML is a STRING so need to be ==, cannot use ===
        generateEquation();
    }else{
        audio.play();
    }
})

option2.addEventListener("click", function(){
    if(option2.innerHTML == answer){
        generateEquation();
    }else{
        audio.play();
    }
})

option3.addEventListener("click", function(){
    if(option3.innerHTML == answer){
        generateEquation();
    }else{
        audio.play();
    }
})

//Call the function
generateEquation();