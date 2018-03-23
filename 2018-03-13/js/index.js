/*1. Создайте объект calculator с методами:
read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
sum() возвращает сумму этих двух значений
multi() возвращает произведение этих двух значений
diff() возвращает разницу
div() возвращает частное

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

 ET (Estimated Time) - 20 min
 AT (Actual Time) - 24 min*/

var calculator = {
	read: function() {
		this.x = +prompt('Задание 1: \nВведите первое число', '10');
		this.y = +prompt('Введите второе число', '20');
	},
	sum: function() {
		return 'Сумма чисел: ' + (this.x + this.y);
	},
	multi: function() {
		return 'Произведение чисел: ' + this.x * this.y;
	},
	diff: function() {
		return 'Разница чисел: ' + (this.x - this.y);
	},
	div: function() {
		return 'Частное чисел: ' + this.x / this.y;
	},
}


calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );
alert( calculator.diff() );
alert( calculator.div() );

/*2. Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом 
start(), при вызове которого – coffeeMachine.start() – через 3 секунды появляется окно с 
сообщением, записанным в свойстве объекта message.

 ET (Estimated Time) - 10 min
 AT (Actual Time) - 9 min*/

var coffeeMachine = {
	message: 'Your coffee is ready!',
	delay: 3000,
	start: function() {
		setTimeout (function() {
			alert(this.message);
		}.bind(this), this.delay);
	}
}

coffeeMachine.start();

/*3. Создайте функцию hello(), которая выводит приветствие пользователю. Создайте два объекта, 
содержащие поля firstname, lastname. Используя метод call и функцию hello() приветствуйте 
каждого из пользователей персонально.

 ET (Estimated Time) - 10 min
 AT (Actual Time) - 5 min*/

var hello = function(user) {
	alert('Hello, ' + this.firstname + ' ' + this.lastname + '!');
}

var user1 = {
	firstname: 'John',
	lastname: 'Doe'
};

var user2 = {
	firstname: 'Jane',
	lastname: 'Doe'
};

hello.call(user1);
hello.call(user2);

/*4. Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом 
возврата текущего значения. Используйте концепцию chaining для создания цепочки вызовов.

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

 ET (Estimated Time) - 20 min
 AT (Actual Time) - 12 min*/

var counter = {
	value: 0,
	inc: function() {
		this.value += 1;
		return this;
	},
	dec: function() {
		this.value -= 1;
		return this;
	},
	getValue: function() {
		return this.value;
	}
}

var current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

/*5. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы 
объекта ничего не реализуют, а только выводят в alert сообщения 
вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал 
ранее созданного калькулятора.

alert(me.getSum(1, 1));
alert(me.getDiv(1, 0));

 ET (Estimated Time) - 30 min
 AT (Actual Time) ~ 100 min*/

var calculator = {
	sum: function() {
		return (this.x + this.y);
	},
	multi: function() {
		return this.x * this.y;
	},
	diff: function() {
		return (this.x - this.y);
	},
	div: function() {
		return this.x / this.y;
	},
}

var me = {
	x: +prompt('Задание 5: \nВведите первое число', '50'),
	y: +prompt('Введите второе число', '50'),
	getSum: function(x, y) { 		
		if (x !== undefined) {
			var result = x + y;
			return x + ' + ' + y + ' = ' + result;
		}				
		else {
			var sum = calculator.sum;
			result = sum.call(this);			
			return this.x + ' + ' + this.y + ' = ' + result;
		}
	},
	getDiff: function(x, y) { 		
		if (x !== undefined) {
			var result = x - y;
			return x + ' - ' + y + ' = ' + result;
		}			
		else {
			var diff = calculator.diff;
			result = diff.call(this);
			return this.x + ' - ' + this.y + ' = ' + result;
		}
	},
	getDiv: function(x, y) { 		
		if (x !== undefined) {
			var result = x / y;
			return x + ' / ' + y + ' = ' + result;
		}			 
		else {
			var div = calculator.div;
			result = div.call(this);	
			return this.x + ' / ' + this.y + ' = ' + result;		
		}
		
	},
	getMulti: function(x, y) { 		
		if (x !== undefined) {
			result = x * y;
			return x + ' x ' + y + ' = ' + result;
		}			
		else {
			var multi = calculator.multi;
			result = multi.call(this);
			return this.x + ' x ' + this.y + ' = ' + result;
		}
	}	
}

alert(me.getSum());
alert(me.getDiv(4,2));
alert(me.getDiff(2,5));
alert(me.getMulti());

/*6. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием 
только рекурсии:

console.log( sum(1, 2, 3, 4, 5) ); // 15

 ET (Estimated Time) - 20 min
 AT (Actual Time) ~ 180 min*/

function sum(a, b, ...rest) {
	if (a && b) {
		return sum(a + b, ...rest);
	}
	else {
		return a;
	}
}

console.log( sum(1, 2, 3, 4, 5) );


function sum(a, b, ...rest) {
        if (arguments.length >= 2) {
            let c = a + b;            
            return sum(c, ...rest);
        } 
        else {
            return a;
        }
    }

console.log( sum(1, 2, 3, 4, 5) );

/*7. Создайте объект со свойством delay и методами appendTo и appendText. Метод appendTo 
с помощью jQuery добавляет абзац в контейнер, переданный в параметре метода. 
Метод appendText может дописывает текст в добавленный элемент. Создайте массив строк и 
запустите цикл по этому массиву. С периодичностью, определенной в свойстве delay, 
в текст добавленного html-элемента добавляется соответствующий по порядку элемент массива. 
Учтите, что для доступа к вашему элементу не должен производиться поиск по DOM-дереву. 

 ET (Estimated Time) - 40 min
 AT (Actual Time) ~ 300 min*/

var $par = '';
var textAdder = {
	delay: 500,
	appendTo: function(way) {
		$par = $('<p>').appendTo(way).css({
			border: '1px solid red', 
			fontWeight: 'bold',  
			display: 'inline-block'
		});
	},
	appendText: function(text) {
		var text = text.split('');		   
		for (i = 0; i < text.length; i++) {
      		let letter = text[i];
			setTimeout (function()  {
				$('<span>').text(letter).appendTo($par);
			}, this.delay * i);	
		}
	},
}

textAdder.appendTo('#textAdder');
textAdder.appendText('Каждый охотник желает знать где сидит фазан');


/*8. Есть следующий код:
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:

format.call( Ваш код ); // Ukraine
format.apply( Ваш код ); // [Ukraine]
format.call( Ваш код ); // Kyiv
format.apply( Ваш код ); // Kyiv
format.apply( Ваш код ); // undefined

 ET (Estimated Time) - 20 min
 AT (Actual Time) - 30 min*/

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call( country, '', '' ); // Ukraine
format.apply( country, ['[', ']'] ); // [Ukraine]
format.call( country.capital, '', '' ); // Kyiv
format.apply( country.capital, ['', ''] ); // Kyiv
format.apply( country.name, ['', ''] ); // undefined

/*9. Создайте объект user с полем name. Создайте функцию format с параметрами start и end:

function format(start, end) {
    console.log(start + this.name + end);
}

Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал 
отформатированное имя пользователя

userFormat('<<<', '>>>'); // <<<John>>>

Реализуйте 2 версии текущего задания, используя:
1. Анонимную функцию;
2. Метод bind().

 ET (Estimated Time) - 30 min
 AT (Actual Time) -  min*/

/*1)*/

var user = {
	name: 'John'
}

function format(start, end) {
    console.log(start + this.name + end);
}

var userFormat = function(start,end){
	format.apply(user,[start,end])
}

userFormat('<<<', '>>>'); // <<<John>>>


/*2)*/

var user = {
	name: 'John'
}

function format(start, end) {
    console.log(start + this.name + end);
}

var userFormat = format.bind(user);

userFormat('<<<', '>>>'); // <<<John>>>

/*10. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую 
функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:

hello('World'); // Hello World
hello('John'); // Hello John

 ET (Estimated Time) - 20 min
 AT (Actual Time) - 30 min*/

var concat = function( string1, separator, string2) {
	return alert(string1 + separator + string2);
}

var hello = concat.bind(null, 'Hello', ' ');


hello('World'); // Hello World
hello('John'); // Hello John