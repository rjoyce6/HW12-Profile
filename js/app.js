// hide profile form
document.getElementById('oldProfile').style.display = "none";
document.getElementById('updateProfile').style.display = "none";


// ======================================================
var count = 1;
var users = [{
  name : "rommy",
  password : "joyce",
  email : "rommy.joyce@gmail.com",
  gender : "Female",
}];

var user = {};


// function to get users data
function getUserData() {
  var results = document.getElementById('results');

	// store values
	var userName     = document.getElementById('userName').value;
  var userPassword = document.getElementById('userPassword').value;
	var	userEmail    = document.getElementById('userEmail').value;

	// store elements by class for radios
	var userGenderEls = document.getElementsByClassName("userGender");
	var userAgeEls    = document.getElementsByClassName("userAge");

	// create variables to store gender and age
	var userGender, userAge;


	// ---  FIRST NAME  ---
  // check if the username input is empty
	if(userName == "") {
		// send an alert if user name is empty
		alert("you forgot to type your name");

		// stop function if no answer
		return;
	};

  // ---  PASSWORD  ---
  // check if the username input is empty
	if(userPassword == "") {
    // send an alert if user password is empty
    alert("you forgot to type your password");

		// stop function if no answer
		return;
	};

  // ---  EMAIL  ---
	if (userEmail == "") {
    // send an alert if user email address is empty
    alert("you forgot to add your email");

		// stop function if no answer
		return;
	};

	// ---  GENDER  ---
	// loop through all elements with class="userGender"
	for(var i = 0; i < userGenderEls.length; i++) {
		// if the radio was selected by the user, do this
		if(userGenderEls[i].checked) {
			// set value of answer to the value in the radio item
			userGender = userGenderEls[i].value;
		};
	};

	// if everything passes add a class of success to results





	// create object for user profile data
	var userProfile = {
		name : userName,
    password : userPassword,
    email : userEmail,
		gender : userGender,
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
  //Delete existing content
  document.getElementById('userName').value = "";
  document.getElementById('userPassword').value = "";
  document.getElementById('userEmail').value = "";

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
    //display users length
    console.log('array \"users\" lenght: ' + users.length);

    // If the user name and user password is not empty, do this
    if ((oldName && oldPsd) != ""){
      // If the a user name was found
      if ((oldName === users[i].name) && (oldPsd === users[i].password) ) {

        console.log('user name: ' + users[i].name);

        var user = users[i];



        // display profile
        setTimeout(function() {
          console.log('index: ' + i);

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
  var userName   = document.getElementById('updateName');
  var userEmail  = document.getElementById('updateEmail');
  var userGender = document.getElementById('updateGender');

  // update profile using the userProfile object
  userName.innerText   = userProfile.name;
  userEmail.innerText  = 'Email  : ' + userProfile.email;
  userGender.innerText = 'Gender : '+ userProfile.gender;
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
