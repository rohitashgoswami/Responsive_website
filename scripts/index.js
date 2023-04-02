console.log("Hey, this is from JS, I'm loaded");

function addNumber(x, y) { // hey browser, ek function add kro with the name addNumber
    console.log("Value of x, y are :", {x, y});
    console.log("Value of x + y => ", x + y);
}

function printDetails(name, age, email) { // Function Declaration
    console.log("Name :", name);
    console.log("Age :", age);
    console.log("Email :", email);
}

function checkIfThisUserIsLoggedIn() {
    return false;
}

// variables : let : scope specific, var : global, const : soemthing u don't want to change ever.
const orderNowButton = document.getElementById('order_now_button');
const submitButton = document.getElementById('submit_button');

orderNowButton.addEventListener('mouseenter', function() {
    let isUserLoggedin = checkIfThisUserIsLoggedIn();
    console.log("isUserLogged : ", isUserLoggedin);
    if (isUserLoggedin) {
        printDetails("Subhash", 23, "subhash@gmail.com") // Function Calling
        alert("Are you sure you want to order now?");
    } else {
        alert("You are not logged in, bhai login to kr le");
    }
});

function sendDetailsToDatabase(name, email, phone, message) {
    console.warn("User Contact Details are like this : ", {name, email, phone, message});
}

submitButton.addEventListener('click', function() {
    var userName = document.getElementById('name').value.trim();
    var userEmail = document.getElementById('email').value.trim();
    var phoneNumber = document.getElementById('phone').value.trim();
    var message = document.getElementById('message').value.trim();

    if (userName == "") {
        alert("Please enter your name");
        return;
    } else if (userEmail.indexOf('@') == -1) {
        alert("Email should contain @ character");
        return;
    } else if(userEmail == '') {
        alert("Email field cannot be empty");
        return;
    } else if(phoneNumber == "") {
        alert("Please enter your phone number");
        return;
    } else if(message == "") {
        alert("Please write some message");
        return;
    } else {
        sendDetailsToDatabase(userName, userEmail, phoneNumber, message);    
    }

    // if (userName != "" && userEmail != "" && phoneNumber != "" && message != "") {
    //     sendDetailsToDatabase(userName, userEmail, phoneNumber, message);    
    // } else {
    //     alert("Please fill all the fields");
    // }

})


/**
 * Earthmatic operators :
 * && -> (a && b) => it will give 'true' only if a & b both are true 
 * 
 */

/**
 * function : is a block of code { var rotash = "Rohitash Gar"; }
 * button 1 click {
 * var x = 200;
    var y = 300;}
 * button 2 click {var x = 200;
    var y = 300;}
 * button 3 click {var x = 200;
    var y = 300;}
 */

function f1() {
    addNumber(2,3);
    printDetails("Rohitash Gar", 20, "rohitash@gmail.com");
}


f1();


/**
 * String Methods:
 * 
 */

// "Subhash".length
// 7
// "Subhash".slice('b', 'h')
// ''
// "Subhash".slice(2,5)
// 'bha'
// "Subhash".substring(2,5)
// 'bha'
// "Subhash".toLocaleLowerCase()
// 'subhash'
// "sjkhfkhdkjJKSHFKJSHFDSJKFHSKJFDH".toLocaleLowerCase()
// 'sjkhfkhdkjjkshfkjshfdsjkfhskjfdh'
// "sjkhfkhdkjJKSHFKJSHFDSJKFHSKJFDH".toUpperCase()
// 'SJKHFKHDKJJKSHFKJSHFDSJKFHSKJFDH'
// "sjkhfkhdkjJKSHFKJSHFDSJKFHSKJFDH".toLocaleUpperCase()
// 'SJKHFKHDKJJKSHFKJSHFDSJKFHSKJFDH'
// "Subhash".concat("Chandra")
// 'SubhashChandra'
// "Subhash".concat(" Chandra")
// 'Subhash Chandra'
// "   ".trim()
// ''
// "   Subhash  ".length
// 12
// "   Subhash  ".trimStart()
// 'Subhash  '
// "   Subhash  ".trimEnd()
// '   Subhash'
// "Subhash".split("@")
// ['Subhash']
// "subhash@gmail.com".split('@')
// (2) ['subhash', 'gmail.com']0: "subhash"1: "gmail.com"length: 2[[Prototype]]: Array(0)
// "subhash@gmail.com".split('@')[0]
// 'subhash'
// "subhash@gmail.com".split('@')[1]
// 'gmail.com'
// "suBHASH".includes('BHASH')
// true
// "Rotash".toLowerCase().includes('r')
// true
// "Rotash".toLowerCase().includes('R')
// false
// "Rotash".toLowerCase().includes('r')
// true
// "Subhash".endsWith('bsh')
// false