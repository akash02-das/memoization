// Memoization In JS (Single parameter)

// Expensive computation/Heavy API request
const add = (num) => {
  return 10 + num;
};

// Higher Order Function
const memo = (func) => {
  let cache = {}; // closure

  return function (val) {
    console.log('Cache: ', cache);

    if (cache[val]) {
      console.log('Result from cache');

      return cache[val];
    } else {
      console.log('Calculating result');

      const result = func(val);
      cache[val] = result;

      return result;
    }
  };
};

const calculate = memo(add);

console.log(`Result: ${calculate(10)}`);
console.log('-------------------------');
console.log(`Result: ${calculate(10)}`);
