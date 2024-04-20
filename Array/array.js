// Define an array of numbers
let numbers = [1, 2, 3, 4, 5];

// Accessing elements in the array
console.log(numbers[0]); // Output: 1
console.log(numbers[2]); // Output: 3

// Modifying elements in the array
numbers[1] = 10;
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// Adding elements to the array
numbers.push(6);
console.log(numbers); // Output: [1, 10, 3, 4, 5, 6]

// Removing elements from the array
numbers.pop();
console.log(numbers); // Output: [1, 10, 3, 4, 5]

// Iterating through the array
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
