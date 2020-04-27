// NUMBER 1: do...while loop that console.log the numbers from 1 to 1000.
let number = 0;
do {
    number+= 1;
    console.log(number);
} while (number != 1000)




// NUMBER 2 & 3: Create an object called person with the following data.
const person = {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1926",
    gender: "female"
  }
  
  const loopOverObject = (object) => {
    // Use a for...in loop and if statement to console.log the value associated with the key birthDate.
      for (birthDate in object)
      {
        // If the birth year is an odd number display birthYear.
        if (person.birthDate.charAt(10) % 2 === 1){
          return console.log(person.birthDate);
        }
        else {
            // If the birth year is not an odd number it will display this message stating the birth year is even.
          return console.log("The birthDate year is even.");
        }
      }
  }
  loopOverObject(person);




  // NUMBER 4: Create an arrayOfPersons that contains multiple objects. 
  const arrayOfPersons =[ {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1926",
    gender: "female"
  }, 
  {
    firstName: "Joe",
    lastName: "Smith",
    birthDate: "Apr 9, 1958",
    gender: "male"
  }, 
  {
    firstName: "Sam",
    lastName: "Digg",
    birthDate: "Sep 13, 2000",
    gender: "female"
   },
   {
    firstName: "Carl",
    lastName: "Bine",
    birthDate: "Dec 21, 1765",
    gender: "male"
   }
]

// Use .map() to map over the arrayOfPersons and console.log() their information.
const printArray = (object) => {
    let fullInfo = [`${object.firstName} ${object.lastName} - ${object.birthDate} - ${object.gender}`].join(" ");
    return fullInfo;
}
arrayOfPersons.map(printArray);




  // NUMBER 6: Use .filter() to filter the persons array and console.log only males in the array.
const malesOnly = (arrayOfPersons) => {
    if (arrayOfPersons.gender === "male") {
        let maleData = [`${arrayOfPersons.firstName} ${arrayOfPersons.lastName} - ${arrayOfPersons.birthDate} - ${arrayOfPersons.gender}`].join(" ");
        console.log(maleData);
    }
}
 arrayOfPersons.filter(malesOnly);



  
// NUMBER 7: Use .filter to filter the persons array and console.log only people that were born before Jan 1, 1990.
const bornBeforeDate = (arrayOfPersons) => {
  let cutOffDate = "Jan 1, 1990";
   if (arrayOfPersons.birthDate < cutOffDate)
  {
    let lowDates = [`${arrayOfPersons.firstName} ${arrayOfPersons.lastName} - ${arrayOfPersons.birthDate} - ${arrayOfPersons.gender}`].join(" ");
    console.log(lowDates);
  }
}

arrayOfPersons.filter(bornBeforeDate);