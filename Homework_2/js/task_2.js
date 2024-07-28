"use strict"

const birthYear = parseInt(prompt("Введіть рік народжуння", "YYYY"))
const currentYear = 2024

let age = currentYear - birthYear

document.write(`
	<h2>ДЕ:</h2>
	<ul>
		<li>Рік народження: ${birthYear} рік</li>
		<li>Поточний рік: ${currentYear} рік</li>
	</ul>
	<h2>ВІДПОВІДЬ: ${age} років</h2>
	`)
