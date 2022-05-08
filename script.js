// Add event listener to generate button
const specialCharacters = "!@#$%^&*()";
const generateButton = document.getElementById('generate')
generateButton.addEventListener('click', writePassword);


//var generateBtn = document.querySelector("#generate");
// Write password to the #password input

function writePassword() {


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

