// function of printError()
function printError(elementId, errorMessage) {
    document.getElementById(elementId).innerHTML = errorMessage;
}

// function of checkForm()
function checkForm() {
    // you have to pickup the values from the respective input elements
    var fullname = document.frm.fullname.value;
    var emailaddress = document.frm.emailaddress.value;
    var mobilenumber = document.frm.mobilenumber.value;
    var password = document.frm.password.value;
    var age = document.frm.age.value;
    var date = document.frm.date.value;
    var gender = document.frm.gender.value;

    var checkboxes = document.getElementsByName("skills[]");
    var skills = [];

    for(let i = 0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            skills.push(checkboxes[i].value)
        }
    }

    var country = document.frm.country.value;
    var description = document.frm.description.value;
    
    // declare the error variables for required fields validation
    var fullnameErr = emailaddressErr = mobilenumberErr = passwordErr = ageErr = dateErr = genderErr = countryErr = descriptionErr = true;

    // checking all the required fields individually
    //---------------------------------------------------

    // fullname validation
    if(fullname == "") {
        printError("fullnameErr", "please enter your fullname");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\.\s])[a-zA-Z\s\.]{4,8}$/;
        if(regex.test(fullname) === false) {
            printError("fullnameErr", "your input is invalid, please try again");
        } else {
            printError("fullnameErr", "");
            fullnameErr = false;
        }
    }

    // emailaddress validation
    if(emailaddress == "") {
        printError("emailaddressErr", "please enter your emailaddress");
    } else {
        var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if(regex.test(emailaddress) === false) {
            printError("emailaddressErr", "your input is invalid, please try again");
        } else {
            printError("emailaddressErr", "");
            emailaddressErr = false;
        }
    }

    // mobilenumber validation
    if(mobilenumber == "") {
        printError("mobilenumberErr", "please enter your mobilenumber");
    } else {
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(regex.test(mobilenumber) === false) {
            printError("mobilenumberErr", "your input is invalid, please try again");
        } else {
            printError("mobilenumberErr", "");
            mobilenumberErr = false;
        }
    }

    // password validation
    if(password == "") {
        printError("passwordErr", "please enter your password");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/im;
        if(regex.test(password) === false) {
            printError("passwordErr", "your input is invalid, please try again");
        } else {
            printError("passwordErr", "");
            passwordErr = false;
        }
    }

    // age validation
    if(age == "") {
        printError("ageErr", "please enter valid age");
    } else {
        printError("ageErr", "");
        ageErr = false;
    }

    // date validation
    if(date == "") {
        printError("dateErr", "please select date");
    } else {
        printError("dateErr", "");
        dateErr = false;
    }

    // gender validation
    if(gender == "") {
        printError("genderErr", "please select gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }

    // country validation
    if(country == "") {
        printError("countryErr", "please select country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

    // description validation
    if(description == "") {
        printError("descriptionErr", "please enter your description");
    } else {
        var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\.\s])[a-zA-Z\s\.]{10,30}$/;
        if(regex.test(description) === false) {
            printError("descriptionErr", "your input is invalid, please try again");
        } else {
            printError("descriptionErr", "");
            descriptionErr = false;
        }
    }

    //---------------------------------------------------

    // checking all the error variables are true or not
    // if any of the error variable(s) is true
    // then you have to stop its exection and says the error messages
    if((fullnameErr || emailaddressErr || mobilenumberErr || passwordErr || ageErr || dateErr || genderErr || countryErr || descriptionErr) === true) {
        return false;
    } else {
        var dataPreview = `
            the data that you have entered., \n
            fullname: ${fullname} \n 
            emailaddress: ${emailaddress} \n 
            mobilenumber: ${mobilenumber} \n 
            password: ${password} \n 
            age: ${age} \n 
            date: ${date} \n 
            gender: ${gender} \n 
            country: ${country} \n 
            description: ${description} \n 
        `;

        if(skills.length) {
            dataPreview += `
                skills: ${skills.join(", ")} \n 
            `
        }
        alert(dataPreview);
        // return true;
    }
}