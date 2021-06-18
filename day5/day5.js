let options = ["Water", "Wine", "Coffee", "Juice", "Beer"];
let price = [0.50, 8, 1, 1.50, 4.50];

var result = document.getElementById("result");
let button = document.getElementById("button");


button.addEventListener("click", () => {
    var balance = document.getElementById("input").value;
    var choice = document.getElementById("input2").value;
   



    if (choice == options[0] && balance >= price[0] || 
        choice == options[1] && balance >= price[1] ||
        choice == options[2] && balance >= price[2] ||
        choice == options[3] && balance >= price[3] ||
        choice == options[4] && balance >= price[4]){
        result.textContent = "enjoy your drink!"

    } else {
        result.textContent = "not enough money!"

    }
})









