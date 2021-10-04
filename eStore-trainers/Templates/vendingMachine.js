// global var
// random number generator to choose an index for shoes and images array
let randomNum = Math.trunc (Math.random() * 6) + 1;

// Array of all shoes
let shoes = ["2017","2021","2021","2014","2020","1993"];

// Array of all shoe images in vending machine. The shoes index will be the same as the images array.
let images = ["../Images/sneaker1.jpg","../Images/sneaker2.jpg","../Images/sneaker3.jpg","../Images/lebron.jpeg","../Images/jordan5.jpeg","../Images/airwalk.jpeg"];

// var for the default tries the user has
let tries = 3;
// 

// function to change the message above the 
function changeMsg(text) {
    document.querySelector(".info").textContent=text;
}
// 

// change image function that will be randomnized based on the random number.
function changeImage(a) {
    document.getElementById("questionImg").src=a;
}
// 

// event listener to begin game button
document.querySelector(".beginBtn").addEventListener('click',function() {
    
    //random number generator
    randomNum = Math.trunc (Math.random() * 5) + 1;
    tries = 3
    changeImage(images[randomNum]);

    // when button is clicked the tries var will be reset to 3
    document.querySelector(".score").textContent = tries;

    // everytime button is clicked this message will show
    changeMsg("Let's start guessing...");

    // disable input box and check button
    document.querySelector(".checkBtn").disabled = false;
    document.querySelector(".input").disabled = false;

    document.querySelector(".divv").style.background = "gray";
})
// 

// eventListener when user pressees the check button, 
document.querySelector(".checkBtn").addEventListener('click',function() {
    // save the user input into a var
    let inputUser = document.querySelector(".input").value;

    // every click of the button couses the try var to go down by one
    tries --;

    // a var to get a randomized index from the shoe array. Will be the same index as the shoes array
    let selectedNum = shoes[randomNum];
    
    if (!inputUser) {
        changeMsg("Please enter a valid number");
        document.querySelector(".score").textContent = tries;

        if (tries === 0) {
            changeMsg("You lose!");

            document.querySelector(".divv").style.background = "linear-gradient(to right, red, black)";

            document.querySelector(".checkBtn").disabled = true;

            document.querySelector(".input").disabled = "true";
        }
    }

    else if (inputUser === selectedNum) {
        changeMsg("Congratulations, You win the shoe!");

        document.querySelector(".checkBtn").disabled = true;

        document.querySelector(".input").disabled = "true";

        document.querySelector(".divv").style.background = "linear-gradient(to right, green, black)";
    }

    else if (inputUser != selectedNum) {
        if (tries === 0) {
            changeMsg("You lose!");
            document.querySelector(".score").textContent = 0;
            document.querySelector(".checkBtn").disabled = true;
            document.querySelector(".input").disabled = "true";
            document.querySelector(".divv").style.background = "linear-gradient(to right, red, black)";
        }
        else {
            document.querySelector(".score").textContent = tries;
            changeMsg("Wrong!");
         }
    }
})

// let randomNum = Math.trunc (Math.random() * 2) + 1;
// let shoes = ["2001","2002","2003","2004","2005","2006","2007","2008","2009","2010"];
// let images = ["button.gif","coins.gif","arcadeButton.png","question.png","score.jpeg","highscore2.png","insertCoins.png","button.gif","coins.gif","question.png"];
// let tries = 3;

// function changeMsg(text) {
//     document.querySelector(".info").textContent=text;
// }

// function changeImage(a) {
//     document.querySelector(".shoeImg").src=a.src;
// }

// document.querySelector(".checkBtn").addEventListener('click',function() {
//     let inputUser = document.querySelector(".input").value;

//     let selectedNum = shoes[randomNum]

//     if (inputUser === selectedNum) {
//         changeMsg("Congratulations, You win the shoe!");
//         changeImage(images[randomNum]);
//     }

//     else if (inputUser != selectedNum) {
//         changeMsg("You lose!");
//     }
// })