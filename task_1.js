/* 
Write a loop that makes seven calls to console.log to output the following triangle:

დაწერეთ ციკლი, რომელიც 7-ჯერ იძახებს console.log-ს რომ გამოიტანოს შემდეგი სამკუთხედი:

#
##
### 
#### 
##### 
###### 
#######
*/

let age = 0;
let nextAge = "#";

while ( age < 7 ) {
	console.log(nextAge);
	nextAge += "#";
	age++;
	}