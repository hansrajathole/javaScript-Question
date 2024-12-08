//=====================================================================
//                                   Question no.1

// let a = 5;
// let b = 7;
// console.log(`Sum of ${a} & ${b} is ${a+b}`);

//=====================================================================
//                                   Question no.2

// let name = prompt("enter your name");
// let age = Number(prompt("enter your age"));
// console.log(`Hello ${name}, you are ${age} year old`);

//=====================================================================
//                                   Question no.3

// let length = parseFloat(prompt("enter length"));
// let width = parseFloat(prompt("enter width"));
// let parameter = 2 * (length + width);
// let area = a*b;
// console.log(`area is ${area} and parameter is ${parameter}`);

//=====================================================================
//                                   Question no.4

// let a = parseInt(prompt("enter a"));
// // let b = parseInt(prompt("enter b"));
// if(a%2===0){
//     console.log(a+ "is even");
// }else{
//     console.log(a+ " is odd");
// }

//=====================================================================
//                                   Question no.5

// let username = prompt("Enter your name");
// let age = parseInt(prompt("Enter your age"));
// if(age>=18){
//     console.log("hello "+username +" you are a voter");
// }else{
//     console.log("hello "+username +" you will be a eligible to vote in "+(18-age)+" years.");
// }

//=====================================================================
//                                   Question no.6

// let day = parseInt(prompt("Enter week number between 1-7"));

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thusday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("Wrong daay!!!");
//     break;
// }

//=====================================================================
//                                   Question no.7

// let a = parseInt(prompt("enter side a"));
// let b = parseInt(prompt("enter side b"));
// let c = parseInt(prompt("enter side c"));

// let s = (a+b+c)/2;
// let Area = Math.sqrt((s * (s - a) * (s - b) * (s - c)));

// console.log(`Area ${Area} sq units`);

//=====================================================================
//                                   Question no.8

// let a = parseInt(prompt("enter value of a"));
// let b = parseInt(prompt("enter value of b"));

// if(a>b){
//     console.log(`${a} is Gretest`);
// }else{
//     console.log(`${b} is Gretest`);

// }

//=====================================================================
//                                   Question no.9

// let a = parseInt(prompt("enter number"));

// if(a%2 === 0){
//     console.log(`${a} is an Even `);
// }else{
//     console.log(`${b} is an odd `);
// }

//=====================================================================
//                                   Question no.12

// let year = parseInt(prompt("enter year"));

// if(year % 400 == 0){
//     console.log("This is leap year");
// }else if(year % 100 == 0){
//     console.log("this is not a leap year");
// }else if(year % 4 == 0){
//     console.log("this is leap year");
// }

//=====================================================================
//                                   Question no.13

// let unit = parseInt(prompt("enter units"));
// let total = 0;

// if(unit < 100){
//     total = 100*4.2;
//     console.log(`Total bill amount is : ${total}`);
// }else if(unit >100 && unit <= 200){
//     total = (100*4.2)+((unit-100)*6)
//     console.log(`Total bill amount is : ${total}`);

// }else if(unit >200 && unit <=  400){
//     total = (100*4.2)+((unit-100)*6)+((unit-200)*8)
//     console.log(`Total bill amount is : ${total}`);

// }else{
//     total = (100*4.2)+((unit-100)*6)+((unit-200)*8)+((unit-400)*13);
//     console.log(`Total bill amount is : ${total}`);
// }

// let unit = parseInt(prompt("enter units"));
// let total = 0;

// if(unit > 400){
//     total += (unit-400)*13;
//     unit = 400;
// }if(unit > 200 && unit <= 400){
//     total += (unit-200)*8;
//     unit = 200;
// }if(unit > 100 && unit <= 200){
//     total += (unit - 100) * 6;
//     unit = 100;
// }
// total += unit * 4.2;

// console.log(total);

//=====================================================================
//                                   Question no.14

// let totalPrice = parseInt(prompt("enter your product price"));

// if(totalPrice >= 0 && totalPrice <= 5000){
//     totalPrice = totalPrice - (totalPrice *0 )/100;
//     console.log(`Payble amount is ${totalPrice}`);
// }

// else if(totalPrice >= 5000 && totalPrice <= 7000){
//     totalPrice = totalPrice - (totalPrice *5 )/100;
//     console.log(`Payble amount is ${totalPrice}`);
// }

// else if(totalPrice >= 7000 && totalPrice <= 9000){
//     totalPrice = totalPrice - (totalPrice *10 )/100;
//     console.log(`Payble amount is ${totalPrice}`);
// }

// else if(totalPrice >= 9000){
//     totalPrice = totalPrice - (totalPrice *20 )/100;
//     console.log(`Payble amount is ${totalPrice}`);
// }

//=====================================================================
//                                   Question no.15

// let n = parseInt(prompt("enter n number"));

// for(let i = 1 ; i<= n ; i++){
//     console.log("Hello world !");

// }

//=====================================================================
//                                   Question no.16

// let ntl = parseInt(prompt("Enter the Natural number"));
// let str = "";
// for(let i = 1 ; i<= ntl ; i++){
//     // console.log(i);
//     str += " "+i.toString();
// }
// console.log(str);

//=====================================================================
//                                   Question no.17

// let ntl = parseInt(prompt("Enter the Natural number"));
// let sum = 0;
// for(let i = 1 ; i<= ntl ; i++){
//    sum +=i;
// }
// console.log(sum);

//=====================================================================
//                                   Question no.18

// let ntl = parseInt(prompt("Enter the Natural number"));
// let fack = 1;
// for(let i = 1 ; i<= ntl ; i++){
//    fact *=i;
// }
// console.log(sum);

//=====================================================================
//                                   Question no.19

// let n = parseInt(prompt("Enter the number"));
// count = 0;
// for(let i = 1 ; i<=n ; i++){
//     if(n % i == 0 ){
//        count++;
//     }

// }

// if(count == 2){
// console.log("is a prime number");

// }else{
//     console.log("not a prime number");
// }

//=====================================================================
//                                   Question no.20

// let n = Number(prompt("Enter the number"));
// let sum = 0;
// let r ;

// while(n>0){
//     r = n % 10;
//     sum += r;
//     n = Math.floor(n/10);

// }

// console.log(sum);

//=====================================================================
//                                   Question no.21

// let n = Number(prompt("Enter the number"));
// let rev = 0;
// let rem = 0;
// while(n>0){
//     rem = n%10;
//     rev = (rem*10)+rem;
//     n = Math.floor(n/10);
// }

// console.log(rev);

//=====================================================================
//                                   Question no.22

// let n = Number(prompt("Enter the number"));
// let swip = n;
// let rev = 0;
// while(swip>0){
//     rev = (rev * 10)+ (swip%10);
//     swip = Math.floor(swip/10);
// }

// if(n === rev){
//     console.log(`${rev} is Pallindrome Number`);
// }else{
//     console.log(`${rev} is not Pallindrome Number`);

// }

//=====================================================================
//                                   Question no.23

// let n = 145;
// let copy = n;
// let ans = 0;
// let rem = 0;

// while(n>0){
//     rem = n%10;
//     let fact = 1;

//     for(let i = 1; i<=rem; i++){
//         fact = fact*i;
//     }
//     ans = ans + fact;
//     n = Math.floor(n/10);

// }

// console.log(copy===ans?"strong number":"not a ftrong number");

//=====================================================================
//                                   Question no.24

// let n = Number(prompt("Enter the number"));
// let copy = n;
// let sqr = n*n;
// let count = 0;

// while(n>0){
//     count++;
//     n = Math.floor(n/10);
// }
// console.log(copy === sqr%Math.pow(10,count)?"automarphic ":"not automarphic");

//=====================================================================
//                                   Question no.25

// let n = Number(prompt("Enter the number"));
// let sum = 0;
// let rem = 0;

// while(n>0 || sum>9){

//     if(n==0){
//         n=sum;
//         sum = 0;
//     }
//     rem = n%10;
//     sum +=rem;
//     n = Math.floor(n/10);
// }

// console.log(sum);

//=====================================================================
//                                   Question no.26

// let n = 10;
// let privous = 0;
// let current = 1;

// for(let i = 1 ; i<=n ; i++){
//     let next = privous + current;
//     console.log(next);
//     privous = current;
//     current = next;

// }

//=====================================================================
//                                   Question no.27

// let i;
// do{
//     console.log("hello world");
//     i = Number(prompt("Enter number"))
// }while(i!=0);

//=====================================================================
//                                   Question no.28

// let n,first,sencond;

// do{
//     console.log("Enter 1 for Addition");
//     console.log("Enter 2 for Substraction");
//     console.log("Enter 3 for Multiplication");
//     console.log("Enter 4 for Division");
//     console.log(" ");

//     n = Number(prompt("Enter the calculator number"))
//     if(n<0 || n>4)break

//     switch (n) {
//         case 1:{
//             console.log("you select Addition");
//             first = Number(prompt("Enter the First number"));
//             sencond = Number(prompt("Enter the second number"));
//             console.log("Sum "+(first+sencond));

//         }
//             break;
//         case 2:{
//             console.log("you select Substraction");
//             first = Number(prompt("Enter the First number"));
//             sencond = Number(prompt("Enter the second number"));
//             console.log("Substraction "+(first-sencond));

//         }
//             break;
//         case 3:{
//             console.log("you select Multiplication");
//             first = Number(prompt("Enter the First number"));
//             sencond = Number(prompt("Enter the second number"));
//             console.log("Multiplication "+(first*sencond));

//         }
//             break;
//         case 4:{
//             console.log("you select Division");
//             first = Number(prompt("Enter the First number"));
//             sencond = Number(prompt("Enter the second number"));
//             console.log("Division "+(first/sencond));

//         }
//             break;

//     }

//     n = Number(prompt("if you want to continue, press any key and 0 for exit"))
//     console.log(" ");

// }while(n!=0);

//=====================================================================
//                                   Question no.29

// let random = parseInt(Math.random()*100);

// while (true) {
//     let guess = Number(prompt("Guess the number"));

//     if(guess === random){
//         console.log("Congrats!");
//         break;
//     }
//     else if(guess > random){
//         console.log("to high");
//         alert("to high try again!!")
//     }
//     else{
//         console.log("to high");
//         alert("to low Try again!")
//     }
// }

//=====================================================================
//                                   Question no.30
// Patte r n   -   R i g ht   Tr i a n g l e   ( St a r )
// Accept an integer n and print the following pattern for n.

// let n = 5//Number(prompt("Enter the number"))
// for(let i = 1 ; i<= n ; i++){
//     let str ="";
//     for(let j = 1 ; j<=i ; j++){
//         str += "*"
//     }
//     console.log(str);

// }

//=====================================================================
//                                   Question no.31

// let n = 5 //Number(prompt("Enter the number"))
// for(let i = 1 ; i<= n ; i++){
//     let str ="";
//     for(let j = 1 ; j<=i ; j++){
//         str += j+""
//     }
//     console.log(str);
//     // str = ""

// }

//=====================================================================
//                                   Question no.32

// Patte r n   -   R i g ht   Tr i a n g l e   ( Al p h a b et)
// Accept an integer n and print the following pattern for n.

// Process : 1
// let n = 5;

// for(let i = 65 ; i<=n+65 ; i++){
//     let str =""
//     for(let j = 65 ; j<=i ; j++){
//         str += String.fromCharCode(j)+" "
//     }
//     console.log(str)
// }

// Process : 2
// let n = 5//Number(prompt("Enter the number"))
// for(let i = 1 ; i<= n ; i++){
//     let a = 65;
//     let str =""
//     for(let j = 1 ; j<=i ; j++){
//         str += String.fromCharCode(a)+" "
//         a++
//     }
//     console.log(str);

// }

//=====================================================================
//                                   Question no.33

// I nve r te d   R i g ht   Tr i a n g l e
// Accept an integer n and print the following pattern for n.

// let n = 5//Number(prompt("Enter the number"))
// for(let i = 1 ; i<=n ; i++){
//     let str ="";
//     for(let j = 1 ; j<=n-i ; j++){
//         str += "*  "
//     }
//     console.log(str);

// }

//=====================================================================
//                                   Question no.34

// let n = 5//Number(prompt("Enter the number"))
// for(let i = 1 ; i<=n ; i++){
//     let str ="";
//     for(let j = 1 ; j<=n-i ; j++){
//         str += "  "
//     }
//     for(let k = 1 ; k<=i; k++){
//         str += "* "
//     }
//     console.log(str);

// }

//=====================================================================
//                                   Question no.35

// practice Question

// let arr = [10,20,30,40,50]

// function findIdx(arr, target){
//     arr.forEach((val, index)=>{
//         if(val == target){
//             console.log(index);
//         }
//     })

// }

// findIdx(arr, 60);

// find minimum

// function findMin(arr){
//     let min = Math.min();
//     arr.forEach((val)=>{
//         if(min>val){
//             min=val;
//         }

//     })
//     console.log(min);
// }

// findMin(arr);

// function findMax(arr){
//     let max = Math.max();
//     arr.forEach((val)=>{
//         if(max<val){
//             max=val;
//             // console.log(val);
//         }

//     })
//     console.log(max);
// }

// findMax(arr);

// reverse string

// let str = "hello"

// let rev = (str)=>{

//     //  let arr = str.split('')
//     //  let rArray = arr.reverse()
//     //  let r = rArray.join('')

//      return str.split('').reverse().join('');
// }

// palindrome

// let str = "madam"

// let rString = (str)=>{
//          return str.split('').reverse().join('');
//     }

// if(str === rString(str)){
//     console.log("palindrome");
// }else{
//     console.log("not palindrome");

// }

// check the number is fizzbuzz or fizz or buzz
// for(let i = 1 ; i <=100 ; i++){

// if(i%3==0 && i%5==0){
//     console.log("fizzbuzz");

// }else{
//     if(i%3==0){
//         console.log("fizz");
//     }else{
//         if(i%5==0){
//             console.log("buzz");
//         }else{
//             console.log(i);
//         }
//     }
// }
// if(i%3==0 && i%5 == 0){
//     console.log("fizzbuzz");
// }
// else if(i%3==0){
//     console.log("fizz");
// }
// else if(i%5==0){
//     console.log("buzz");
// }
// else{
//     console.log(i);

// }
// }

// find max number
// let arr =  [1, 5, 3, 9]
// let max = arr[0]

// for(let i = 1 ; i<=arr.length ; i++)
//  {
//     if(max<arr[i]){
//         max = arr[i];
//     }
// }

// console.log(max)

// print table of n

// let n = 6
// for(let i = n ; i<=n*10 ; i+=n){
//     console.log(i);
// }

// print reverse tringle of number
// let n = 5

// for(let i = 1 ; i<=n ; i++){
//     let str = ""
//     for(let j = 1 ; j<=n-i+1; j++){
//         str += j;
//     }
//     console.log(str);

// }

// print tringle of star

// let n = 5
// for(let i = 1 ; i<=n; i++){
//     let str = ""
//     for(let j = 0 ; j<= n-i-1 ; j++){
//         str +="  "
//     }
//     for(let k = 0 ; k<2*i+1 ; k++){
//         str +="* "
//     }
// //     for(let j = 0 ; j<= n-i-1 ; j++){
// //         str +="  "
//     //  }
//      console.log(str);

//  }

// print reverse tringle of star
// let n = 5
// for(let i = 1 ; i<n; i++){
//     let str = ""
//     for(let j = 0 ; j<i ; j++){
//         str +=" "

//     }
//     for(let k = 0 ; k<=n-i-1 ; k++){
//         str +="* "
//     }
//     // for(let j = 0 ; j<= n-i-1 ; j++){
//     //     str +="  "
//     // }
//     console.log(str);

// }

// print pyramid of star
// let n= 5

// for(let i = n ; i>=0 ; i--){
//     for(let j = 1 ; j<=i ; j++){
//         process.stdout.write("* ")
//     }
//     console.log();
// }

// print alphabet
// let n= 5
// let term = 65
// for(let i = 1 ; i<=n ; i++){
//     for(let j = 1; j<=i ; j++){

//         process.stdout.write(String.fromCharCode(term) + " ")
//         term++
//     }
//     console.log();

// }

//print 0 1 in tringle
// let n= 5
// count = 2;
// for(let i = 1 ; i<=n ; i++){
//     for(let j = 1; j<=i ; j++){
//         if((i+j)%2==0){
//             process.stdout.write("1 ")
//         }
//         else {
//             process.stdout.write("0 ")

//         }
//     }
//     console.log();

// }

// for(let i = 1 ; i<=n ; i++){
//     for(let j= 1 ; j<=5  ; j++){
//         if((i==1 || j==1) || (i==4 || j== 5)){
//             process.stdout.write("* ")
//         }else{
//             process.stdout.write("  ")
//         }
//     }
//     console.log();

// }

// hollow rectangle
// let n = 5;

// for(let i = 1 ; i<=n ; i++){
//     let str =""
//     for (let j = 1 ; j<=n-i; j++){
//         str +="  "
//     }
//     for(let k = 1 ; k <=i; k++){
//         str += "* "
//     }

//     console.log(str);

// }

// print butterfly
// let n = 4;
// let stss = "";
// function butterfly(n) {
//   for (let i = 1; i <= n; i++) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += "* ";
//     }
//     for (let k = 1; k <= 2 * n - i - i; k++) {
//       str += "  ";
//     }
//     for (let l = 1; l <= i; l++) {
//       str += "* ";
//     }
//     stss += str + "\n";
//   }

//   // miror method one
//   for (let i = n; i > 0; i--) {
//     let str = "";
//     for (let j = 1; j <= i; j++) {
//       str += "* ";
//     }
//     for (let k = 1; k <= 2 * n - i - i; k++) {
//       str += "  ";
//     }
//     for (let l = 1; l <= i; l++) {
//       str += "* ";
//     }
//     stss += str + "\n";
//   }
//   return stss;
// }

// console.log(butterfly(n));

// miror method two
// for(let i = 1 ; i<= n ; i++){
//     let str = ""
//     for(let l = 1 ; l<=n-i+1 ; l++){
//         str += "* "
//     }
//     for(let j = 1 ; j<=i*2-2; j++){
//         str += "  "
//     }
//     for(let k = 1 ; k<= n-i+1 ; k++){
//         str += "* "
//     }
//     console.log(str);

// }



//Print solid rhombus pettern
// let n = 5
// let solidp = ""
// function solid(){
//     for(let i = 1 ; i <=n*2-i ; i++){
//         let str = ""
//         for (let j = 1 ; j<=n-i ; j++){
//             str +="  "
//         }
//         for(let k = 1 ; k<=n ; k++){
//             str += "* "
//         }
//         solidp += str + "\n"
//     }
//     return solidp
// }

// console.log(solid(n))



// Hollow RHOMBUS
// let n = 5
// let holloww = ""
// function hollow(){
//     for(let i = 1 ; i <=n*2-i ; i++){
//         let str = ""
//         for (let j = 1 ; j<=n-i ; j++){
//             str +="  "
//         }
//         for(let k = 1 ; k<=n ; k++){
//             if((i==1 || k == 1) || (i== n || k==n)){
//                 str += "* "
//             }
//             else{
//                 str += "  "
//             }
//         }
//         holloww += str + "\n"
//     }
//     return holloww
// }
// console.log(hollow(n));



// Diamond pettern
// let n = 4
// let di =""

// function diamond(n){
//     for(let i = 1 ; i<= n ; i++){
//         let str = ""
//         for(let l = 1 ; l<=n-i ; l++){
//             str += "  "
//         }
//         for(let j = 1 ; j<=(i*2)-1; j++){
//             str += "* "
//         }
        
//         di += str + "\n"
    
//     }
//     for(let i = n ; i>=0 ; i--){
//         let str = ""
//         for(let l = 1 ; l<=n-i ; l++){
//             str += "  "
//         }
//         for(let j = 1 ; j<=i*2-1; j++){
//             str += "* "
//         }
        
//         di += str + "\n"
    
//     }

//     return di
// }

// console.log(diamond(n));





