"use strict"

const minNumber = 1
const maxNumber = 5

const randomNumber = minNumber + Math.floor(Math.random() * maxNumber)

let userNumber = parseInt(prompt("Введіть число від 1 до 5"))

if (randomNumber === userNumber) alert("Вітаю ви відгадали число з першої спроби!")
else {
	userNumber = parseInt(prompt("Спробуйте ще раз. Введіть число від 1 до 5"))
	if (randomNumber === userNumber) alert("Вітаю ви відгадали число з другої спроби!")
	else alert("На жаль ви не відгадали число")
	document.write(`<h2>Правильна відповідь ${randomNumber} </h2>`)
}
