console.log("Greetings");


const resetAll = document.getElementById("btn-reset");
const addingAll = document.getElementById("btn-all");
const mainDiv = document.getElementById("main-div");
const minVal = document.getElementById("minValue");
const maxVal = document.getElementById("maxValue");
let lastBoxId = 0;



function resetData() {
    console.log("Data has been reset");
    while (mainDiv.firstChild) {
        mainDiv.removeChild(mainDiv.firstChild);
}
lastBoxId = 0;
}

function addAll() {
    console.log("Adding All Elements");

    for (i = minVal.value; i <= maxVal.value; i++) {
        lastBoxId++;
        const element = document.createElement("div");
        mainDiv.appendChild(element);
        if (i % 3 !== 0 && i % 5 !== 0) {
            element.setAttribute("id", "box-" + lastBoxId);
            element.setAttribute("class", "boxes empty" );
            element.innerText += i;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            element.setAttribute("id", "box-" + lastBoxId);
            element.setAttribute("class", "boxes FizzBuzz");
            element.innerText += "FizzBuzz " + i;
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            element.setAttribute("id", "box-" + lastBoxId);
            element.setAttribute("class", "boxes Fizz");
            element.innerText += "Fizz " + i;
        }
        if (i % 5 === 0 && i % 3 !== 0) {
            element.setAttribute("id", "box-" + lastBoxId);
            element.setAttribute("class", "boxes Buzz");
            element.innerText += "Buzz " + i;
        }
    }
    
}



let minRangeSlider = document.getElementById("minValue");
let minRangeValue = document.getElementById("minValueLabel");
minRangeSlider.innerHTML = minRangeValue.value;

minRangeSlider.oninput = function() {
    minRangeValue.innerHTML = this.value;
}
let maxRangeSlider = document.getElementById("maxValue");
let maxRangeValue = document.getElementById("maxValueLabel");
maxRangeSlider.innerHTML = maxRangeValue.value;

maxRangeSlider.oninput = function() {
  maxRangeValue.innerHTML = this.value;
}


function main() {
    console.log("Started main");
    // maxVal.onchange = onMaxChange;
    resetAll.onclick = resetData;
    addingAll.onclick = addAll;

}

main();