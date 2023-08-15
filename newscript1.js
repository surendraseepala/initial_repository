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