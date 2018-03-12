/*1. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 8 min*/

var firstArray = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
var summ = 0;
for(var i = 0; i < firstArray.length; i++){
	if (isNaN(+firstArray[i]) == false) {
	    summ += +firstArray[i];
	    }
    }
alert('Задание 1:\nСумма всех чисел массива: ' + summ);


/*2. Сгенерируйте массив из N случайных чисел с двумя знаками после запятой. 
Затем переберите массив и распечатайте в консоли значения его элементов, возведенные 
в пятую степень, используя вложенные циклы.
 ET (Estimated Time) - 30 min
 AT (Actual Time) ~ 120 min*/

var N = +prompt('Задание 2: \nВведите количество случайных чисел в массиве', '2');
var secondArray = [];
for (var counter = 0; counter < N; counter++) {
	secondArray[counter] = (Math.random() * 100).toFixed(2);
}
console.log(secondArray);
var secondArray2 = secondArray.slice();
for (var counter2 = 0; counter2 < N; counter2++) {
	for (power = 2; power <= 5; power++) {
		secondArray2[counter2] = secondArray2[counter2] * secondArray[counter2];
	}
	console.log(secondArray2[counter2]);
}

/*3. Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода 
любых символов, полученное значение добавляйте в конец созданного массива. После выхода 
из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 9 min*/

var thirdArray = [];
var n = prompt('Задание 3:\nВведите длинну массива', '5');
for (var j = 0; j < n; j++) {
	thirdArray.push(prompt('Введите элемент массива', '6'))
}
var sum = 0;
for(var counter3 = 0; counter3 < thirdArray.length; counter3++){
	if (isNaN(+thirdArray[counter3]) == false) {
	    sum += +thirdArray[counter3];
	    }
    }
alert('Сумма всех чисел массива: ' + sum);

/*4. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
	a) Добавьте в начало массива значение ‘Backbone.js’
	b) Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
	c) Добавьте в массив значение ‘CommonJS’ вторым элементом
	d) Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами 
	“Это здесь лишнее”
 ET (Estimated Time) - 15 min
 AT (Actual Time) - 13 min*/

var framework = ['AngularJS', 'jQuery'];
framework.unshift('Backbone.js');
framework.push('ReactJS', 'Vue.js');
framework.splice(1, 0, 'CommonJS');
var deleted = framework.splice(framework.indexOf('jQuery'), 1);
alert('Задание 4: \nЭто здесь лишнее : ' + deleted);


/*5. Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской фонарь’. 
Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых 
методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и 
выведите в alert исходный и итоговый варианты.
 ET (Estimated Time) - 30 min
 AT (Actual Time) - 27 min*/

var jak = 'Как однажды Жак звонарь сломал городской фонарь';
var jakArr = jak.split(' ');
var city = jakArr.splice(jakArr.indexOf('городской'), 1);
jakArr.splice(4, 0, city);
var jak2 = jakArr.join(' ');
alert('Задание 5: \n' + jak + '\n' + jak2);

/*6. Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:
 ET (Estimated Time) -  30 min
 AT (Actual Time) - 45+120 min*/

var table = new Array(10);
for (var i = 0; i < 10; i++) {
	table[i] = new Array(10);
	for (var j = 0; j < 10; j++) {
		table[i][j] = i+1 + 'X' + (+j + 1) + '=' + (i+1) * (j+1) ;
	}
}
console.log(table);

/*7. Создайте ассоциативный массив person, описывающий персону, с произвольным количеством 
произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте 
свойства, прочитанного из prompt, и выведите его на экран. Если свойства нет, то 
добавляйте его в объект со значением, которое также запрашивается из prompt. 
 ET (Estimated Time) - 20 min
 AT (Actual Time) - 15 min*/

var person = {
	personName : 'Ivan',
	age : '5', 
	gender : 'female', 
	weight : '20',
};
var userKey = prompt('Задание 7: \nКакое свойство в person Вас интересует?', 'height');
if(userKey in person) {
	alert(person.userKey);
}
else {
	person.userKey = prompt('Данное свойство отсутствует, введите его', '116');
}


/*8. Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
прочитанными из prompt (например: brand, model, resolution, color...), не используя 
вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее. ET (Estimated Time) -  min
 AT (Actual Time) - 10 min
 AT (Actual Time) - 8 min*/

var phone = {
	brand : prompt('Задание 8: \nВведите брэнд Вашего телефона', 'Meizu'),
	model : prompt('Введите модель Вашего телефона', 'M5 Note'),
	color : prompt('Введите цвет Вашего телефона', 'Black'),
	resolution : prompt('Введите разрешение экрана Вашего телефона', '1920x1080'),
}
person.phone = phone;

/*9. Создайте объект dates для хранения дат. Первая дата – текущая, new Date. Вторая 
дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
Проверьте, попадает ли введенная дата в диапазон дат объекта dates. 
 ET (Estimated Time) - 30 min
 AT (Actual Time) - 40 min*/

var dates = {
	firstDate : new Date(),
	secondDate : new Date() - (365*24*60*60*1000),
}
var userDate = new Date(prompt('Задание 9: \nВведите дату в формате ГГГГ-ММ-ДД', '2018-01-01'))
if (userDate < dates.firstDate && userDate > dates.secondDate) {
	alert('Ваша дата входит в диапазон дат объекта dates.');
}
else {
	alert('Ваша дата не входит в диапазон дат объекта dates.');
}

/*10. Создайте структуру данных, полностью описывающую html-разметку картинки:
<img src="https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-
5134676388741120.3-law.gif" alt="" style="border: 1px solid #ccc" width="200" /> 
 ET (Estimated Time) - 5 min
 AT (Actual Time) - 2 min*/

var img = {
	src : "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
	alt : "",
	style : "border: 1px solid #ccc", 
	width : "200",
}

/*11. С помощью jQuery добавьте картинку на страницу вместе со всеми атрибутами, 
используя созданную ранее структуру. 
 ET (Estimated Time) - 20 min
 AT (Actual Time) - ~ 60 min*/

$ ("<img/>").attr({
	src : "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
	alt : "",
	style : "border: 1px solid #ccc", 
	width : "200",
}).appendTo("body>ol>li:last-child");