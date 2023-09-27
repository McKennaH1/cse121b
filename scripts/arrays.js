
// example 1
const steps = ["one", "two", "three"];
const stepsHTML = steps.map(function (step) {
    return `<li>${step}<li>`;
});
document.getElementById("myList").innerHTML = stepsHTML.join()

// example 2
const grades = ["A", "B", "A"];
function convertToGPA(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}
const gpaPointsOne = grades.map(convertToGPA);

// example 3
const gpaPoints = grades.map(convertToGPA);
const pointsTotal = gpaPoints.reduce(function(total, item) {
    return total + item;
})
const gpa = pointstotal / gpaPoints.length;

//example 3-2
// this si the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

// this could be further sumplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"]
const shortWords = words.filter(function (word) {
    return word.length < 6;
})

//same thing with an arrow function
const shortWords = words.filter((word) => word.length < 6);

// example 5
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);