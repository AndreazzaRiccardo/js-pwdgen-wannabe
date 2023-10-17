// PASSWORD GENERATOR

// Richiesta nome
let firstName = prompt("Scrivi il tuo nome");
firstName = firstName.toString();
console.log(firstName, typeof firstName);

// Richiesta cognome
let lastName = prompt("Scrivi il tuo cognome");
lastName = lastName.toString();
console.log(lastName, typeof lastName);

// Richiesta colore
let favoriteColor = prompt("Scrivi il tuo colore preferito");
favoriteColor = favoriteColor.toString();
console.log(favoriteColor, typeof favoriteColor);

// Generazione password
const genPassword = `${firstName}${lastName}${favoriteColor}21`;
console.log(genPassword, typeof genPassword);

// Messaggio per l'utente
const userPassword = `Your Password is: ${firstName}${lastName}${favoriteColor}21`;
console.log(userPassword, typeof userPassword);

// Stampa in pagina
document.getElementById("user-password").innerHTML = userPassword;