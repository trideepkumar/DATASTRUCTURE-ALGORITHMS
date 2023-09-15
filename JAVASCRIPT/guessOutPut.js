//predict the output
//code 1

// var scope = "global scope";

// function check() {
//   var scope = "local scope";
//   function fun() {
//     return scope;
//   }
//   return fun;
// }

// const result = check()

// console.log(result())


// Code 2:

// function func1(){
//     setTimeout(()=>{
//         setTimeout(()=>{
//             console.log(x)
//         },5000)
//       console.log(y);
//     },3000);
  
//     var x = 2;
//     let y = 12;
//   }

// console.log(func1())


//code 3 ;

// function func2(){
//     for(var i = 0; i < 3; i++){
//       setTimeout(()=> console.log(i),2000);
//   }
//   }

//   console.log(func2())

//code 4 ;

// (function(){
//     setTimeout(()=> console.log(1),2000);
//     console.log(2);
//     setTimeout(()=> console.log(3),0);
//     console.log(4);
//   })()


//code 4 ;


// let  x= {}
// let  y = {name:"Ronny"}
// let  z = {name:"John"};

// x[y] = {name:"Vivek"};

// x[z] = {name:"Akki"};

// console.log(x[y]);


//code 5 ;

// function runFunc(){
//     console.log("1" + 1);  //2
//     console.log("A" - 1);  //NaN
//     console.log(2 + "-2" + "2"); //2-22
//     console.log("Hello" - "World" + 78);  //NaN
//     console.log("Hello"+ "78"); //Hello78
//   }
//   runFunc();


//code 6

// let a = 0;
// let b = false;

// console.log((a == b));    //true
// console.log((a === b));   //false


//code 7

// var x = 23;

// (function(){

//      var x = 43;

//   (function random(){
    
//     x++
//     console.log(x)
//     var x = 21
//   })()

// })()

