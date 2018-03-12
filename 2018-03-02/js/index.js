/*1. Нарисуйте блок-схему, иллюстрирующую алгоритм приготовления чашечки чая.
 ET (Estimated Time) - 60 min
 AT (Actual Time) - min*/


/*2. Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # с помощью цикла for.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 13 min*/

for (i = 1, j = ''; i <= 11; i++) {
	if (i % 2) {
		j = j + '.';
	}
	else {
		j = j + '#';
	} 	
}
alert('Задание 2: \n' + j);

/*3. Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного 
значения счетчика.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 10 min*/

for (i = 1; i <=10; i++) {
	if (i % 2 == 0) {
	alert('Задание 3:\n' + (i * i));
	}
}

/*4. Напишите цикл с confirm, который продолжается при нажатии на Отмена и прерывается 
при нажатии на Ok.
 ET (Estimated Time) - 10 min
 AT (Actual Time) - 7 min*/

var conf = confirm('Задание 4: \nНажмите Отмена');
while (conf == false) {
	conf = confirm('Нажмите Отмена');
}

/*5. В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные 
числа до диапазона, введенного пользователем. Результат отобразите в окне alert.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 25 min*/

userNumber = +prompt('Задание 5: \nВведите число', '71');
for (number = 0, summ = 0; number <= userNumber; number++) {
	if (number % 2) {
		summ = summ + number;
	}
}
alert('Сумма нечетных чисел от единицы до Вашего числа (' + userNumber + ') равна: ' + summ);

/*6. Напишите бесконечный цикл, который прерывается при помощи команды break, 
когда Math.random() > 0.9. Выведите в окно alert случайное число, прервавшее цикл, 
и количество итераций цикла.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 7 min*/

for (iteration = 1; ; iteration++) {
	var random = Math.random();
	console.log(random);
	if (random > 0.9) break;
}
alert('Задание 6: \nСлучайное число прервавшее цикл: ' + random + ', количество итераций: ' + iteration);

/*7. Используя вложенные циклы, распечатайте на странице значения таблицы умножения: 
1х1=1, 1x2=2 ... 2x1=2, 2x2=4... 
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 11 min*/

var table = '';
for (var firstNumber = 1; firstNumber <= 10; firstNumber++) {
	for (var secondNumber = 1; secondNumber <= 10; secondNumber++) {
		var table = table + firstNumber + 'X' + secondNumber + '=' + firstNumber * secondNumber + ', ';
	}
}
alert('Задание 7: \n' + table);

/*8. Используя вложенные циклы, сформируйте строку чередованием символов . и # таким 
образом, чтобы получилась шахматный узор. Для перевода строки используйте символ \n. 
Код должен поддерживать легкое изменение размеров доски.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
#.#.#.#.#.#.
.#.#.#.#.#.#
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 42 min*/

stringQuantity = +prompt('Задание 8: \nВведите количество строк', '5');
rowQuantity = +prompt('Задание 8: \nВведите количество колонок', '12');
for (string = 1, picture = ''; string <= stringQuantity; string ++ ) {
	for (row = 1; row <= rowQuantity; row++) {	
		if(string % 2 && row % 2) {
			picture = picture + '.';
			}
		else if(string % 2 == 0 && row % 2) {
			picture = picture + '#';
			}
		else if(string % 2 && row % 2 == 0) {
			picture = picture + '#';
			}
		else if(string % 2 == 0 && row % 2 == 0) {
			picture = picture + '.';
			}
		else if(row == rowQuantity) {
			picture = picture + '\n';
			}
		}
	}
alert(picture);

/*9. С помощью цикла for с пустым телом сформируйте строку, представляющую из себя ряд 
Фибоначчи: 0 1 1 2 3 5 8 13... 
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 65 min*/

var fibStopCounter = +prompt('Задание 9: \nСколько чисел Вы хотите увидеть в ряду Фибоначчи?', '10'); 
var a = 0; 
var b = 1; 
var c = 0; 
var fibonacci = a + ' ' + b; 
for (var fibCounter = 2; fibCounter <= fibStopCounter; fibCounter++) {
	c = a + b;
	a = b;
	b = c;
	fibonacci = fibonacci + ' ' + c;
} 
alert(fibonacci);

/*10. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, 
до тех пор, пока не будет нажата Отмена. После выхода из цикла распечатайте количество 
введенных чисел, их общую сумму и среднее арифметическое.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 12 min*/

for (counter = 0, promptNumber = '', promptSumm = 0; ; counter++) {
	promptNumber = +prompt('Задание 10: \nВведите число');
	if (promptNumber == '') break;
	else {
		var promptSumm = promptSumm + promptNumber;
	}
}
alert('Вы ввели ' + counter + ' чисел, их сумма равна: ' + promptSumm + ', среднее арифметическое: ' + promptSumm / counter);

/*11. Сформируйте строку в виде треугольника-елочки:
.....#.....
....###....
...#####...
..#######..
.#########.
###########
 ET (Estimated Time) - 40 min
 AT (Actual Time) ~ 240 min*/

var rowQuantity = +prompt('Введите высоту ёлочки', '6');
for (var x = 1, o = rowQuantity - x, elka = ''; o >= 0 && x <= rowQuantity * 2 - 1; o--, x += 2) {
	elka = elka + '.'.repeat(o) + '#'.repeat(x) + '.'.repeat(o) + '\n';
}
console.log(elka);
alert(elka);