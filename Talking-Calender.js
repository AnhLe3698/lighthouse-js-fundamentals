const talkingCalendar = function(date) {
  // Your code here
  let year = "";
  let month = "";
  let day = "";
  let returnString = "";
  let monthTable = ["January", "February", "March",
                    "April", "May", "June", "July",
                    "August", "September", "October",
                    "November", "December"
                    ];
  for (let i = 0; i < date.length; i ++) {
    if (-1 < i && i < 4) {
      year += date[i];
    } else if (4 < i && i < 7) {
      month += date[i];
    } else if (i > 7) {
      day += date[i];
    }
  }
  //by deviding by 1 we convert a string back to an integer
  if (day === '11' || day === '12' || day === "13"){
    returnString = monthTable[(month / 1) - 1] + " " + (day / 1) + "th, " + year;
  } else if((day / 1) % 10 === 1) {
    returnString = monthTable[(month / 1) - 1] + " " + (day / 1)  + "st, " + year; 
  } else if ((day / 1) % 10 === 2) {
    returnString = monthTable[(month / 1) - 1] + " " + (day / 1) + "nd, " + year;
  } else if ((day / 1) % 10 === 3) {
    returnString = monthTable[(month / 1) - 1] + " " + (day / 1) + "rd, " + year;
  } else {
    returnString = monthTable[(month / 1) - 1] + " " + (day / 1) + "th, " + year;
  }
  return returnString;
};

console.log(talkingCalendar("2017/12/03"));
console.log(talkingCalendar("2007/11/13"));
console.log(talkingCalendar("1987/08/23"));

/*
Expected output
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/