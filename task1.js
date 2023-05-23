// Написать, функцию, которая принимает в качестве аргумента
// объект и выводит в консоль все ключи и значения только собственных свойств.
// Данная функция не должна возвращать значение.

function printAllObjects (obj) {
    for (let property in obj) {
      if (obj.hasOwnProperty(property)) {
        console.log(property, obj[property]);
      }
    }
  }

// ПРОВЕРКА
const person = {
  city: "Kaliningrad"
}
const worker = Object.create(person)
worker.skillLevel = 10
printAllObjects(worker)
