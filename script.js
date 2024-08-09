const passwordBox = document.getElementById("password");
const length = 20;

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = `~!@#$%^&*()_-=+[]{};:'"|<>,.?/`;

const allCharacters = upperCase + lowerCase + numbers + symbols; 

function createPassword(){
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];  

  while(length > password.length){
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];  
  }
  passwordBox.value = password;
}

function copyPassword() {
  passwordBox.select();
  
  try {
    const successful = document.execCommand("copy");
    const msg = successful ? 'Password copied to clipboard!' : 'Failed to copy password.';
    alert(msg);
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}