//#######################//
//     WCode(Wraith)     //
//      GramySe.pl       //
//#######################//

//Date function
function myRightsDate() {
    var d = new Date(); //Assign a variable value to describe the date and time
    document.querySelector(".allrightsdate").innerHTML = "&copy; 2017 - "+d.getFullYear();}

//Time function
const hourEl = document.querySelector(".hour")
setInterval(() => hourEl.innerText = new Date().toLocaleTimeString(), 1000) //Repeat a function every 1000 milliseconds(1 second)

// Function that determines the scope of the calendar
function year_range(start, end) {
    var years = "";
    for (var year = start; year <= end; year++) {
        years += "<option value='" + year + "'>" + year + "</option>";}
    return years;}

// I create two arrays with months and days
var months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Pażdziernik", "Listopad", "Grudzień"]; 
var days = ["Pon", "Wt", "Śr", "Czw", "Pt", "Sob", "Nied"]; 


var today = new Date();
var currentMonth = today.getMonth(); // Get the month from "today" and assign it to the variable "currentMonth"
var selectMonth = document.querySelector('#month'); // Download and assign value of class "month" to variable "selectMonth"
var currentYear = today.getFullYear(); 
var selectYear = document.querySelector('#year');

// Create a variable and assigns a function to it which itself assigns the date from which the calendar is to be
var newyear = year_range(1970, currentYear + 100); // Create a veriable "newyear" and assigns it the value of the function "year-range" and I determine that the calendar will be from 1970 to the present time + 100
document.querySelector('#year').innerHTML = newyear;

var calendar = document.querySelector('#calendar'); // Download and assign value of class "#calendar" to variable "calendar"

// A loop that displays the days of the week in the table
var namedays = "<tr>";
for (day in days) {
    namedays += "<th data-day='" + days[day] + "'>" + days[day] + "</th>";
}
namedays += "</tr>";
document.querySelector('#days-month').innerHTML = namedays; 

function showCalendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();
    firstDay = firstDay ? firstDay - 1 : 6 // Create a variable "firstday" and assign it a value, but yield "-1" to ".getDate ()" to show it correctly
    var viewdays = document.querySelector('#days-calendar'); // Create a variable "viewdays" and get the id "# days-calendar" that assigns it
    viewdays.innerHTML = "";

    selectYear.value = year; // Get the value of the variable "selectYear" and assign it to "year"
    selectMonth.value = month; // Get the value of the variable "selectMonth" and assign it to "month"

    document.querySelector('#YearAndMonth').innerHTML = months[month] + " " + year; // Download id "#YearAndMonth" and send it the variables "months[month] + " " + year"

    //Generating all cells with days
    var date = 1;
    let lastMonthDaysCount = new Date(new Date(year, month)-864e5).getDate() // 1000*60*60*24 or 86400000 or 864e5 //864e5 - Jest to poprawny numer JavaScript, który reprezentuje liczbę milisekund w ciągu 24-godzinnego dnia.
    for (var i = 0; i < 6; i++) {
        var r = document.createElement("tr"); // Create a new element "tr"
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                let td = document.createElement("td"); 
                td.innerText = lastMonthDaysCount-firstDay+j;
                td.className = "data-select previou"; // Add "data-select previou" class
                r.appendChild(td); // "r" is returned to "td"
              } else if (date > daysInMonth(month, year)) {
                if (j === 0) {
                    break;
                }
                let td = document.createElement("td"); // Create a new element "td"
                td.innerText = date-daysInMonth(month, year);
                td.className = "data-select next"; 
                r.appendChild(td); 
                date++;
            } else {
                var c = document.createElement("td");
                c.setAttribute("data-day", date); // Add attribute with day to "c"
                c.setAttribute("data-month-name", months[month]); // Add attribute to "c"
                c.className = "data-select"; // Add "data-select" class
                c.innerHTML = "<div>" + date + "</div>"; // Send value to "c"
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    c.className = "data-select selected";} // Change the class from "data-select" to "data-select seletced" if it is today
                r.appendChild(c);// "c" is returned to "r"
                date++;
            }
        }
        viewdays.appendChild(r); // "viewdays" is returned to "r"
        HoliDays();
    }
}

//Load all function

myRightsDate();
showCalendar(currentMonth, currentYear);

function next() {
    currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);}

function previous() {
    currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1; //jezeli "(currentMonth === 0)" jest prawdzina ma wartosc 11 lub "currentMonth - 1"
    showCalendar(currentMonth, currentYear);} 

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);}

function daysInMonth(iMonth, iYear) { //Następnie uzyskaj liczbę dni w tym miesiącu. Możemy to również osiągnąć za pomocą funkcji daty
    return 32 - new Date(iYear, iMonth, 32).getDate();}
