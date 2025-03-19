function largestNumber(a: number, b: number): number | null {
  if (a > b) return a;
  if (b > a) return b;
  return null;
}

const biggest = largestNumber(5, 8);
console.log(biggest);

const nums: [number, number] = [5, 8];
console.log(largestNumber(...nums));

function add(...values: number[]): number {
  let total = 0;
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    total += values[i];
  }
  return total;
}
console.log(add(2, 3, 4, 5, 6, 7));

// example with default parameter
function divide(dividend: number, divisor:number = 1): number {
  const quo = dividend / divisor;
  return quo;
}

const quotient = divide(42, 2);
console.log(`calling the divide function with '2' paramters: ${quotient}`);

const quotient2 = divide(42);
console.log(`calling divide function with '1' parameter: ${quotient2}`);

// function expression using arrow syntax (preferred)
const remainder2 = (dividend: number, divisor: number): number => {
  const quotient = Math.floor(dividend / divisor);
  return dividend - quotient;
};

console.log(remainder2(13, 4));

// function expression using arrow syntax and one parameter
const sqr = (num: number): number => num * num;
console.log(`square of 4 = ${sqr(4)}`);

//answer 
function multipy(a: number, b:number = 1): number {
  const pro = a*b;
  return pro;
}

const product = multipy(42);
console.log(`calling the multipy function with '1' paramters: ${product}`);

// function expression using arrow syntax and one parameter
const squareRoot = (num: number): number => Math.sqrt(num) ;
console.log(`squareRoot of 4 = ${squareRoot(4)}`);