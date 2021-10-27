// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var user = document.contactForm.user.value;
    var password= document.contactForm.password.value;
    var mobile = document.contactForm.mobile.value;
    var college =  document.contactForm.college.value;
    var branch = document.contactForm.branch.value;
    var country = document.contactForm.country.value;
    var gender = document.contactForm.gender.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            // Populate hobbies array with selected values
            hobbies.push(checkboxes[i].value);
        }
    }
    
	// Defining error variables with a default value
    var nameErr = emailErr = userErr = passwordErr = mobileErr = collegeErr = branchErr = countryErr = genderErr = true;
    
    // Validate name
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    // Validate email address
    if(email == "") {
        printError("emailErr", "Please enter your email address");
    } else {
        // Regular expression for basic email validation
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Please enter a valid email address");
        } else{
            printError("emailErr", "");
            emailErr = false;
        }
    }

    // Validate USERID
    if(user == "") {
        printError("userErr", "Please enter your UserID");
    } else {
        var regex = /^[A-Z]/;                
        if(regex.test(user) === false) {
            printError("userErr", "First character should be capital letter in username");
        } else {
            printError("userErr", "");
            userErr = false;
        }
    }

    // Validate Password
    if(password == "") {
        printError("passwordErr", "Please enter your password");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;                
        if(regex.test(password) === false) {
            printError("passwordErr", "a minimum of 1 lower case letter [a-z] and a minimum of 1 upper case letter [A-Z] and  a minimum of 1 numeric character [0-9] and 1 special character and at least 1 upper case, numeric, and special character must be EMBEDDED somewhere  in the middle of the password, and not just be the first or the last character of the  password string.");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }
    
    // Validate mobile number
    if(mobile == "") {
        printError("mobileErr", "Please enter your mobile number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", "Please enter a valid 10 digit mobile number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }

  

    // Validate Branch
    if(branch == "Select") {
        printError("branchErr", "Please select your branch");
    } else {
        printError("branchErr", "");
        branchErr = false;
    }
    
    
    // Validate country
    if(country == "Select") {
        printError("countryErr", "Please select your state");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }
/*
    // Validate Address
    if(address == "") {
        printError("adressErr", "Please enter your Address");
    } 
*/  
    // Validate gender
    if(gender == "") {
        printError("genderErr", "Please select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    // Prevent the form from being submitted if there are any errors
    if((nameErr || emailErr || userErr || passwordErr || mobileErr || branchErr || countryErr || genderErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "College: " + college + "\n" +
                          "Branch: " + branch + "\n" +
                          "Country: " + country + "\n" +
                          "Gender: " + gender + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);

    }
};