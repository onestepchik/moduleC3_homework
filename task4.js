// Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.

// Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

// Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает.

// План:

// Определить родительскую функцию с методами, которые включают/выключают прибор из розетки.
// Создать делегирующую связь [[Prototype]] для двух конкретных приборов.
// У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов.
// Создать экземпляры каждого прибора.
// Вывести в консоль и посмотреть результаты работы, гордиться собой :)
// Общие требования:

// Имена функций, свойств и методов должны быть информативными
// Соблюдать best practices:
// использование camelCase нотации для переменных и методов, PascalCase — для названий функций-конструкторов и классов;
// информативные имена;
// четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
// использование синтаксиса ES6 (кроме функции-конструкторов) и т.д.

function Devices(name, power) {
    this.name = name;
    this.power = power;
    this.activated = false;
}

// метод, который определяет прибор как включенный в розетку
Devices.prototype.turnOn = function() {
    console.log(this.brand + " " + this.name + " is activated!");
    this.activated = true;
};

// метод, который определяет прибор как выключеный из розетки
Devices.prototype.turnOff = function() {
    console.log(this.brand + " " + this.name + " is not activated!");
    this.activated = false;
};

// Прибор 1 Колонка
function Speaker(name, brand, power, hasAuxPort) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.hasAuxPort = hasAuxPort;
    this.activated = true;
}

Speaker.prototype = new Devices();

// Прибор 2 Микшер
function Mixer(name, brand, power, type, numChannels) {
    this.name = name;
    this.brand = brand;
    this.power = power;
    this.type = type;
    this.numChannels = numChannels;
    this.activated = false;
}

Mixer.prototype = new Devices();

// экземпляр колонки
const speaker = new Speaker("300 Party Box","JBL","200",true)

// экземпляр микшера
const mixer = new Mixer("10 Pro X","Presonus", "150", "Stereo Mixer", 10)

// отключить выключить колонку из розетки
speaker.turnOff();

// включить микшер в розетку
mixer.turnOn();

// результат
console.log(speaker)
console.log(mixer)