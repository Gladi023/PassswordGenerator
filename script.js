// Add event listener to generate button
//const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generate')
function generatePassword() {
    var passwordLength = prompt("Please enter number of characters between 8 and 128.")
    generatePassword();
//generateButton.addEventListener('click', writePassword);
let lowercase = document.getElementById("lowercase");
let special = document.getElementById("special");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");

const specialARR = ["!", "@", "#", "%", "?", "&"];
const numbersARR = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const lowercaseARR = [
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
  ]
const uppercaseARR = lowercaseARR.map((char)=> char.toUpperCase());
numbersARR.push(10)
console.log(numbersARR)

const validateCheckBox = () => {
    let options=[]
    if (lowercase.checked) {
        options.push(0)
    }
    if (special.checked) {
        options.push(1)

    }
    if (uppercase.checked) {
        options.push(2)

    }
    if (numbers.checked) {
        options.push(3)

    }

    function Validate() {
        if(!validateCheckBox()) {
            alert("You must check at least one of the checkboxes");
            return false;
        }
        return true
    
}


//var generateBtn = document.querySelector("#generate");
// Write password to the #password input

/*function writePassword() {


    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


//Window Alerts after click
 function generatePassword() {
    var passwordLength = prompt("Please enter number of characters between 8 and 128.")
    var lowerCases = confirm("Do you want Lowercases in your password?");
    var upperCases = confirm("Do you want uppercases in your password?");
    var numbers = confirm("Do you want numbers in your password?");
    var special = confirm("Do you want special characters in your password?");

}

var functionArray = {
    getNumbers: function(){
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 +65));
    },
    getSpecialCharacters: function() {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }
};

if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
}

if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
}

if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
} 

// for loop below

var passwordGenerated = "";

// loop to get the random characters
for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var passwordGenerated = randomNumberPicked;
}
*/