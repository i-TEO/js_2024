"use strict"

let valueCm = parseFloat(prompt("Введіть довжину в сантиметрах", "0"))

let valueМ = valueCm / 100
let valueKm = valueCm / 100000
document.write(`
	<H2>ДЕ:</H2>
	<h3>Довжина в сантиметрах : ${valueCm}</h3>
		<H2>ВІДПОВІДЬ:</H2>
		<ul>
			<li>Довжина в метрах : ${valueМ}</li>
			<li>Довжина в кілометрах : ${valueKm}</li>
		</ul>
	`)
