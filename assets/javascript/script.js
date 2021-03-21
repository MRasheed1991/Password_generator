// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseltr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var upperCaseltr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
function generatePassword() {
  let isLowerCaseCharacters;
  let isUpperCaseCharacters;
  let isNumericCharacters;
  let isSpecialCharacters;
  let optionsArray = [];
  let password = [];
  const result = [];

  let passwordLength = prompt(
    "How many characters would you like in your password? Passwords must be at least 8 characters, but no more than 128 characters."
  );

  passwordLength = Number.parseInt(passwordLength);

  //if password is shorter then 8 character an alert be shown that password length is shorter then limit
  if (passwordLength < 8) {
    alert("your password is shorter then 8 character");
  }
  //if password is more then 128 character an alert be shown that password length is longer then limit
  if (passwordLength > 128) {
    alert("your password is longer then 128 character");
  }
  // If the user presses cancel on the password length prompt dialogue box, then the following alert is displayed.
  if (!passwordLength) {
    alert("You must specify a password length");
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    isLowerCaseCharacters = confirm(
      "Would you like to include lower case characters in your password?"
    );
    isUpperCaseCharacters = confirm(
      "Would you like to include upper case characters in your password?"
    );
    isNumericCharacters = confirm(
      "Would you like to include numeric characters in your password?"
    );
    isSpecialCharacters = confirm(
      "Would you like to include special characters in your password?"
    );

    if (isLowerCaseCharacters) {
      optionsArray.push(...lowerCaseArray);
    }
    if (isUpperCaseCharacters) {
      optionsArray.push(...upperCaseArray);
    }
    if (isNumericCharacters) {
      optionsArray.push(...numbersArray);
    }
    if (isSpecialCharacters) {
      optionsArray.push(...specialCharactersArray);
    }
    if (
      !isLowerCaseCharacters &&
      !isUpperCaseCharacters &&
      !isNumericCharacters &&
      !isSpecialCharacters
    ) {
      alert("You must select at least one character type");
    }

    console.log(optionsArray);

    function randomPasswordGenerator() {
      const randomIndex = Math.floor(Math.random() * optionsArray.length);
      const randomChoice = optionsArray[randomIndex];

      return randomChoice;
    }

    for (let i = 0; i < passwordLength; i++) {
      let randomResult = randomPasswordGenerator();
      result.push(randomResult);
    }
    console.log(result);

    password = result.join("");

    return password;
  }
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
