// this array is just to hold some data types for testing output
let values = ['Dog', true, 23]

// here I define my Converter class
class Converter {
  //constructor is empty because I'm passing values directly to class methods
  constructor() {
  }
  //structure is the same for each method
  //convert method takes an input when called, can be any datatype
  convertToString(input) {
    console.log('----------- Convert To String -----------');
    //prints value and type before conversion
    console.log('value before String conversion: ' + input);
    console.log('data type before String conversion: ' + (typeof(input)));
    //converts that input to the appropriate type
    input = String(input);
    //prints value and type after conversion
    console.log('value after String conversion: ' + input);
    console.log('data type after String conversion: ' + (typeof(input)));
    //returns input so it can be used outside of the class
    return input;
  }

  convertToBoolean(input) {
    console.log('----------- Convert To Boolean -----------');
    console.log('value before Boolean conversion: ' + input);
    console.log('data type before Boolean conversion: ' + (typeof(input)));
    input = Boolean(input);
    console.log('value after Boolean conversion: ' + input);
    console.log('data type after Boolean conversion: ' + (typeof(input)));
    return input;
  }

  convertToNumber(input) {
    console.log('----------- Convert To Number -----------');
    console.log('value before Number conversion: ' + input);
    console.log('data type before Number conversion: ' + (typeof(input)));
    input = Number(input);
    console.log('value after Number conversion: ' + input);
    console.log('data type after Number conversion: ' + (typeof(input)));
    return input;
  }
}

// create an instance of the Converter class
let conversion = new Converter();

// here I use this for loop to test each of the methods using each datatype
// prints the results to the console.
for (let i = 0; i<values.length; i++) {
  conversion.convertToString(values[i]);
  conversion.convertToBoolean(values[i]);
  conversion.convertToNumber(values[i]);
}

// here I show that reassignment is working
let testValue = 1;
console.log('typeof test value:' + typeof(testValue));
testValue = conversion.convertToBoolean(testValue);
console.log('typeof after reassignment:' + typeof(testValue));