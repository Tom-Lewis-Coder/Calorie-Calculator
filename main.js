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

document.getElementById('caloriesForm1').addEventListener('submit', function(event){
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

const calDiff = (weightGoal, weight) => (weightGoal - weight) * 7700;
const inDays = timeFrame => timeFrame * 30;
const dailyCals = (calDiff, inDays) => Math.round(calDiff / inDays);

const displayResults2 = (dailyCals, tdeeCalc) => {
    document.getElementById("resultsContainer2").classList.remove("hidden");
    document.getElementById("dailyDefecitDisplay").textContent = 
    'In order to attain your goal within the selected time frame, you should consume ' + (dailyCals + tdeeCalc) + ' calories per day'; 
}

document.getElementById('caloriesForm2').addEventListener('submit', function(event){
    event.preventDefault()

    displayResults2(
        dailyCals(
            calDiff(parseInt(document.getElementById('weightGoal').value, 10), 
                          parseInt(document.getElementById('userWeight').value, 10)),
            inDays(parseInt(document.getElementById('timeFrame').value, 10))
        ),
        tdeeCalc(
            calcAge(parseInt(document.getElementById('userAge').value, 10)),
            calcHeight(parseInt(document.getElementById('userHeight').value, 10)),
            calcWeight(parseInt(document.getElementById('userWeight').value, 10)),
            document.getElementById('mGender').checked,
            parseFloat(document.getElementById('activity').value)
        )
    )
});




