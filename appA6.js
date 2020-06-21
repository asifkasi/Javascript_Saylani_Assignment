//chp 21 - 25 
//Q1

// var firstName = prompt("Enter First Name: ")
// var lastName = prompt("Enter last Name: ")

// var fullName  = firstName+" "+ lastName;
// alert("Welcome ",fullName)



//Q2
// var favoritephone = prompt("Enter your favorite phone: ")
// alert("lenght of string is "+favoritephone.length())

//Q3
// var a = prompt("Enter string: ")
// alert("index of 'n' is "+a.indexOf('n'))

//Q4
// var a = "Hello world"
// var b = a.lastIndexOf('l')
// alert(b)

//Q5
// var a  = "pakistani"
// alert(a[3])

//Q6


// //Q7
// var a ="hyderabad"
// a= a.replace("hyder","islam")
// alert(a)

// 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// message = message.replace("and","&")
// alert(message)

// 9

// var a = "472"
// a  = parseInt(a)

// 10
// var a = prompt("Enter string")
// a = a.toUpperCase()
// alert(a)

// 11
// var a = prompt("Enter string")
// var b = a[0].toUpperCase()
// b += a.slice(1).toLowerCase()
// alert(b)

//12
// var a = +prompt("Enter string")
// var b=a.toString()
// b = b.replace('.','')

//  alert(b)

// 13
// var specialChar = ['@',',','.','!']
// var a = prompt("Enter string")

// for (let index = 0; index <a.length; index++) {
//         if (a.search("'"+specialChar[index]+"'")==-1) {
//                 alert("Please enter a valid username")
//                 break;
//         }

// }

// 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var or = prompt("Enter string").toLowerCase()
// var flag = 0
// for (let index = 0; index < A.length; index++) {
//         if (A[index]==or) {
//                 flag = 1
//                 alert("on index number: "+index)
//         }
// }
// if (flag==0) {
//         alert("Sorry")
// }


// 15
// var or = prompt("Enter password")
// var flag = 0
// if (or.length < 6) {
//         alert("Password length is low")
// }
// else if (or[0] >= 0 && or[0] <= 9) {
//         alert("Password should not strt from num")

// }
// else {

//         for (let index = 1; index < 9; index++) {
//                 if (or.match(index) == index) {
//                         flag = 1
//                         break
//                 }
//         }


//         if (flag == 0) {
//                 alert("Password should contain alp and num")


//         }
// }


// 16
// var a = prompt("Enter String")
// var arrayChar = []
// for (let index = 0; index < a.length; index++) {
//         arrayChar.push(a[index])
//         document.write(arrayChar[index]+"<br>")
// }


// 17
// var a = prompt("Enter String")
// alert(a[a.length-1])

// 18
// var b = 0
// // var text = prompt("Enter String").toLowerCase()
// var text = "The quick brown fox jumps over the lazy dog".toLowerCase()

// for (var i = 0; i < text.length; i++) {
//         if (text.slice(i, i + 3) === "the") {
//                 ++b
//         }
// }
// alert(b)

//ch 26-30
// 1
// var a = +prompt("Enter +ve num")
// document.write("Number: "+a)
// document.write("<br>Round of number: "+Math.round(a))

// document.write("<br>Floor number: "+Math.floor(a))

// document.write("<br>Ceil number: "+Math.ceil(a))


// 2
// var a = +prompt("Enter -ve num")
// document.write("Number: "+a)
// document.write("<br>Round of number: "+Math.round(a))

// document.write("<br>Floor number: "+Math.floor(a))

// document.write("<br>Ceil number: "+Math.ceil(a))



// 3
// var a = +prompt("Enter num")

// if (a<0) {
//         alert(a*-1)


// }else{
// alert(a)}

// 4
// var a = Math.ceil(Math.random()*6)

// document.write(a)

// 5

// var a = Math.ceil(Math.random()*2)
// if (a===2) {
//         document.write("head")


// }
// else if (a===1) {
//         document.write("Tail")

// }

// 6
// var a = Math.ceil(Math.random()*100)
//         document.write(a)


// 8
// var a = Math.ceil(Math.random()*10)
// var b = +prompt("Enter the num")
// if (a===b) {
//         alert("Congrats")

// }else{
//         alert("try again")

// }


//Ch31-34
// 1
// var a = new Date()
// document.write(a)

// 2
// var arrayMonth = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"]
// var a = new Date()
// var mo = a.getMonth()
// document.write(arrayMonth[mo])


// 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];

// // 4
//  var now = new Date();
//  var theDay = now.getDay();
// if (theDay===0 || theDay===1) {
//         alert("It's fun day")

// }


// 5

// var now = new Date();
// var theDay = now.getDay();
// if (theDay>16) {
//        alert("First days")

// }else{
//         alert("last days")



// }

//7
// var now = new Date();
// var b = now.getHours();
// if (b>=1 && b<12) {
//        alert("AM")

// }else{
//         alert("PM")


// }

// 8
// var a = new Date()
// a.setMonth(11)
// a.setDate(31)
// a.setFullYear(2020)
// a.setHours(0)
// a.setMinutes(0)
// a.setMilliseconds(0)
// document.write(a)

// 9
// var ramzan = new Date("Apr 23 2020")
// var rammili = ramzan.getTime()
// var tod = new Date()
// var todmili = tod.getTime()

// var diff = todmili-rammili
// diff = diff/(1000*60*60*24)
// diff = Math.ceil(diff)
// alert(diff)

// 10

// var now = new Date()

// var cur = new Date(now)
// var curMili = cur.getTime()

// var ref = new Date("Jan 01 2020")
// var refMili = ref.getTime()

// var sec = (curMili - refMili)/1000
// alert(sec)


// 11

// var now = new Date()
// document.write(now)
// var a = now.getHours()
// --a
// now.setHours(a)
// document.write("<Br>1 hour ago,it was ")
// document.write(now)


// 12

// var now = new Date()
// document.write(now)
// var a = now.getFullYear() - 100

// now.setFullYear(a)
// document.write("<Br>100 year back,it was ",now)

// // 13
//   var year = +prompt("Enter the age")
// var now = new Date()
// var dobYear = now.getFullYear() -year

// document.write("your age is: ",dobYear)


// 14
// document.write("<H1>K-Electric bill</H1> ")
// document.write("<br> Customer Nmae")




//Ch 35-38

// 1
// function showCurrenctDate() {
//         var now  = new Date()
//         document.write(now)

// }

// showCurrenctDate()

// 2

// function userGreeting(){
//         var firstName = prompt("Enter First Name: ")
// var lastName = prompt("Enter last Name: ")

// var fullName  = firstName+" "+ lastName;
// alert("Welcome ",fullName)

// }
// userGreeting()

// 3

// function add (a,b){
//         return a+b
// }
// add(1,2)

// 4

// function Calculator(num1,num2,op) {

// basit ny lecture 14 me bnaya huwa

// }

// 5
// function Square(a) {
//         return a*a

// }
// Square(5)

// 6
// function Factorial(a) {
//         var numFact = 1
//         for (let index = a; index >0 ; index--) {
//                 numFact  = numFact *index
//         }
//         return numFact

// }
// alert(Factorial(5))

// 7

// function Counting(startNum, endNum) {
//         for (let index = startNum; index <= endNum; index++) {
//                 document.write(index + " ")
//         }
// }

// Counting(1,5)

// 8
// function squ(a) {
//         return a**a

// }
// function Hyp(base,hyp) {

//         hyp = squ(hyp)
//         base = squ(hyp)
//         var v = hyp- base
//         return v

// }

// alert( Hyp(5,5))

// 9



// 11

// function lname(text) {
//         text +=" "

//         var a = ""
//         var re = ""
//         var b =""
//         for (var i = 0; i <text.length; i++) {

//                 a += text[i]
//                 if (text[i] === " ") {

//                         b = a[0].toUpperCase()
//                         b += a.slice(2).toLowerCase()
//                         re = re + b

//                         a=""

//                 }
//         }
//         return re
// }

// var c = "the quick brown fox"
// document.write(lname(c))

// 12


// function lname(text) {
//         text +=" "

//         var a = ""


//         var word = []
//         var lenWord = []
//         var copylenWord = []

//         for (var i = 0; i <text.length; i++) {
//                 a += text[i]

//                 if (text[i] === " ") {
//                         word.push(a.slice(0,a.length-1))
//                         lenWord.push(a.length-1)
//                         copylenWord.push(a.length-1)
                        
                        
//                         a= ""                         
//                 }

//         }

//         copylenWord = copylenWord.sort()

//         var max = copylenWord[copylenWord.length-1]        
//         var aa = lenWord.indexOf(max)
//         return word[aa]
// }

// var c = "the quick brow fox"
// document.write(lname(c))


// 13

function lname(text,chr) {

        
var b = 0

for (var i = 0; i < text.length; i++) {
        if (text.slice(i, i+1) === chr) {
                ++b
        }
}
alert(b)
 return b       
}

document.write(lname("pakistani","i"))


// 14