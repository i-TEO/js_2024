"use strict"

const monthNumber = parseInt(prompt("Введіть номер місяця:"))

if (monthNumber < 1 || monthNumber > 12) alert("Некоректне введення!")
else {
	if (monthNumber === 12 || monthNumber <= 2) alert("Пора року: ЗИМА")
	else if (monthNumber <= 5) alert("Пора року: ВЕСНА")
	else if (monthNumber <= 8) alert("Пора року: ЛІТО")
	else if (monthNumber <= 11) alert("Пора року: ОСІНЬ")
}
