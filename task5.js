// Переписать консольное приложение из предыдущего юнита на классы.

// Общие требования:

// Имена классов, свойств и методов должны быть информативными.
// Соблюдать best practices.
// Использовать синтаксис ES6.

class Devices {
    constructor(name, power){
      this.name = name;
      this.power = power;
      this.activated = false;
    }
    // метод, который определяет прибор как включенный в розетку
    turnOn() {
      console.log(this.brand + " " + this.name + " is activated!");
      this.activated = true;
    }
    
    // метод, который определяет прибор как выключеный из розетки
    turnOff() {
      console.log(this.brand + " " + this.name + " is not activated!");
      this.activated = false;
    }
  }
  
  // Прибор 1 Колонка
  class Speaker extends Devices {
    constructor (name, brand, power, hasAuxPort) {
      super(name, power);
      this.brand = brand;
      this.hasAuxPort = hasAuxPort;
      this.activated = true;
    }
  }
  
  // Прибор 2 Микшер
  class Mixer extends Devices {
    constructor(name, brand, power, type, numChannels) {
      super(name, power); 
      this.brand = brand;
      this.type = type;
      this.numChannels = numChannels;
      this.activated = false;
    }
  }
  
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