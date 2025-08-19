//arithmetic operator

let a=10;
let b=10;
console.log(a+b);// add
console.log(a-b);//sub
console.log(a*b);//mul
console.log(a/b);//div
console.log(a%b);//mod
console.log(a**b);//expo

let c=10;//increment
c++
console.log(c);

let d=10;
d-- // decrement
console.log(d)

let e=10;
e++;
e--;
console.log(e)

//assignment operator
let f=15;
f+=10; // add assignment
console.log(f);

let g=10;
g-=5; //sub assignment
console.log(g);
let h=10;
h*=5; //mul assignment
console.log(h)
let i=5;
i/=5; //div assignment
console.log(i);
let j=15; // mod assignment
j%=10;
let k=5;
k**=k
console.log(k);

let les=10;
let grt=10;
 console.log(les < grt);
 console.log(les>grt);
 console.log(les>=grt);
 console.log(les<=grt);
 // functions
 // function declaration
 function info(name){
    console.log("i am ", name)
    
 }
 info("java script")
 
 // function expression
 let fruit=function(name){
    console.log("i am ",name,"i am good for health");
}
fruit ("appple")
fruit("orange")
//arrow function
let movies=(name,ticket,snacks,petrol,parking)=>{
    console.log("movie name",name ,"::","price:" ,(ticket+snacks+petrol+parking));    
}
  movies("collie",100,150,200,10)
 movies("leo",250,100,100,50) 
 // task
 let area=(length,width)=>{
    console.log("area=",(length*width));    
 }
area(5,5)
// task 2
let result=function(name,tamil,english,maths,science,social){
    console.log("my name is:",name,"and my percentage is :",(tamil+english+maths+science+social)/500*100);

}
result("sakthi",85,93,88,78,87)

// operators day3



