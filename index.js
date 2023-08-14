//Question1: Given an array of numbers, chain multiple array methods together (e.g., filter(), map(), reduce()) to calculate the product of positive even numbers.
//Answer:
const array=[12,45,26,-23,-78,13,89,46,24]
function product_of_even_positives(){
let pos_even_num=array.filter((val)=>val>0&val%2==0)
console.log(pos_even_num)

let res=even.reduce((acc,currVal)=>acc*currVal);
  return res

}
//output:
product_of_even_positives()
/*(4) [12, 26, 46, 24]
3444488*/
//Question2: Given an array of objects, create a deep copy of the array using the JSON.parse(JSON.stringify()) method.
//Answer:
let my_data=[
    {name:'Sravan',age:24},
      {name:'Sravan',age:24},
      {name:'Sravan',age:24},
      {name:'Sravan',age:24},
      {name:'Sravan',age:24}
] 
function data(){
    let res=JSON.parse(JSON.stringify(my_data))
    return res
    }
//output:
data()
/*(5) [{…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'Sravan', age: 24}
1
: 
{name: 'Sravan', age: 24}
2
: 
{name: 'Sravan', age: 24}
3
: 
{name: 'Sravan', age: 24}
4
: 
{name: 'Sravan', age: 24}
length
: 
5*/
//Question3: Given an array of strings, sort them based on their length using the sort() method.
//Answer:
let fruits=['mango','apple','pear','pineapple','jackfruit']
function sorting(){
let res=fruits.sort((a,b)=>a.length-b.length)
return res;

}
//output:
sorting()
/*(5) ['pear', 'mango', 'apple', 'pineapple', 'jackfruit']
*/
//Question4: Given an array of numbers, use the reduce() method to partition the array into two arrays: one containing positive numbers and the other containing negative numbers.
//Answer:
let numbers=[10,29,-12,34,-45,89]
function partioned_array(){
let Required_array=numbers.reduce((result,num)=>{
if(num>=0){
result.positive.push(num)
}else{
result.negitive.push(num)

}
    return result
},{positive:[],negitive:[]})
}
//output:
partioned_array()
console.log(Required_array.positive)
    console.log(Required_array.negitive)

/*VM494:14 (4) [10, 29, 34, 89]
VM494:15 (2) [-12, -45]*/
//Question5: Given an array of strings, use the map() method to convert each string to uppercase.
//Answer:

let fruits=['mango','apple','pear','pineapple','jackfruit']
function uppercasetrasform(){
    let res=fruits.map(str=>str.toUpperCase())
   return res
}

uppercasetrasform()
//output
/*(5) ['MANGO', 'APPLE', 'PEAR', 'PINEAPPLE', 'JACKFRUIT']*/
//question Question: Given an array of objects representing students with properties name, age, and grade, use the map() method to create an array of objects with only the name and grade properties.
//Answer:
let students_data=[
    {name:'srujana',age:20,grade:'A'},
     {name:'santhosh',age:23,grade:'C'},
     {name:'hemanth',age:21,grade:'B'},
     {name:'gurmeet',age:22,grade:'D'},
     {name:'sailaja',age:22,grade:'A'},
     {name:'arul',age:23,grade:'A'}
    
]
function students_age_grade(){
let res=students_data.map(person=>({name:person.name,grade:person.grade}))
console.log(res)
}
//output:
students_age_grade()
/*(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'srujana', grade: 'A'}
1
: 
{name: 'santhosh', grade: 'C'}
2
: 
{name: 'hemanth', grade: 'B'}
3
: 
{name: 'gurmeet', grade: 'D'}
4
: 
{name: 'sailaja', grade: 'A'}
5
: 
{name: 'arul', grade: 'A'}
length
: 
6
[[Prototype]]
: 
Array(0)*/
//Question6: Given an array of numbers, use array destructuring and the Math.max() function to find the maximum value in the array.
//Answer:
let numbers=[10,29,-12,34,-45,89]
function find_max_num(){
let max_num=Math.max(...numbers)
console.log(`maximum num is: ${max_num}`)
}
//output:
find_max_num()
// maximum num is: 89
//Question7: Given three arrays of numbers, use the concat() method to merge them into a single sorted array.
//Answer:
function combined_array(){
    let my_array_one=[10,20,12,38,48,90]
    let my_array_two=[30,50,15,80]
    let my_array_three=[60,45,17,82]
    let res=my_array_one.concat(my_array_two,my_array_three).sort()
    return res
    }
 //output:
combined_array()
    //(14) [10, 12, 15, 17, 20, 30, 38, 45, 48, 50, 60, 80, 82, 90]
//question8:Give an array of strings, use the reduce() method to create a new array that contains the lengths of each string. 
//Answer:
const names=['suhas','srinidhi','raghu','raveena','munna']
function strlength(){
let nameslength=names.reduce((res,str)=>{
 res.push(str.length)
    return res
},[])

}
//output
strlength()
console.log(nameslength)
/*(5) [5, 8, 5, 7, 5]*/
//Question9: Given an array of numbers, use the reduce() method to calculate the average value of the array.
//Answer:
const My_array=[10,30,40,50,70]
function find_average(){
let sum=array.reduce((acc,currVal)=>acc+currVal)
 let average=sum/array.length
  console.log(average)
}
//output:
find_average()
//VM3165:5 17.11111111111111
//Question10: Given an array of objects representing products with properties name and price, use the sort() method to arrange the products by price in descending order.
//answer:
const products=[
    {name:'biscuts',price:10},
     {name:'pizza',price:100},
     {name:'ice_cream',price:50},
     {name:'dairy_milk',price:200},
     {name:'apple',price:150},
     {name:'nuts',price:180}
    
]
function products_descending_price(){
let res=products.sort((product1,product2)=>product2.price-product1.price)
 return res
}
//output:
products_descending_price()
/*(6) [{…}, {…}, {…}, {…}, {…}, {…}]
0
: 
{name: 'dairy_milk', price: 200}
1
: 
{name: 'nuts', price: 180}
2
: 
{name: 'apple', price: 150}
3
: 
{name: 'pizza', price: 100}
4
: 
{name: 'ice_cream', price: 50}
5
: 
{name: 'biscuts', price: 10}
length
: 
6
[[Prototype]]
: 
Array(0)*/
//Question11: Given an array of strings, use the sort() method to sort the strings based on their length. If lengths are equal, maintain their original order.
//answer:
const names=['suhas','srinidhi','raghu','raveena','munnabhai','pavan']
function sorting(){
let res=names.sort((nameone,nametwo)=>{
    if(nameone===nametwo){
     return 0;
}else{
return nameone.length-nametwo.length
}
})
}
//output:
sorting()
console.log(names)
//VM4523:10 (6) ['suhas', 'raghu', 'pavan', 'raveena', 'srinidhi', 'munnabhai']
//Q12.Given a matrix (2D array) of numbers, use the map() method to create a new matrix where each value is squared
//answer:
const array=[
    [10,20,15],
    [40,60,25],
    [80,90,55]
    ]
    function squared_matrix(){
    let result=array.map(row=>row.map(val=>val**2))
    return result
    }
    
  //output:
  squared_matrix()
   /* (3) [Array(3), Array(3), Array(3)]
    0
    : 
    (3) [100, 400, 225]
    1
    : 
    (3) [1600, 3600, 625]
    2
    : 
    (3) [6400, 8100, 3025]
    length
    : 
    3*/
    //13.Given two arrays of numbers, use the filter() method to create a new array containing only the common elements between the arrays.
    let arrayone=[10,12,6,9,15]
    let my_array=[13,10,6,9,37]
    function common_elements(){
    let res=arrayone.filter(val=>my_array.includes(val))
    return res
    }
    //output:
    common_elements()
    //(3) [10, 6, 9]
    