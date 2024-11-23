

let inputBtn = document.querySelector(".age-dob-input");
let calculateBtn = document.querySelector(".calculate-btn");
let ageresult = document.querySelector(".age-result");

calculateBtn.addEventListener("click", () => {
    if(inputBtn.value == "") {
        alert("Please enter your date of birth");
    } else {
   
        let dob = new Date(inputBtn.value);
        console.log(dob);
        
        let dob_year = dob.getFullYear();
        let dob_month = dob.getMonth(); 
        let dob_day = dob.getDate();
        console.log(dob_year, dob_month, dob_day);

        // Get the current date
        let now = new Date();
        console.log(now);
        
        let now_year = now.getFullYear();
        let now_month = now.getMonth();
        let now_day = now.getDate();
        console.log(now_year, now_month, now_day);

        
        let age_years = now_year - dob_year;
        
       
        if (now_month < dob_month || (now_month === dob_month && now_day < dob_day)) {
            age_years--;  
        }

  
        let age_months;
        if (now_month >= dob_month) {
            age_months = now_month - dob_month;
        } else {
            age_months = 12 + now_month - dob_month;
        }

        if (now_day < dob_day) {
            age_months--; 
        }

        console.log("Age is ", age_years, "years and", age_months, "months");

        ageresult.innerHTML = `Your age is ${age_years} years and ${age_months} months`;
    }
});