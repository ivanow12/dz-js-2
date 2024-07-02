/* 
1. Проверка возраста для доступа к взрослому контенту:
   Напишите программу, которая проверяет возраст пользователя и выводит сообщение “Доступ разрешен”,
   если возраст 18 лет или больше, и “Доступ запрещен” в противном случае.

 */

let age = 8;
let return1 = age >= 18 ? `Доступ разрешен!` : "Доступ запрещен!";
console.log(return1);

/*
Проверка дня недели и вывод соответствующего сообщения:
Напишите программу, которая принимает на вход день недели и выводит сообщение 
“Это будний день”, если это понедельник, вторник, среда, четверг или пятница, и 
“Это выходной день”, если это суббота или воскресенье. Если введённое значение не является днём недели, выводится сообщение “Неправильный день”.

*/

let dayWeek = "суббота";
if (
  dayWeek === "понедельник" ||
  "вторник" ||
  "среда" ||
  "четверг" ||
  "пятница"
) {
  console.log("Это будний день!");
} else if (dayWeek === "cуббота" || "воскресенье") {
  console.log("Это выходной день");
} else {
  console.log("Неправильный день !");
}

/*
Определение наибольшего из трёх чисел:
Напишите программу, которая принимает на вход три числа и выводит, 
какое из них является наибольшим.

*/

let number1 = 2;
let number2 = 1;
let number3 = 21;

if (number1 > number2 && number1 > number3) {
  console.log(`Наибольшее число ${number1}`);
} else if (number2 > number1 && number2 > number3) {
  console.log(`Наибольшее число ${number2}`);
} else {
  console.log(`Наибольшее число ${number3}`);
}

/*  
    Использование тернарного оператора для проверки пароля:
    Напишите программу, которая проверяет, соответствует ли введённый пароль строке “secret123”.
    Если да, программа должна выводить “Доступ разрешен”, в противном случае — “Неверный пароль”, 
    используя тернарный оператор.
*/

let password = "secret123";
let return2 = (password === "secret123") ? `Доступ разрешен пароль введён верно`: "Неверный пароль";
    console.log(return2);

/*  
    Проверка оценки студента и вывод соответствующей отметки:
    Напишите программу, которая принимает на вход оценку студента и выводит “Отлично”,
    если оценка больше или равна 90, “Хорошо” — если оценка от 75 до 89, 
    “Удовлетворительно” — если оценка от 50 до 74, и “Неудовлетворительно” — если оценка ниже 50.

*/
let grade = 100;
if(grade >= 90){
    console.log('отлично')
} else if(grade >= 75){
    console.log('хорошо')
} else if (grade >= 50){
    console.log('Удовлетворительно')
}else{
    console.log('Неудовлетворительно')
}

/*
Определение сезона по месяцу:
Напишите программу, которая принимает на вход название месяца и выводит соответствующий 
сезон (зима, весна, лето, осень). Если введённое значение не является названием месяца, 
выводится сообщение “Неправильный месяц”.


*/


let  month = 'декабрь';
if (month === 'декабрь' || 'январь' || 'февраль'){
    console.log('зима')
}else if (month === 'март' || 'апрель' || 'май'){
    console.log('весна')
}else if(month === 'июнь' || 'июль' || 'август'){
    console.log('лето')
}else if(month === 'сентябрь' || 'октябрь' || 'ноябрь'){
    console.log('осень')
}else{
    console.log('Неправильный месяц')
}

/*
Использование тернарного оператора для проверки положительности числа:
Напишите программу, которая принимает на вход число и проверяет, 
является ли оно положительным или отрицательным, используя тернарный оператор. 
Соответственно выводятся сообщения 
“Положительное число” или “Отрицательное число”.

*/

let positive = 1;
let return3 =(positive > 0) ? `Положительное число '${positive}'`:'Отрицательное число';
console.log(return3);

/*
Проверка типа данных и вывод соответствующего сообщения:
Напишите программу, которая принимает на вход значение и проверяет его тип данных. 
Если значение является числом, строкой или булевым значением, выводится соответствующее сообщение 
(“Это число”, “Это строка”, “Это булево значение”). 
В противном случае выводится сообщение “Неизвестный тип данных”.


*/


let type12 = 8;
if(   typeof type12 === 'number'){
    console.log('Это число')
}else if (typeof type12 === 'string'){
  console.log('Это строка')
} else if (typeof type12 ==='boolean'){
  console.log('Это булево значение')
}else{
  console.log('Неизвестный тип данных ')
}

/*
Напишите программу, которая принимает на вход два числа и оператор (один из: +, -, *, /). 
Программа должна выполнять соответствующую операцию и выводить результат. 
Если операция деления и второе число равно нулю, вывести сообщение “Деление на ноль невозможно”. 
Если оператор не поддерживается, вывести сообщение “Неподдерживаемая операция”.
*/
 let num1 = 12;
 let num2 = 0;
 let op ='3';
 if( op ==='+'){
  console.log(`${num1} + ${num2 } = ${ num1+num2}`)
 } else if( op ==='-'){
  console.log(`${num1} - ${num2 } = ${num1-num2}`)
 }else if(  op ==='/' && num2 > 0){
  console.log(`${num1} / ${num2 } = ${num1/num2}`)
 }else if( op ==='*'){
  console.log(`${num1} * ${num2 } = ${num1*num2}`)
 }else if(  op ==='/' && num2 == 0){
  console.log('Деление на ноль невозможно')
 }else {
  console.log('Неподдерживаемая операция')
 }
