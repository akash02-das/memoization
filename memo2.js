// Memoization In JS (Multiple parameter)

// Expensive computation/Heavy API request
const add = (...num) => {
  // Rest operator(...num) [10, 20, 30, 40]
  return num.reduce((sum, currentValue) => sum + currentValue);
};

// Higher Order Function
const memo = (func) => {
  let cache = {}; // closure

  return function (...val) {
    console.log('Cache: ', cache);
    const key = JSON.stringify(val);

    if (cache[key]) {
      console.log('Result from cache');

      return cache[key];
    } else {
      console.log('Calculating result');

      const result = func(...val);
      cache[key] = result;

      return result;
    }
  };
};

const calculate = memo(add);

console.log(`Result: ${calculate(10, 20, 30, 40)}`);
console.log('-------------------------');
console.log(`Result: ${calculate(10, 20, 30, 40)}`);
