let numbers = [1, 2, 3, 4, 5];


numbers[1] = 10;
console.log(numbers); 

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers); 

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
