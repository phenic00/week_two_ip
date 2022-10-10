function akanNames() {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    // WE DECLARE AND INITIALISE AN ARRAY WITH THE DAYS OF THE WEEK STARTING FROM SUNDAY TO MONDAY

    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

    //ARRAY OF FEMALE AKAN NAMES

    var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];

    //ARRAY OF MALE AKAN NAMES
    // user prompts

    var dateInput = prompt("Enter date of birth(YYYY-MM-DD):");//prompts user input

    var birthDates = new Date(dateInput);//uses variable dataIput from user prompt

    var dateExact = birthDates.getDay();

    var birthMonth = birthDates.getMonth();//PICKS the month

    var birthYear = birthDates.getFullYear();// picks the year

    //using the dates to Access Name Lists

    var genderFemale = femaleNames[dateExact];

    var genderMale = maleNames[dateExact];//USES date of birth as index to access male Names

    // CAPTURES WRONG DATE INPUTES

    if (dateExact >= 0 && dateExact <= 6 && birthMonth >= 0 && birthMonth <= 11 && birthYear >= 1000) {
        //data manipulation variables

        var sex = prompt("Enter Gender(MALE/FEMALE):").toUpperCase();// takes user input and converts to uper Case
        if (sex === "M" || sex === "F" || sex === "MALE" || sex === "FEMALE") {
            if (sex === "MALE") {

                document.getElementById("myFeedback").innerHTML = ("Your Akan name is " + genderMale);//alert for male Gender

            }

            else {

                document.getElementById("myFeedback").innerHTML = ("Your Akan name is " + genderFemale);//alert for female Gender

            }
        }
        else {
            alert("Invalid Gender use F/M");
        }

    }

    else {

        alert("Wrong Date Format...use this Format YYYY-MM-DD...e.g 2022-10-10")

    }



}