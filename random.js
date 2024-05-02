let passwordBox = document.getElementById("password");
       let passwordLength = 7;

       let upperCase = "AEIOU";
       let lowerCase = "aeiou";
       let number = "012345";
       const allChars = number + lowerCase + upperCase;



       function createPassword() {
        let password = "";
        password += number[Math.floor(Math.random() * number.length)];
        password += number[Math.floor(Math.random() * number.length)];
        password += upperCase[Math.floor(Math.random() * upperCase.length)];
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)];


        while (passwordLength > password.length) {
            password += allChars[Math.floor(Math.random() * allChars.length)];
        }

        passwordBox.value = password;

}