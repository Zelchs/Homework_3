console.log("Greetings");


const resetAll = document.getElementById("btn-reset");
const addingAll = document.getElementById("btn-all");
const mainDiv = document.getElementById("main-div");


function resetData() {
    console.log("Data has been reset");
    mainDiv.removeChild;
}


function addAll() {
    console.log("Adding All Elements");

    for (i = 1; i <= 100; i++) {
        const element = document.createElement("div");
        mainDiv.appendChild(element);
        if (i % 3 !== 0 && i % 5 !== 0) {
            element.setAttribute("id", "box-" + i);
            element.setAttribute("class", "boxes empty" );
            element.innerText += i;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            element.setAttribute("id", "box-" + i);
            element.setAttribute("class", "boxes FizzBuzz");
            element.innerText += "FizzBuzz " + i;
        }
        if (i % 3 === 0 && i % 5 !== 0) {
            element.setAttribute("id", "box-" +i);
            element.setAttribute("class", "boxes Fizz");
            element.innerText += "Fizz " + i;
        }
        if (i % 5 === 0 && i % 3 !== 0) {
            element.setAttribute("id", "box-" +i);
            element.setAttribute("class", "boxes Buzz");
            element.innerText += "Buzz " + i;
        }
    }
}



function main() {
    console.log("Started main");

    resetAll.onclick = resetData;
    addingAll.onclick = addAll;

}

main();