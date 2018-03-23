/*1. Напишите функцию a, которая будет служить коротким именем для alert, то есть 
выводит пользовательское сообщение в стандартном модальном окне. Напишите 
функцию d, которая будет служить коротким именем для debugger, то есть 
запускает процесс отладки.

a( 'Hello' );
d();
a( 'World' );
 ET (Estimated Time) - 5 min
 AT (Actual Time) - 5 min*/

function a(x) {
	alert(x);
}
function d() {
	debugger;
}
/*
a( 'Задание 1: \nHello' );
d();
a( 'World' );
*/
/*2. Напишите функцию max, которая сравнивает два числа и возвращает большее: 

console.log( max(0, -1) ); // 0
 ET (Estimated Time) - 10 min
 AT (Actual Time) - 3 min*/

function max(a, b) {
	if (a > b) {
		return a;
	}
	else {
		return b;
	}
}

console.log( max(0, -1) ); // 0

/*3. Напишите функцию-аналог Math.min(). Функция принимает любое количество 
чисел и возвращает меньшее из них:

console.log( min(0, -1, 100, 500, 100500) ); // -1
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 35 min*/

function min() {
	var numbers = arguments;
	var min = numbers[0];
	for (i = 1; i < numbers.length; i++) {
		if (numbers[i] < min) {
			min = numbers[i];
		} 
	}
	return min;
}
console.log( min(0, -1, 100, 500, 100500) );

/*4. Изучите перебирающие методы массивов: forEach, filter, map. Создайте 
массив объектов users (~10 объектов), каждый объект имеет поля firstname, 
lastname, age с разными значениями, у некоторых есть поле middlename. 
Используя встроенные функции массивов:	

a) Отфильтруйте пользователей младше 18 лет

b) Добавьте каждому объекту поле fullName, которое является конкатенацией 
firstname, middlename и lastname, если есть все три, и только firstname и 
lastname, если middlename нет

c) Сформируйте новый массив, который содержит только полное имя пользователей
 ET (Estimated Time) - 60 min
 AT (Actual Time) - 44 min*/

var users = [
			{firstname : 'Mary', midlename : 'Ane', lastname : 'Huares', age: 22},
			{firstname : 'John', midlename : 'Sebastian', lastname : 'Alwares', age: 16},
			{firstname : 'Victor', lastname : 'Smith', age: 64},
			{firstname : 'Alex', midlename : 'George', lastname : 'McDavis', age: 41},
			{firstname : 'Bonita', midlename : 'Elena', lastname : 'Star', age: 17},
			{firstname : 'Stefan', lastname : 'Midletown', age: 26},
			{firstname : 'Rosa', midlename : 'Maria', lastname : 'Espanita', age: 18},
			{firstname : 'James', midlename : 'Roger', lastname : 'Escobar', age: 15},
			{firstname : 'Harry', lastname : 'Axe', age: 57},
			{firstname : 'Vanda', midlename : 'Milena', lastname : 'Stuarts', age: 67},
			{firstname : 'Ragnar', lastname : 'Lodbrock', age: 30},
			];

function under18 (x) {
	if (x.age < 18) return true;
}
var usersUnder18 = users.filter(under18);
console.log(usersUnder18);

users.forEach(function(item) {
	if (item.midlename) {
		item.fullName = item.firstname + ' ' + item.midlename + ' ' + item.lastname;
	}
	else {
		item.fullName = item.firstname + ' ' + item.lastname;
	}
});
console.log(users);

var usersFullNames = users.map(function(item){
	return item.fullName;
});
console.log(usersFullNames);

/*5. Напишите функцию аналог метода массива shift. Функция удаляет из переданного в 
параметре массива первый элемент и возвращает новый массив.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 15 min*/

function shift(array) {
	for (var i = 0; i < array.length-1; i++) {
		array[i] = array[i+1];
	}
	array.length = array.length - 1;
	return array;
};

var arr1 = [5, 6, 'wfwf', 7];
console.log(arr1);
shift(arr1);
console.log(arr1);

/*6. Напишите функцию аналог метода массива push. Функция добавляет в конец 
переданного в параметре массив произвольное количество элементов.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 30 min*/

function push(array, elementsToPush) {
	for (var i = 1; i < arguments.length; i++) {
		array[array.length] = arguments[i];
	}
	return array;
};

var arr2 = [5, 6, 'wfwf', 7];
console.log(arr2);
push(arr2, 1, 2, 3);
console.log(arr2);

/*7. Напишите функцию аналог метода jQuery $.extend. Первый параметр функции - 
целевой объект, поля которого будут изменены или расширены. Остальные параметры - 
объекты-источники, полями которых будет расширяться целевой объект.

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
 ET (Estimated Time) - 40 min
 AT (Actual Time) - 30 min*/

function extend(object, newObjectParameters) {
	var z = arguments;
	var x = {};
	for (var i = 0; i < z.length; i++) {
		for (var key in z[i]) {
			x[key] = z[i][key];
		}		
	}
	return x;
}

var source = {firstname: 'Tom', age: 10}
var s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
console.log(source); // {firstname: 'John', age: 10, lastname: 'Doe'}
console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}

/*8. Напишите функцию setComment с параметрами: date, message, author. Дата и текст 
сообщения - обязательные параметры, если какой-то из них или оба отсутствуют, 
то выполнение функции должно обрываться, а пользователю выдаваться 
предупреждение (alert) о том, что данные переданы некорректно. Параметр author - 
опциональный, но должна происходить проверка: если параметр не передан, то вместо 
него подставляется значение ‘Anonymous’. Функция распечатывает на странице текст 
в формате: 
				<имя_автора>, <дата>
				<текст_сообщения>

setComment('2016-11-02', 'Everything is ok', 'John');

John, 2016-12-22
Everything is ok

setComment('2016-11-02', 'You could do it better!');

Anonymous, 2016-12-22
You could do it better!
 ET (Estimated Time) - 30 min
 AT (Actual Time) - 11 min*/

function setComment (date, message, author) {
	if (date === undefined || message === undefined) {
		alert('Данные переданы некорректно');
		return;
	}
	if (author === undefined) {
		author = 'Anonymous';
	}
	console.log(author + ', ' + date + '\n' + message);
}

setComment(new Date(), 'Everything is ok', 'John');
setComment('2016-11-02', 'You could do it better!');

/*Замыкания
1. Используя замыкание, напишите функцию createTimer, которая использует 
метод performance.now() для получения текущей временной метки и служит для 
замера времени выполнения другого кода:

var timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() ); // время в мкс от начала выполнения createTimer() до момента вызова timer()
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 20 min*/

function createTimer() {
	timer0 = performance.now();
	return function () {
		timer1 = performance.now();
		timer = timer1 - timer0;
		return timer;
	}
}

var timer = createTimer();
alert('!')  // код, время выполнения которого нужно измерить
alert( timer() );//  время в мкс от начала выполнения createTimer() до момента вызова timer()

/*2. Используя замыкания, создайте функцию createAdder(), которая принимает на вход 
любой примитивный параметр и возвращает функцию, которая добавляет к первому 
параметру второй. Функция работает по следующему принципу:

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 3 min*/

function createAdder(x) {
	return function(y) {
		return x + y;
	}
}

var hello = createAdder('Hello, ');
alert( hello('John') ); // Hello, John
alert( hello('Harry') ); // Hello, Harry

var plus = createAdder(5);
alert( plus(1) ); // 6
alert( plus(5) ); // 10