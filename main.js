"use strict";

const calcAge = age => age * 5;
const calcHeight = height => height * 6.25;
const calcWeight = weight => weight * 10;
const tdeeCalc = (calcAge, calcHeight, calcWeight, ismGender, activity) => 
    Math.floor((calcWeight + calcHeight - calcAge + (ismGender ? 5 : - 161)) * activity);

const displayResults = tdeeCalc => {
    document.getElementById("resultsContainer").classList.remove("hidden");
    document.getElementById("dailyCaloriesDisplay").textContent = 
    'Your daily calorie expenditure based on the information you have given is ' + tdeeCalc + ' calories per day'; 
};

document.getElementById('caloriesForm').addEventListener('submit', function(event){
    event.preventDefault()

    displayResults(
        tdeeCalc(
            calcAge(parseInt(document.getElementById('userAge').value, 10)),
            calcHeight(parseInt(document.getElementById('userHeight').value, 10)),
            calcWeight(parseInt(document.getElementById('userWeight').value, 10)),
            document.getElementById('mGender').checked,
            parseFloat(document.getElementById('activity').value)
        )
    )
});






