
//Q1.Given an array of transactions, use the every() method to check if all transactions are of type "debit".
 
//Answer:

let array_transactions=[
    {name:'sagar',amount:1000,type:'debit'},
{name:'swarop',amount:10000,type:'credit'},
     {name:'rahul',amount:10000,type:'debit'},
    {name:'raj',amount:100000,type:'credit'}
]
function transactions(){
let res=array_transactions.every((val)=>val.credit)
return res
}

//o/p:

transactions() //false

//Q2.Given an array of numbers, use the reduce() method to calculate the sum of all positive numbers.

//Answer:

let nums=[23,28,-7,37,40,-67,47]
function pos_num(){
let res=nums.reduce((acc,currVal)=>{

if(currVal>0){
return acc+currVal;
}else
    return acc;

});
}

//o/p:
pos_num()
console.loe(res) // 175
//3. Given two arrays of numbers, use the concat() method to merge the arrays into a single array.

//answer:

function natural_numbers(){
    let num1=[10,25,50,78,90]
    let num2=[15,45,80,35,99]
    let result=num1.concat(num2)
    return result
    }

    //O/P:

    natural_numbers()
    //(10)[10, 25, 50, 78, 90, 15, 45, 80, 35, 99]

 //Q4. Given an array of words, use the reduce() method to concatenate the words into a sentence.
 
 //Answer:
 
 function sentenceform(){
    let words=['i','am','a','frontend','developer']
    let sentence=words.join(' ')
    return sentence;
    }

//O/P:

    sentenceform()
    'i am a frontend developer'
 
 //5.: Given an array of numbers, use the forEach() method to double each number in the array.

 //answer:
  
 let numbers = [1, 2, 3, 4, 5];
 function arrayprint(){
 numbers.forEach((number, index) =>{
     console.log(`Element at index ${index} is ${number}`);
 });
 }

//O/P; 

 arrayprint()
 /*Element at index 0 is 1
 Element at index 1 is 2
 Element at index 2 is 3
 Element at index 3 is 4
 Element at index 4 is 5*/
  //6.Given an array of strings, use the sort() method to sort the strings in alphabetical order.

 //Answer:

 let names=['sara','john','alekhya','anuradha','anjali']
 function sort_names(){
 let res=names.sort();
 return res
 }

 //O/P:

 sort_names()
// (5)['alekhya', 'anjali', 'anuradha', 'john', 'sara']

 //7.Question8: Given an array of objects representing books, use the sort() method to arrange the books by their publication year in ascending order
 //Answer:

 let books = [
 { title: "To Kill a Mockingbird", Author: "Harper Lee", Year: 1960 },
 { title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Year: 1925 },
 { title: "Harry Potter and the Sorcerer's Stone", Author: "J.K. Rowling", Year: 1997 },
 { title: "The Lord of the Rings: The Fellowship of the Ring", Author: "J.R.R. Tolkien", Year: 1932 }
];
function reading_books(){
let res = books.sort((a, b) => a.Year - b.Year);
   return res;
}

//O/P:

reading_books()
//(4) [{…}, {…}, {…}, {…}]
/*0
: 
{title: 'The Great Gatsby', Author: 'F. Scott Fitzgerald', Year: 1925}
1
: 
{title: 'The Lord of the Rings: The Fellowship of the Ring', Author: 'J.R.R. Tolkien', Year: 1932}
2
: 
{title: 'To Kill a Mockingbird', Author: 'Harper Lee', Year: 1960}
3
: 
{title: "Harry Potter and the Sorcerer's Stone", Author: 'J.K. Rowling', Year: 1997}
length
: 
4
[[Prototype]]
: 
Array(0)*/

//Q8. Given an array of products, use the filter() method to create a new array containing products with a price less than $50.

//Answer:

let arrayofproducts=[
    {name:'tshirt',price:20},
    {name:'shirt',price:70},
    {name:'blazer',price:120},
    {name:'sweat_shirt',price:40}
]
function new_array(){
let res=arrayofproducts.filter((products)=>products.price < 50 )
return res;
}

//Output:
new_array()
/*(2) [{…}, {…}]
0
: 
{name: 'tshirt', price: 20}
1
: 
{name: 'sweat_shirt', price: 40}*/
//Q9. Given an array of numbers, use the splice() method to remove all negative numbers from the array.

//Answer:

let numbs=[12,34,67,-12,-23,-16,89,90]
function remove_negitive(numbers){
let res=numbs.slice(3,6)
    return res
}

//O/P:
 remove_negitive(numbers)
//(3)[-12, -23, -16]

//Q10: Given an array of strings, use the splice() method to replace the second and third strings with a new string.

//Answer:
function replace_elements(){
    let my_array=['sam','pushpa','ravikanth','john']
    let res=my_array.splice(2,2,'swaroop','saketh')
     return res
    
    } 
//output:
    replace_elements()
    console.log(my_array)
   //(4) ['sam', 'pushpa', 'swaroop', 'saketh']

//11: duble the array elemnets using forEach
let array=[10,30,40,20,80]
function sum(){
let result=array.forEach((number)=>{
(number*2)

});
}

//o/p:
sum()
req_array
                 
//(5) [20, 60, 80, 40, 160]