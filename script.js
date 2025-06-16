let button = document.querySelector("button");
const element = document.querySelector('p');

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    if (weather === "rainy") {
        element.textContent = "Bring an umbrella!";
    }
    else {
        element.textContent = "Enjoy the sun!";
    }
    // 1. Write a conditional statement:
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"


});