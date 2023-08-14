 // Q1.Given an array numbers, write a function that returns the sum of all the elements in the array.

 //Answer:

 let array_nums=[10,45,80,60,78]
 function sum(numbers){
 let res=numbers.reduce((acc,currVal)=>acc+currVal)
 return res;
 
 }
 
 //o/p:
 sum(array_nums) 
 //o/p: 273 
 
 //2.Write a function that takes an array of strings and returns a new array with all the strings capitalized.

// answer:

let a=['apple','grapes','berry']
function tocapitalize(array){
let res=array.map(str=>str.toUpperCase())
                  return res
}

//o/p:
tocapitalize(a)
//o/p:(3)['APPLE', 'GRAPES', 'BERRY']


//3.Create a function that takes an array of numbers and returns a new array containing only the even numbers.

//Answer:
let numbs=[12,34,67,89,90]
function findevennums(numbers){
  let res=numbers.filter((value)=>value%2==0)
    return res
}
//o/p:
findevennums(numbs)
//(3)[12, 34, 90]

//4.Write a function that reverses an array without using the built-in reverse() method.

//answer:

let array=[10,41,20,63,89,45]
let rev_array=[]
function reversearray(myarray){
for(i=array.length-1;i>=0;i--){
 rev_array.push(myarray[i])
}return rev_array
}
//O/P:
let result=reversearray(array)
console.log(result)
 //(6)[45, 89, 63, 20, 41, 10]

//5.Write a function that finds the average of all the numbers in an array.
//Answer:

let array=[10,30,40,20,80]
function tofindaverage(My_array){
let sum=My_array.reduce((acc,currVal)=>acc+currVal)
    return sum
}
//o/p:

let sumofnums=tofindaverage(array)
let average=sumofnums/array.length
console.log(average)
//36
//6.Create a function that takes an array of strings and returns a new array with only the strings that have a length greater than a specified value.
//answer:

let my_array=['sam','pushpa','ravikanth','john']
function Stringlength(array,minvalue){
let res=my_array.filter((str)=>str.length>minvalue)
    return res;
}
//o/p:
let minvalue=4;
Stringlength(my_array,minvalue)
//(2)['pushpa', 'ravikanth']
//7.Implement a function that takes an array of numbers and returns a new array with each number squared
//answer:

let my_Array=[4,6,7,12,15]
function square(array){
let res=array.map((ep)=>ep**2)
    return res;
}

//o/p:

let final_result=square(my_Array)
console.log(final_result)
// (5)[16, 36, 49, 144, 225]



 //8Given an array of numbers, use the map() method to transform each number into its square.
 //answer:
 let array=[10,12,6,9,15]
 function maping(){
 let res=array.map((ep)=>ep**2)
 return res;
 }

 //o/P:
 maping()
 //(5)[100, 144, 36, 81, 225]
 //9.Given an array of strings, use the filter() method to create a new array containing only strings with a length greater than 5 characters.
 
 //answer:

 let names=['sara','john','alekhya','anuradha','anjali']
 function user_names(){
 let res=names.filter((str)=>str.length>5)
 return res
 }

 //o/p:
 user_names() 
 //(3)['alekhya', 'anuradha', 'anjali']

 //10Given an array of objects representing students, use the some() method to check if at least one student has passed the exam (property passed is true).

 //answer:

 let student_marks=[
   {name:'sumanth',marks:78,passed:'true'},
   {name:'lavanya',marks:28,passed:'false'},
   {name:'hemanth',marks:23,passed:'false'},
   {name:'sunaina',marks:88,passed:'true'}
]
function student_info(){
let res=student_marks.some((val)=>val.passed)
return res
}

//o/p:
student_info()  //true
