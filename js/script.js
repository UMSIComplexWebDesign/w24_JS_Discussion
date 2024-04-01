let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
// Helpful Links
// https://www.w3schools.com/jsref/met_document_queryselector.asp
// https://www.w3schools.com/jsref/met_document_getelementbyid.asp
document.getElementById("host-name").innerHTML = "Host Name";
// or use querySelector - document.querySelector("#host-name")
// You can use CSS selectors inside querySelector.
// querySelector gets you the first element that matches the selector
// querySelectorAll gets all the elements that matches the selector as an array
document.getElementById("collaborator-name").innerHTML = "Host Name";
document.getElementById("collaborator-2-name").innerHTML = "Host Name";

// Question 2
// You can also create their own CSS classes in style.css file and use that. 
let floatingButton = document.querySelector("#instruction_button");
floatingButton.addEventListener("click", hideInstructions);
function hideInstructions() {
    // get all the instructions that has the class 'question'
    // this returns the elements as an array
    let questions = document.querySelectorAll(".question");
    // to access all the elements, use a 'for' loop. There are many kinds of for loop
    // find them all here https://www.w3schools.com/js/js_loop_for.asp
    for (let question of questions) {
        question.classList.toggle("hidden");
    }
    // 'this' variable has context to on which element this event came from
    // read more on 'this' here: 
    // https://www.freecodecamp.org/news/what-is-this-in-javascript/
    if (this.innerHTML === "Hide Instructions") {
        this.innerHTML = "Show Instructions";
    } else {
        this.innerHTML = "Hide Instructions";
    }
}
// keyboard shortcut
// 'keydown' is one of the event type you can listen for keyboard press events. 
document.body.addEventListener("keydown", function(event) {
    if (event.key === "i") {
        hideInstructions();
        if (floatingButton.innerHTML === "Hide Instructions") {
            floatingButton.innerHTML = "Show Instructions";
        } else {
            floatingButton.innerHTML = "Hide Instructions";
        }
    }
} )

// Question 3
// There are two event types you can use to listen for input change
// One is the 'change' event, https://www.w3schools.com/jsref/event_onchange.asp
// Other one is 'input' event, https://www.w3schools.com/jsref/event_oninput.asp
// 'change' triggers after the focus moves out of the <input> element. 'input' gets 
// triggerred for each character entered
// There is an 'input' event which fires for every character. This is what we want to use.
// Try changing 'input' to 'change' below and see the difference
let firstName = document.querySelector("#first_name");
let lastName = document.querySelector("#last_name");
firstName.addEventListener("input", checkAndChangeLastName);
function checkAndChangeLastName(event) {
    if (event.target.value === "John" || event.target.value === "john") {
        lastName.value = "Doe";
    }
}

// Question 4
// This code is not efficient but is beginner friendly
let userName = document.querySelector("#user_name");
let userNameAlert = document.querySelector("#username-alert");
userName.addEventListener("input", checkIfUserExists);
function checkIfUserExists(event) {
    for (let pokemon of pokemonList) {
        if (pokemon.toUpperCase() === event.target.value.toUpperCase()) {
            // name exists
            // console.log(name.toUpperCase() + " " + event.target.value.toUpperCase());
            userNameAlert.innerHTML = "Username already exists";
            return;
        }
    }
    userNameAlert.innerHTML = "Unique username created";
}

// Question 5
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm_password");
let passwordAlert = document.querySelector("#password-alert");
// Note that same function is added to both elements
confirmPassword.addEventListener("input", checkPassword);
password.addEventListener("input", checkPassword);
function checkPassword(event) {
    console.log(event.target.id);
    if (event.target.id === "password") {
        if (event.target.value === confirmPassword.value) {
            passwordAlert.innerHTML = "Password Matches";
        } else {
            passwordAlert.innerHTML = "Password does not match";
        }
    } else {
        if (event.target.value === password.value) {
            passwordAlert.innerHTML = "Password Matches";
        } else {
            passwordAlert.innerHTML = "Password does not match";
        }
    }
}

let hidePassword = document.querySelector("#hide-password");
hidePassword.addEventListener("click", togglePassword);
function togglePassword() {
    if (password.type === "text") {
        password.type = "password";
        confirmPassword.type = "password";
        this.innerHTML = "Show Password";
    } else {
        password.type = "text";
        confirmPassword.type = "text";
        this.innerHTML = "Hide Password";
    }
}

//Question 6
let radioReset = document.querySelector("#radio-reset-button");
radioReset.addEventListener("click", resetRadioButtons);
// Here I am getting all the radio elements and setting them to false individually
// inside a for loop
function resetRadioButtons() {
    let radioButtons = document.querySelectorAll("input[type='radio']");
    for (let radioButton of radioButtons) {
        radioButton.checked = false;
    }
}

//Question 7 
// Read more on specific <input> types, for example, here it is 'file' to know 
// how to access it's data
// Reference: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#getting_information_on_selected_files
let filePicker = document.querySelector("#profile_pic");
filePicker.addEventListener("change", checkSize);
function checkSize() {
    if (filePicker.files.length == 1) {
      let size = filePicker.files[0].size;
      if (size > 100 * 1024) {
        filePicker.value = "";
        alert("Size is greater than 100KB");
      }
    }
};

//Question 8
let colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("input", changeBackground);
function changeBackground(event) {
    document.body.style.backgroundColor = event.target.value;
}
// Challenge - Google and find out 😉
// You've to write a custom function to check if two color codes pass
// the contrast ratio. Google for how to do it, there are a lot of examples. 

//Question 9 
// Fix all the bugs. 
let resetFormButton = document.querySelector("button.reset-form-button");
resetFormButton.addEventListener("click", function() {
    document.querySelector("form").reset();
})
