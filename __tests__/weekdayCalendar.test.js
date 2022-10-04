import weekdayCalendar from './../src/js/weekdayCalendar.js';

describe('weekdayCalendar', () => {
  let weekDayCalc;

  beforeEach(() =>{
   weekDayCalc = new weekdayCalendar(1970,2,25);
  });

  test('should correctly create a weekdayCalendar object with year,month, and day', () => {
    expect(weekDayCalc.year).toEqual(1970);
    expect(weekDayCalc.month).toEqual(2);
    expect(weekDayCalc.day).toEqual(25);
  });
});


