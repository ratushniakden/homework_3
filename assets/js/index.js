"use strict";

//Variable tasks

//Task 1
let a = 7, b = 5;
console.log(`Result of ${a} * ${b} is ${a * b}`);

//Task 2
let c = 10, d = 2;
console.log(`Result of ${c} / ${d} is ${c / d}`);

//Task 3
let e = 14, f = 26;
console.log(`Result of ${e} + ${f} is ${e + f}`);

//Task 4
let number = 11;
let bool = true;
let string = "java script";
let str = "100";
console.log(number, bool, string, str);

//Task 5
let num = 1;
console.log(num);
num += 11;
console.log(num);
num -= 11;
console.log(num);
num *= 11;
console.log(num);
num /= 11;
console.log(num);
num++;
console.log(num);
num--;
console.log(num);

//Prompt tasks

//Task 1
/* let input = prompt("Enter value:")
console.log(`Square of ${input} is ${input*input}`); */

//Task 2
/* let inputValue1 = prompt("Enter first value:");
let inputValue2 = prompt("Enter second value:");
console.log(`Average of ${inputValue1} and ${inputValue2} is ${(+inputValue1 + +inputValue2)/2}`); */

//Task 3
/* let inputMinute = prompt("Etner value:")
console.log(`${inputMinute} minute(s) is equal to ${inputMinute * 60} second(s)`); */

//Task 4
/* let greeting = "Hello";
let userName = prompt("What is your name?")
alert(`${greeting}, ${userName}!`) */

//Condition tasks

//Task 1
/* let userInput = prompt("Enter value:")
if(+userInput === 10)
{
    alert(`True`);
}
else
{
    alert(`False`);
} */

//Task 2
// let test = false;

//2.1
/* if(test)
{
    console.log(`True`);
}
else
{
    console.log(`False`);
} */

//2.2
/* if(!test)
{
    console.log(`True`);
}
else
{
    console.log(`False`);
} */


//Task 3
/* let userInput = prompt("Enter value:")
let discount = 0;
if(userInput > 500 && userInput < 800)
{
    discount = 3;
    alert(`Purchase amount including discount is ${userInput - (userInput)*(discount/100)}`)
}
else if (userInput > 800)
{
    discount = 5;
    alert(`Purchase amount including discount is ${userInput - (userInput)*(discount/100)}`)
}
else
{
    alert(`Oops...something went wrong!`)
} */

//Loop tasks

//Task 1
/* for(let i = 25; i >= 0; i--)
{
    console.log(i);
} */

/* let i = 25;
do 
{
    console.log(i);
    i--;
} while (i >= 0); */

/* let i = 25;
while(i >= 0)
{
    console.log(i);
    i--;
} */

//Task 2
/* for(let i = 10; i <= 50; i++)
{
    if(i % 5 === 0)
    {
        console.log(i);
    }
} */

/* let i = 10;
do 
{
    if(i % 5 === 0)
    {
        console.log(i);
    }
    i++;
} while (i <= 50); */

/* let i = 10;
while(i <= 50)
{
    if(i % 5 === 0)
    {
        console.log(i);
    }
    i++;
} */

//Task 3
/* let sum = 0;
for(let i = 1; i <= 100; i++)
{
    sum += i;
}
console.log(sum); */

/* let i = 1;
let sum = 0;
do
{
    sum += i;
    i++;
} while (i <= 100);
console.log(sum) */

/* let i = 1;
let sum = 0;

while(i <= 100)
{
    sum += i;
    i++;
}
console.log(sum); */

//Task 4
/* let x = 2, y = 2, z = 2;
let userInput = prompt(`Solve: (${x} + ${y} * ${z})`);
let answer = x + y * z;

for(;;)
{
    if(+userInput !== answer)
    {
        userInput = prompt(`Solve: (${x} + ${y} * ${z})`);
    }
    else
    {
        break;
    }
}
console.log(`Your answer ${userInput} is correct!`); */

/* do 
{
    userInput = prompt(`Solve: (${x} + ${y} * ${z})`);
} while (+userInput !== answer);
console.log(`Your answer ${userInput} is correct!`); */

/* while(+userInput !== answer)
{
    userInput = prompt(`Solve: (${x} + ${y} * ${z})`);
}
console.log(`Your answer ${userInput} is correct!`); */

//Function task

/* let userInput = prompt("Enter your age please:")
function isAdult(age)
{
    if(age >= 18)
    {
        return true;
    }
    return false;
}
console.log(isAdult(userInput)); */