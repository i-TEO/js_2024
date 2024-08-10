"use strict"

const userAge = parseInt(prompt("Введіть ваш вік"))

if (userAge >= 0) {
	if (userAge <= 5) alert("Ви дитина у садочку!")
	else if (userAge <= 17) alert("Ви школяр!")
	else if (userAge <= 23) alert("Ви студент!")
	else if (userAge <= 60) alert("Ви працівник!")
	else if (userAge > 60) alert("Ви пенсіонер!")
} else alert("Некоректне введення!")
