myArray = [1, 2, 3];
// # problem 1
//instructions: given an array with the values [1, 2, 3], use a for loop to log out each of the values sequentially. This is for the purpose of showing how iteration works without diving into methods.
for (i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}
// # problem 2
//instructions: given an array with the values of [1, 2, 3], use the .forEach method to log out each of the values sequentially
myArray.array.forEach(element => {
  console.log(element);
});
// # problem 3
//instructions: given an array with the values [1, 2, 3], create a new array that stores all of the values +1. This requires the use of the .map method. After you have created the new array, log out the values of the new array using .forEach
newArray = myArray.map(element => element + 1);
newArray.array.forEach(element => {
  console.log(element);
});
//# problem 4
//instructions: given an array with the values [1, 2, 3], use the .reduce method to add all the values together. After you have the new value stored, log it out.
result = myArray.reduce((total, element) => total + element);
console.log(result);
