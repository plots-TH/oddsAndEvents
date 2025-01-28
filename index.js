// TODO: this file! :)
const form = document.querySelector("form");
const numberInput = document.querySelector("#number");
const numberBankOutput = document.querySelector("#numberBank output");
//When the "Sort 1" button is clicked, 
// the first number in the number bank should be removed 
// and placed into either the odd or even category.
const sortAllButton = document.querySelector("#sortAll");
const oddsOutput = document.querySelector("#odds output");
const evensOutput = document.querySelector("#evens output");

const sortOneButton = document.querySelector("#sortOne");

const numberBank = [];


// === State ===
const state = {
    start: ["numbers"],
    target: [],
  };

  console.log(state)
 

  // add inputted numbers into the number bank

  form.addEventListener("click", function (e) {
    e.preventDefault();
    const numberToAdd = numberInput.value;
    if(numberToAdd !== "") {
        console.log(numberToAdd);
        numberBank.push(Number(numberToAdd));
        numberBankOutput.textContent = numberBank.join(", ");
        console.log(numberBankOutput)
        numberInput.value="";
    }
  });

  //sort all numbers into odds or evens

  sortAllButton.addEventListener("click", function () {
    const odds = [];
    const evens = [];

    numberBank.forEach((number) => {
        if (number % 2 === 0){
            evens.push(number);
        } else {
            odds.push(number);
        }
    });
    evensOutput.textContent = evens.join(", ");
    oddsOutput.textContent = odds.join(", ");
// clear the number bank after sorting
    numberBank.length = 0;
    numberBankOutput.textContent = "";
  });

  // get sort 1 button working

  sortOneButton.addEventListener("click", function () {
    if(!numberBank.length) return;

    const numToSort = numberBank.shift();
    console.log("first number to be removed from number bank:", numToSort);
    if(numToSort % 2 === 0){
        evensOutput.textContent += (evensOutput.textContent ? ", " : "") + numToSort;
  } else {
    oddsOutput.textContent += (oddsOutput.textContent ? ", " : "") + numToSort;
  }
    
    

    
    numberBankOutput.textContent = numberBank.join(", ");
  })