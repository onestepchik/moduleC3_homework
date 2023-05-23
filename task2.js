// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false.

function checkPropInObj (str, obj) {
    return (str in obj);
}

// ПРОВЕРКА
const person = {
    city: "Kaliningrad"
  }

const worker = Object.create(person)
worker.skillLevel = 10

console.log(checkPropInObj("skillLevel",worker))
console.log(checkPropInObj("city",worker))
console.log(checkPropInObj("age",worker))



