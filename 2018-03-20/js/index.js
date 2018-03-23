/*ООП в функциональном стиле
Создайте базовый класс Figure, который будет хранить координаты (x, y) и цвет фигуры. 
На базе класса Figure создайте три класса – Line, Rect, Circle, каждый из которых 
создает соответствующую фигуру. Пример создания экземпляров каждого класса и параметры 
фигур:

var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

Все три класса-наследника имеют метод draw для рисования фигуры с соответствующими 
параметрами (координаты, размеры, цвет).

Фигуры рисуются на Canvas. Для рисования на канвасе создайте еще один 
класс – Canvas, в котором инициализируется элемент <canvas> из DOM. 
Класс Canvas – final, он не наследуется. В этом классе есть метод add, 
который и отображает созданные вами фигуры на странице. Обратите внимание, 
добавлять фигуры на канвас можно как по отдельности, так и списком.

var drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect);

<canvas id="canvasID"></canvas>*/


function Figure(x, y, color) {
	this.x = x;
	this.y = y;
	this.color = color;
	this.draw = function(x, y, color) {
		context.fillStyle = this.color;
	}

};

function Line(x1, y1, x2, y2, color) {
	Figure.call(this, null, null, color);
	this.x1 = x1;
	this.x2 = x2;
	this.y1 = y1;
	this.y2 = y2;
	this.draw = function() {
		context.beginPath();
        context.moveTo(this.x1, this.y1);
        context.lineTo(this.x2, this.y2);
        context.lineWidth = 2; // толщина линии
        context.strokeStyle = this.color; // цвет линии
        context.stroke();
	}
}

function Circle(x, y, r, color) {
	Figure.call(this, x, y, color);
	this.r = r;
	this.draw = function(x, y, r, color) {
		context.beginPath();
		context.arc(this.x, this.y, this.r, 0,2 * Math.PI);
		context.lineWidth = 2; // толщина линии
        context.strokeStyle = this.color; // цвет линии
        context.stroke();
	}
}

function Rect(x, y, w, h, color) {
	Figure.call(this, x, y, color);
	this.w = w;
	this.h = h;
	this.draw = function(x, y, w, h, color) {
		context.beginPath();
		context.rect(this.x, this.y, this.w, this.h);
		context.fillStyle = this.color;
		context.strokeStyle = this.color;		
		context.stroke();
	}
}

function Canvas() {
	canvas = document.getElementById("picture");
    canvas.width = 500; // задаём ширину холста
    canvas.height = 300; // задаём высоту холста
    context = canvas.getContext('2d');
    this.add = function(figure1, figure2, ...rest) {
    	var figures = arguments;
    	for (i = 0; i < figures.length; i++) {
    		figures[i].draw();
    	}
    };
}


//-------------------------------------------------



var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

var drawArea = new Canvas('#picture');
drawArea.add(line);
drawArea.add(circle, rect);


/*Еще доработаю на выходных*/