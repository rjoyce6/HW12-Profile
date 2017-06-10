// hide profile form
document.getElementById('oldProfile').style.display = "none";
document.getElementById('updateProfile').style.display = "none";

// document.getElementById('updateProfile').style.display = "block";
// document.getElementById('newProfile').style.display = "none";
// document.getElementById('oldProfile').style.display = "none";

// ======================================================
var count = 1;
var users = [{
  name      : "samara",
  password  : "april",
  email     : "samara.april@coderjoyce.com",
  gender    : "Female",
  month     : "1",
  day       : "1",
  year      : "2000",
  age       :  getUserAge(1, 1, 2000).toString(),
  image     : "img/girl.jpg"
}];

var user = {};


// function to get users data
function getUserData() {
  var results = document.getElementById('results');

	// store values
	var userName     = document.getElementById('userName').value;
  var userPassword = document.getElementById('userPassword').value;
	var	userEmail    = document.getElementById('userEmail').value;

	// store elements by class for radios and select
	var userGenderEls = document.getElementsByClassName("userGender");
  var userMonthEls  = document.getElementsByClassName("userMonth");
  var userDayEls  = document.getElementsByClassName("userDay");
  var userYearEls  = document.getElementsByClassName("userYear");


	// create variables to store gender and age
	var userGender, userMonth, userDay, userYear;


	// ---  FIRST NAME  ---
  // check if the username input is empty
	if(userName == "") {
		// send an alert if user name is empty
		alert("you forgot to type your name");

		// stop function if no answer
		return;
	}

  // ---  PASSWORD  ---
  // check if the username input is empty
	if(userPassword == "") {
    // send an alert if user password is empty
    alert("you forgot to type your password");

		// stop function if no answer
		return;
	}

  // ---  EMAIL  ---
	if (userEmail == "") {
    // send an alert if user email address is empty
    alert("you forgot to add your email");

		// stop function if no answer
		return;
	}

  if( validateEmail(userEmail) == false) {
    // send an alert if user email address is empty
    alert("please enter a valid email address");

		// stop function if no answer
		return;

  }

	// ---  GENDER  ---
	// loop through all elements with class="userGender"
	for(var i = 0; i < userGenderEls.length; i++) {
		// if the radio was selected by the user, do this
		if(userGenderEls[i].checked) {
			// set value of answer to the value in the radio item
			userGender = userGenderEls[i].value;
		};
	};

  // ---  MONTH  ---
  //loop through all elements with className = 'userMonth'
  for (var i = 0; i < userMonthEls.length; i++) {
    // check which was selected by the user, do this
    if(userMonthEls[i].selected){
      // set value of answer 2 to the value in the selected item
      userMonth = userMonthEls[i].value;
    }
  }
  console.log(userMonth);
  if (userMonth == "") {
    // send an alert if user birthday month  is empty
    alert("you forgot to add a month for your birth date");

    // stop function if no answer
		return;
  }


  // ---  DAY  ---
  //loop through all elements with className = 'userDay'
  for (var i = 0; i < userDayEls.length; i++) {
    // check which was selected by the user, do this
    if(userDayEls[i].selected){
      // set value of answer 2 to the value in the selected item
      userDay = userDayEls[i].value;
    }
  }
  if (userDay == "") {
    // send an alert if user birthday month  is empty
    alert("you forgot to add a day for your birth date");

    // stop function if no answer
    return;
  }

   else if (userDay == 31 && ( userMonth == 4 || userMonth == 6 || userMonth == 9 || userMonth == 11)) {
      alert("please enter a valid date");

      // stop function if no answer
      return;
  }

  // ---  YEAR  ---
  //loop through all elements with className = 'userYear'
  for (var i = 0; i < userYearEls.length; i++) {
    // check which was selected by the user, do this
    if(userYearEls[i].selected){
      // set value of answer 2 to the value in the selected item
      userYear = userYearEls[i].value;
    }
  }

  if ( userMonth == 2) {
    console.log(userYear);
    if (userYear % 4 != 0 && userDay >= 29 ) {
      alert("please enter a valid date");

      // stop function if no answer
      return;
    } else if (userDay > 29) {
      alert("please enter a valid date");

      // stop function if no answer
      return;
    }
  }

	// if everything passes add a class of success to results
  // calculate user age
  var userAge = getUserAge(userMonth, userDay, userYear).toString();

	// create object for user profile data
	var userProfile = {
		name     : userName,
    password : userPassword,
    email    : userEmail,
		gender   : userGender,
    month    : userMonth,
    day      : userDay,
    year     : userYear,
    age      : userAge,
    image    : "http://lorempixel.com/400/400/nature/"
	};

  //create a list of registered users
  users.push(userProfile)

	// confirm existance of all user profile data
	console.log(userProfile);

	// run displayProfile after 1 second passing in new profile data to be displayed
	setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};

// Display login profile and hide the other forms
// ===========================================================================
function login() {
  //Delete existing content
  document.getElementById('oldName').value = "";
  document.getElementById('oldPwd').value = "";

  // hide profile form
  document.getElementById('newProfile').style.display = "none";
  document.getElementById('updateProfile').style.display = "none";


  // display sign in form
  document.getElementById('oldProfile').style.display = "block";
};


// Display create profile and hide the other forms
// ===========================================================================
function create() {
  //Delete existing content by id
  document.getElementById('userName').value = "";
  document.getElementById('userPassword').value = "";
  document.getElementById('userEmail').value = "";

  //Delete existing content by class




  // hide sign in form
  document.getElementById('oldProfile').style.display = "none";
  document.getElementById('updateProfile').style.display = "none";

  // display profile form
  document.getElementById('newProfile').style.display = "block";
};

// Sign in to display user profile
// ===========================================================================
function loginUser (){
  // Delete previous content
  var oldName = document.getElementById('oldName').value;
  var oldPsd = document.getElementById('oldPwd').value;

  console.log(users);

  // Check prevous user list
  for (var i = 0; i < users.length; i++) {
    // If the user name and user password is not empty, do this
    if ((oldName && oldPsd) != ""){
      // If the a user name was found
      if ((oldName === users[i].name) && (oldPsd === users[i].password) ) {

        console.log('user name: ' + users[i].name);

        var user = users[i];



        // display profile
        setTimeout(function() {
          // display to console users array
          console.log('users[i] : ');
          console.log(user);

          // accessProfile(users[i]);
          displayProfile(user);
        }, 1000);
      }
    }

  }
}

// Add click function to element with id="sendData", "login", and "create",
//"signOut"
//============================================================================
document.getElementById('login').addEventListener('click', login, false);
document.getElementById('create').addEventListener('click', create, false);
document.getElementById('sendData').addEventListener('click', getUserData, false);
document.getElementById('sendData2').addEventListener('click', loginUser, false);
document.getElementById('signOut').addEventListener('click', create, false);


// Display user profile after creating it
// ===========================================================================
function displayProfile(userProfile) {
  // hide profile form
  document.getElementById('newProfile').style.display = "none";
  document.getElementById('oldProfile').style.display = "none";

  // display profile form
  document.getElementById('updateProfile').style.display = "block";

  // select HTML elements by id
  var userName    = document.getElementById('updateName');
  var userAge     = document.getElementById('updateAge');
  var userEmail   = document.getElementById('updateEmail');
  var userGender  = document.getElementById('updateGender');
  var userBirth   = document.getElementById('updateBirth');
  var userImage   = document.getElementById('updateImage');

  // update profile using the userProfile object
  userName.innerText   = userProfile.name;
  userImage.src        = userProfile.image;
  userAge.innerText    = userProfile.age + " years old";
  userEmail.innerText  = userProfile.email;
  userGender.innerText = userProfile.gender;
  userBirth.innerText  =  months[userProfile.month].name + " " + userProfile.day + ", " + userProfile.year;

  // increment count
  count++;
}


// Display user profile after signing in
// ===========================================================================
function accessProfile(userProfile) {
  // hide profile form
  document.getElementById('newProfile').style.display = "none";
  document.getElementById('oldProfile').style.display = "none";

  // display profile form
  document.getElementById('updateProfile').style.display = "block";
}



// Update birth Date
// ===========================================================================
// create the number of days in a month
var days = [];
for (var i = 1; i <= 31; i++) {
  days.push(i);
}

 // create months
var months = [
  {id: 1, name:"January"},
  {id: 2, name:"February"},
  {id: 3, name:"March"},
  {id: 4, name:"April"},
  {id: 5, name:"May"},
  {id: 6, name:"June"},
  {id: 7, name:"July"},
  {id: 8, name:"August"},
  {id: 9, name:"September"},
  {id: 10, name:"October"},
  {id: 11, name:"November"},
  {id: 12, name:"December"}
];

// create years
var years = [];
var date = new Date();
// to create an account on this website you have to be at least 13
// assumes that users could live up 100 years
for (var i = (date.getFullYear()-13); i > (date.getFullYear()-100); i--) {
  years.push(i)
}


function birthdayInfo (){

  // MONTH
  for (var i = 0; i < months.length; i++) {
    // create an option and add text
    var option = document.createElement('option');
    var monthText = document.createTextNode(months[i].name);
    option.appendChild(monthText);

    // add option and assign a value of each option
    var addHere = document.getElementById('month');
    addHere.appendChild(option);
    option.value =  months[i].id;
    option.className = 'userMonth';
  }

  //  DAYS
  createOptions(days, "day", "userDay");

  // YEARS
  createOptions(years, "year", "userYear");

}

function createOptions(numberArray, idName, className){

  for (var i = 0; i < numberArray.length; i++) {
    // create an option and add text
    var option = document.createElement('option');
    var number = document.createTextNode(numberArray[i]);
    option.appendChild(number);

    // create an option and add text
    var addHere = document.getElementById(idName);
    addHere.appendChild(option);
    option.value =  numberArray[i];
    option.className = className;
  }
}

birthdayInfo();


// calculate birthday
// ===========================================================================

function getUserAge (month, day, year) {
  // get today's date
  var today     = new Date();
  var nowyear   = today.getFullYear();
  var nowmonth  = today.getMonth();
  var nowday    = today.getDate();

  // Find the difference between today's day vs user bith date
  var age       = nowyear - year;
  var ageMonth  = nowmonth - month;
  var ageDay    = nowday - day;

  if( ageMonth < 0 || (ageMonth == 0 && ageDay < 0)){
    age = age - 1;
  }

  if (count != 1) {
    console.log("user age: " + age);
  }
  return age;
}



// Validate email
// ===========================================================================
function validateEmail (email) {
  var regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  console.log(regEx.test(email));
  return regEx.test(email);
}
