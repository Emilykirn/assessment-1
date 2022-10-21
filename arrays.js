//////////////////PROBLEM 1////////////////////
/* Create a copy of the faveColors array called 'colorCopy' using the slice method. */

// I will need to make a new variable to tie to the first variable
// I will need to use the splice function appropriately to get the correct return when logging the new variable

const faveColors = ['red', 'green', 'black']




//CODE HERE


let colorCopy = faveColors.splice(0,3)
 
console.log(colorCopy)


//////////////////PROBLEM 2////////////////////
/* Add a fourth color to the end of the 'colorCopy' array using the push method. */

// I will use the push method to add the new color to colorCopy. I will make sure it is added as a string


//CODE HERE

colorCopy.push('white')

console.log(colorCopy)

//////////////////PROBLEM 3////////////////////
/*
  Using an array method, create a new array called 'middleNums' from the 
  numbers array that will capture only the middle numbers (2, 3, 4).
*/

// I will create a second array using the slice function. 

const numbers = [1, 2, 3, 4, 5]

//CODE HERE

let middleNums = numbers.slice(1, 4)

console.log(middleNums)

//////////////////PROBLEM 4////////////////////
/* 
  Create an empty array called 'answers'.
  Using a for loop, loop over the array called 'bigOrSmallArray', and check to see if the 
  number in the array is GREATER than 100. 
  If it is, push 'big' as a string to the answers array. 
  If the number is LESS than or EQUAL to 100, push 'small' as a string 
  to the answers array. 
*/

//create array 1 and give it name of answers
// create a for loop with an array called bigOrSmall
// 

const bigOrSmallArray = [1, 99, 42, 69, 102, -10, 159, 352]

// CODE HERE

let answers = []

for (let i = 0; i < bigOrSmallArray.length; i++){
  if ( bigOrSmallArray[i] > 100){
    console.log('big')
  } else if (bigOrSmallArray[i] < 100){
   answers = console.log('small')
  }
}