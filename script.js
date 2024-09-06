document.title = "Password Generator";

const passWordBox = document.querySelector("#password");
const len = 16;
const numbers = "0123456789";
const uppCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+-=[]{};':,.<>/?";

const allChars = uppCase + lowCase + numbers + symbols;

let generatePassword = () => {
    let passWord = "";
    passWord += uppCase[Math.floor(Math.random() * uppCase.length)];
    passWord += lowCase[Math.floor(Math.random() * lowCase.length)];
    passWord += symbols[Math.floor(Math.random() * symbols.length)];
    passWord += numbers[Math.floor(Math.random() * numbers.length)];

    while (len > passWord.length) {
        passWord += allChars[Math.floor(Math.random() * allChars.length)];    
    }
    passWordBox.value = passWord;
};

let copyPassWord = () => {
    passWordBox.select();
    navigator.clipboard.writeText(passWordBox.value);
    // passWordBox.value=""; --> Cut func() --> clears the password
}

