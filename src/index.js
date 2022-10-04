import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import weekdayCalendar from './js/weekdayCalendar.js';

function handleWeekDayForm() {
  event.preventDefault();
  document.querySelector('#response').innerText = null;
  const month = parseInt(document.querySelector('#month').value);
  const day = parseInt(document.querySelector('#day').value);
  const year= parseInt(document.querySelector('#year').value);
  const weekDayCalc = new weekdayCalendar(year,month,day);
  const response = weekDayCalc.getday();
  const pTag = document.createElement("p");
  pTag.append(`The week for the date is ${response}.`);
  document.querySelector('#response').append(pTag);

}

window.addEventListener("load", function() {
  document.querySelector("#weekDay-calculator-form").addEventListener("submit", handleWeekDayForm);

});
