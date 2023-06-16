// Code your solution here

// returns the matching list of drivers. 
// The function should be case insensitive.
// Create a new array from arrayOfDriverNames that only has
// the names of drivers that match the argument string

const arrayOfDriverNames = ['Matt', 'CJ', 'Roscoe'] ;
function findMatching(arrayOfDriverNames, string) {
    const newNames = arrayOfDriverNames.filter( function(element) {
        if (element.toUpperCase() === string.toUpperCase()) {
            return true
        }
        else {
            return false;
        }
    })
    return newNames ;
}


const driverRoscoe = findMatching(arrayOfDriverNames, 'Roscoe');


// fuzzyMatch - This function takes an array of drivers' names 
// and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(arrayOfDriverNames, string) {
    const newNames = arrayOfDriverNames.filter( function(element) {
        if (element.slice(0, string.length) === string) {
            return true
        }
        else {
            return false;
        }
    })
    return newNames ;
}

// matchName - This function takes an array of driver objects 
// and a string as arguments. 
// Each driver object has two properties: name and hometown. 
// The function should return each element 
// whose name property matches the provided string argument.

const arrayOfDriverObjects = [] ;
function matchName(arrayOfDriverObjects, string) {
    const newDriver = arrayOfDriverObjects.filter( function(element) {
        if (element.name === string) {
            return true
        }
        else {
            return false;
        }
    })
    return newDriver ;
}



// practice code

//basic looping
const arrayOfNumbers = [1, 2, 3, 4, 5] ;

for(let i =0; i < arrayOfNumbers.length; i++) {
   // console.log(arrayOfNumbers[i]);
}

//next layer of abstraction #1
for(const element of arrayOfNumbers) {
  //  console.log(element) ;
}

for(const element of arrayOfNumbers) ;

// next layer of abstraction #2
arrayOfNumbers.forEach(function(element) {
  //  console.log(element) ;
}
)

// next layer of abstraction #3

function namedFunction(element) {
   // console.log(element);
}

arrayOfNumbers.forEach(namedFunction) ;

//filter

const moreNumbers = [6, 7, 8, 9, 10] ;

//filter creates a new array
// the callback function for filter will check a condition
//if that condition is true, then the callback function will return true
//if the condition is false, then it will return false
//if the callback function returns true for an element, 
//then filter will add the element to the new array
// if the callback function returns false for an element, 
//then filter will not add the element to the new array

const variable = moreNumbers.filter(function(element) {
    // console.log(element)
    if (element > 7) {
        return true ;
    }
    else {
        return false;
    }}
) ;

console.log(variable) ; 

const dogs = [
    {age : 5 ,
    name : 'Roscoe'} , 
    {age: 3 ,
     name : 'Rocky'
    }, 
    {age: 9 ,
     name: 'CrayMoore' }
] ;

console.log(dogs) ;

//create a new array of objects of dogs age 5 and older using filter

const newDogs = dogs.filter(function(element) {
    if (element.age >= 5) {
        return true ;
    }
        else {
            return false ;
        }
    }
)
console.log(newDogs);







