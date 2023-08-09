// Array to store the entered names
var names = [];

// Function to add a name to the array
function addName() {
    var userInput = document.getElementById("userinput").value;
    names.push(userInput);
    document.getElementById("userinput").value = ""; // Clear the input field
}

// Function to search for a name in the array and display it
function searchName() {
    var searchInput = document.getElementById("searchinput").value;
    var result = document.getElementById("result");

    var foundNames = [];
    for (var i = 0; i < names.length; i++) {
        if (names[i] === searchInput) {
            foundNames.push(names[i]);
        }
    }

    if (foundNames.length > 0) {
        result.textContent = "The name(s) found: " + foundNames.join(", ");
    } else {
        result.textContent = "The name was not found.";
    }

    document.getElementById("searchinput").value = ""; // Clear the search input field
}




// var names = []


// function inputfun() {
//     var userinput = document.getElementById('userinput').value;

//     names.push(userinput)
//     document.getElementById('userinput').value = ''; 

// }
// function searchinp() {
//     var searchinput = document.getElementById('searchinput');
// for (let index = 0; index < names.length; index++) {
//     var found = false
//     if(names[i]=== searchinp){
//         found = true;
//         break
//     }
// }

// if (found) {
//     pera.textContent = "The name was found.";
// } else {
//     pera.textContent = "The name was not found.";
// }
//     document.getElementById('searchinp').value = '';
    
// }
// console.log(names);