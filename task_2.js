/*
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" instead of the number, 
and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. 
So if you solved it, your labor market value just went up.)

დაწერეთ პროგრამა, რომელიც console.log -ს იყენებს, რომ გამოიტანოს ყველა რიცხვი 1 -დან 100 -მდე, 3 გამონაკლისით.
1. რიცხვები, რომლებიც იყოფა 3 -ზე, გამოიტანეთ "Fizz" რიცხვის მაგივრად,
2. რიცხვები, რომლებიც იყობა 5 -ზე (და არა 3 -ზე), გამოიტანეთ "Buzz" რიცხვის მაგივრად.
3. რიცხვები, რომლებიც იყოფა ორივეზე 3 -ზეც და 5 -ზეც გამოიტანეთ "FizzBuzz"
*/


let i = 1; 

while ( i <= 100 ) {
    if ( !( i % 3 ))
		console.log("Fizz");
    else if ( !( i % 5 ))
		console.log("Buzz");
	else if ( !( i % 3 ) && !( i % 5 ))
		console.log("FizzBuzz");
	else 
		console.log(i);
	    i++;
}