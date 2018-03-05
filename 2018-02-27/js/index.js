/*1. Создайте три переменные с любыми числовыми значениями. Используя вложенные условные 
операторы if, найдите минимальное число и отобразите на экране имя переменной и ее значение. 
Создайте блок-схему, описывающую алгоритм работы программы.
 ET (Estimated Time) - 25 min + 2h
 AT (Actual Time) - 21 min*/

var firstNumber = +prompt('Задание 1: \nВведите три разных числа: \nПервое число (переменная firstNumber)', '0');
var secondNumber = +prompt('Второе число (переменная secondNumber)', '5');
var thirdNumber = +prompt('Третье число (переменная thirdNumber)', '-5');
if(isNaN(firstNumber) == true || isNaN(secondNumber) == true || isNaN(thirdNumber) == true) { alert('Вы ввели не число/числа');}
	else {
		if (firstNumber == secondNumber || firstNumber == thirdNumber || secondNumber == thirdNumber) {
			alert('Не все числа были разными')
		}
		else {
			if (firstNumber < secondNumber && firstNumber < thirdNumber) {
				alert('Минимальное первое число: ' + firstNumber + ', переменная firstNumber');
			}
			else {
				if (secondNumber < firstNumber && secondNumber < thirdNumber) {
					alert('Минимальное второе число: ' + secondNumber + ', переменная secondNumber');
				}
				else {
					alert('Минимальное третье число: ' + thirdNumber + ', переменная thirdNumber');
				}
			}
		}
	}

/*
var firstNumber = 2;
var secondNumber = 3;
var thirdNumber = 6;
if (firstNumber < secondNumber) {
	if (firstNumber < thirdNumber) {
		alert('firstNumber is min var with number ' + firstNumber);
	}
	else {
		if (secondNumber < firstNumber) {
			if (secondNumber < thirdNumber) {
				alert('secondNumber is min var with number ' + secondNumber);
			}
			else {
				if (thirdNumber < firstNumber) {
					if (thirdNumber < secondNumber) {
						alert('thirdNumber is min var with number ' + thirdNumber);
					}
				}
			}
		}
	}
}*/

/*2. В переменную x записывается число, введенное пользователем в диалоговое окно. Проверить 
и вывести на экран, x – отрицательное число, положительное или ноль.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 13 min*/

var x = +prompt('Задание 2: \nВведите число', '0');
if(isNaN(x) == true) { alert('Вы ввели не число');}
else {
	if (x < 0) { alert('Вы ввели отрицательное число');}
	if (x > 0) { alert('Вы ввели положительное число');}
	if (x == 0) { alert('Вы ввели ноль');}
}

/*3. У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. 
В зависимости от общей суммы ваших сбережений вы можете полететь на Майорку или выпить пива. 
С помощью условного оператора определите ваши возможности и отобразите на экране в alert.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 28 min*/

var myMoney = prompt('Задание 3: \nСколько у Вас денег', '$500');
var friendsMoney = prompt('Сколько денег у Вашего друга', '$700');
myMoney = +(myMoney.replace(/\D+/g,""));
friendsMoney = +(friendsMoney.replace(/\D+/g,""));
var sumMoney = myMoney + friendsMoney;
if(sumMoney >= 2500) 
	{ alert('Поздравляем, вы можете поехать на Майорку');
}
if(sumMoney >= 50 && sumMoney < 2500) 
	{ alert('К сожалению на Майорку вам не лететь, но вы можете очень не плохо попить пива в ближайшем пабе');
}
if(sumMoney < 50 && sumMoney >= 4 ) 
	{ alert('Майорка пока подождет, идите в АТБ за пивком');
}
if(sumMoney < 4 ) 
	{ alert('Какая Майорка?!! У вас даже на пиво нету! Сходите в парк подышать свежим воздухом и разработать план обогащения');
}


/*4. В переменную age запишите возраст человека. Если значение больше или равно 20 и 
меньше 27, в alert выводится “Выслать повестку”.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 6 min*/

var age = +prompt('Задание 4: \nВозраст мужчины', '25');
if(isNaN(age) == true) { alert('Возраст измеряется в числах!');}
else {
	if (age >= 20 && age < 27) {
		alert('Передайте ему повестку!');
	}
	else {
		alert('Он может спать спокойно!')
	}
}

/*5. Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255. Какая маршрутка 
приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 12 min*/

var busNumber = +prompt('Задание 5: \nВведите номер маршрутки', '225');
if(isNaN(busNumber) == true) { alert('Введите номер маршрута числом');}
else {
	if ( busNumber == 7 || busNumber == 225 || busNumber == 255 ) {
		alert('Вам подходит этот маршрут. Скорее садитесь пока не уехала!');
	}
	else {
		alert('Этот маршрут Вам не подходит. Подождите еще');
	}
}

/*6. В переменную day записан текущий день недели. Если это не суббота и не воскресенье, 
выведите в alert сентенцию о необходимости идти на работу.
 ET (Estimated Time) - 25 min
 AT (Actual Time) - 19 min*/

var day = prompt('Задание 6: \nВведите текущий день недели', 'Суббота').toUpperCase();
if(day !== 'ПОНЕДЕЛЬНИК' && day !== 'ВТОРНИК' && day !== 'СРЕДА' && day !== 'ЧЕТВЕРГ' && day !== 'ПЯТНИЦА' && day !== 'СУББОТА' && day !== 'ВОСКРЕСЕНИЕ') {
	alert('Введите день недели полностью и на русском языке')
}
else {
	if(day == 'СУББОТА' || day == 'ВОСКРЕСЕНИЕ') {
		alert('Отдохни, человек!');
	}
	else {
		alert('Оставим отдых на выходные, а пока бегом на работу!');
	}
}

/*7. Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции 
(регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. 
Используя switch, рассчитайте результат конвертации и выведите его в alert.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 30 min*/

var operation = prompt('Задание 7: \nВы хотите купить или продать $?', 'Купить').toUpperCase();
if(operation !== 'КУПИТЬ' && operation !== 'ПРОДАТЬ') {
	alert('Введите тип операции на русском языке');
}
else {
	var summ = prompt('Введите сумму $ для обмена', '100');
	if(isNaN(summ) == true) { alert('Введите сумму числом');}
	else {
		switch (operation) {
			case 'КУПИТЬ': price = summ * 26.8; break;
			case 'ПРОДАТЬ' : price = summ * 26.5;
		}
		alert('Сумма в обмена в гривнах составляет: ' + price + ' грн.');
	}
}
/*8. Создайте две переменные: greeting и lang. Переменная greeting – пустая строка. 
Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt). 
Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском 
языке, если имеет значение 'en' – то на английском, если 'de' – на немецком. 
Выведите на экран приветствие в зависимости от значения переменной lang. 
Решите задачу через if-else и через switch-case.
 ET (Estimated Time) - 30 min
 AT (Actual Time) - 23 min*/

var greeting = '';
var lang = prompt('Задание 8: \nВведите язык, на котором Вы говорите \(ru, en, de\)', 'ru').toUpperCase();
if(lang !== 'RU' && lang !== 'EN' && lang !== 'DE') {
	alert('Введите Ваш язык в указанном формате');
}
else {
	switch(lang) {
		case 'RU' : greeting = 'Здравствуйте!'; break;
		case 'EN' : greeting = 'Hello!'; break;
		case 'DE' : greeting = 'Guten Tag!'; 
	}
	alert(greeting);
}

//Второй способ

var greeting = '';
var lang = prompt('Задание 8 \(Второй вариант\): \nВведите язык, на котором Вы говорите \(ru, en, de\)', 'ru').toUpperCase();
if(lang !== 'RU' && lang !== 'EN' && lang !== 'DE') {
	alert('Введите Ваш язык в указанном формате');
}
else {
	if(lang == 'RU') {
		greeting = 'Здравствуйте!'; 
	}
	if(lang == 'EN') {
		greeting = 'Hello!';
	}
	if(lang == 'DE') {
		greeting = 'Guten Tag!';
	}	
	alert(greeting);
}


/*9. В переменной month хранится текущий месяц (new Date()). Определите в какую пору года 
попадает этот месяц (зима, лето, весна, осень).
 ET (Estimated Time) - 30 min
 AT (Actual Time) - 28min*/

var month = new Date(prompt('Задание 9: \nВведите дату в формате ГГГГ-ММ-ДД', '1988-04-02')).getMonth(), season;
if(isNaN(month) == true) { alert('Введите реальную дату в указанном формате');}
else { 
	switch (month) {
		case 11 || 0 || 1 : season = 'Зима'; break;
		case 2 || 3 || 4 : season = 'Весна'; break;
		case 5 || 6 || 7 : season = 'Лето'; break;
		case 8 || 9 || 10 : season = 'Осень'; 
	}
	alert('Введенная Вами дата относится к поре года ' + season);
}

//Нестабильно работает. Часто выкидывает на season значение 'undefined', не пойму в чем проблема, просьба помочь разобраться



/*10. Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает 
значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите 
название дня недели на русском языке в соответствии со значением переменной 
day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). 
Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 22 min*/

var lang = prompt('Задание 10: \nВведите язык, на котором Вы говорите \(ru, en\)', 'ru').toUpperCase();
if (lang !== 'RU' && lang !== 'EN' ) {
	alert('Введите Ваш язык в указанном формате');
}
else {
	var day = +prompt('Введите порядковый номер дня недели (от 0 до 6)', '1'), result;
	if (day < 0 || day > 6) {
		alert('Введите день недели в указанном формате');
	}
	else {
		if (lang == 'RU') {
			switch (day) {
				case 0 : result = 'Воскресение'; break;
				case 1 : result = 'Понедельник'; break;
				case 2 : result = 'Вторник'; break;
				case 3 : result = 'Среда'; break;
				case 4 : result = 'Четверг'; break;
				case 5 : result = 'Пятница'; break;
				case 6 : result = 'Суббота'; 
			}
			alert('Ваш день - ' + result);
		}
		else {
			switch (day) {
				case 0 : result = 'Sunday'; break;
				case 1 : result = 'Monday'; break;
				case 2 : result = 'Tuesday'; break;
				case 3 : result = 'Wednesday'; break;
				case 4 : result = 'Thursday'; break;
				case 5 : result = 'Friday'; break;
				case 6 : result = 'Saturday'; 
			}
			alert('Yor day is ' + result);
		}	
	}
}

/*11. Используя поиск по селекторам из раздела “Селекторы” справочника и jQuery-функцию css, 
задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. 
Последовательность команд:
Таблица расположена посредине страницы, расстояния между ее ячейками нет
Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
Фон в ячейках первых шести строк –#106B63
Фон в ячейках строк 7-9 –#E7C610
Фон в ячейках строк 10-12 – #C64A08
Фон в ячейках строк 13-15 –#B43100
Фон в ячейках всех оставшихся строк –#102173
У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, 
границы нет
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 30 min*/

$('#content table').css({
	'margin' : '0 auto',
	'border-spacing' : '0 0',
	'border-collapse' : 'collapse'
});
$('#content table td').css({
	'height' : '10px',
	'width' : '10px',
	'background-color' : '#eee',
	'border' : '1px solid #000'	
});

$('#content table tr:nth-child(-n+6) td').css('background-color', '#106B63');

$('#content table tr:nth-child(7) td, #content table tr:nth-child(8) td, #content table tr:nth-child(9) td').css('background-color', '#E7C610');

$('#content table tr:nth-child(10) td, #content table tr:nth-child(11) td, #content table tr:nth-child(12) td').css('background-color', '#C64A08');

$('#content table tr:nth-child(13) td, #content table tr:nth-child(14) td, #content table tr:nth-child(15) td').css('background-color', '#B43100');

$('#content table tr:nth-child(15) ~ tr td').css('background-color', '#102173');

$('.none').css({
	'background-color' : 'inherit',
	'border' : 'none'
});