// Function is called, the return value will end up in x

function myFunction(a, b) {
// Function returns the product of a and b
  return a * b;
}

let x=myFunction(3,4);
console.log(x);

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
  }
  
  let value = toCelsius(77);

  console.log(value);