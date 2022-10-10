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

}