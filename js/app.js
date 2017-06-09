

// ======================================================
var count = 1;
var users = [];


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
		// add a class of failure to results if user name value is empty
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to type your name";

		// stop function if no answer
		return;
	};

  // ---  PASSWORD  ---
  // check if the username input is empty
	if(userPassword == "") {
		// add a class of failure to results if user Password is empty
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to type your password";

		// stop function if no answer
		return;
	};

  // ---  EMAIL  ---
	if (userEmail == "") {
		// add a class of failure to results if no user email value
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to add your email";

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

  // ---  USER AGE  ---
	// check if value is empty
	if(userAge == undefined) {
		// add a class of failure to results if no user color value
		results.className = "failure";
		// update the text content of results
		results.textContent = "you forgot to type your age";

		// stop function if no answer
		return;
	}

	// if everything passes add a class of success to results
	results.className = "success";
	// update the text content of results
	results.textContent = "Welcome, " + userName;

	// create object for user profile data
	var userProfile = {
		name : userName,
    password : userPassword,
    email : userEmail,
		gender : userGender,
		age : userAge,
	};

	// confirm existance of all user profile data
	console.log(userProfile);

	// run displayProfile after 1 second passing in new profile data to be displayed
	setTimeout(function() {
		displayProfile(userProfile);
	}, 1000);
};


//add click function to element with id="sendData"
document.getElementById('sendData').addEventListener('click', getUserData, false);

// function reguisterUser (){
//   var userName = document.getElementById('userName').value;
//   var userPsd = document.getElementById('userPassword').value;
//
//   if ((userName && userPsd) != ""){
//     //create list
//     users.push({name: userName, pswd: userPsd})
//     console.log(users);
//
//     //delete content after pushing the button
//     document.getElementById('newName').value = "";
//     document.getElementById('newPwd').value = "";
//     return count++;
//   }
// return
// }


// document.getElementById('sendData2').onclick = function (){ loginUser()};
//
// function loginUser (){
//   var oldName = document.getElementById('oldName').value;
//   var oldPsd = document.getElementById('oldPwd').value;
//
//
//   for (var i = 0; i < users.length; i++) {
//
//   if ((oldName && oldPsd) != ""){
//       if ((oldName === users[i].name) && (oldPsd === users[i].pswd) ) {
//         console.log( oldName + "," + oldPsd);
//         alert("Welcome Back!")
//         return
//       }
//    }
//  }
// }
