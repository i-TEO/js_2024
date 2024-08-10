"use strict"
//Перший товар
let priceProductOne = parseFloat(prompt("Введіть ціну першого товару :", "0"))
let amountProductOne = parseFloat(
	prompt("Введіть кількість першого товару:", "0")
)
let totalPriceProductOne = priceProductOne * amountProductOne
//Другий товар
let priceProductTwo = parseFloat(prompt("Введіть ціну другого товару :", "0"))
let amountProductTwo = parseFloat(
	prompt("Введіть кількість другого товару:", "0")
)
let totalPriceProductTwo = priceProductTwo * amountProductTwo
//Третій товар
let priceProductThree = parseFloat(
	prompt("Введіть ціну третього товару :", "0")
)
let amountProductThree = parseFloat(
	prompt("Введіть кількість третього товару:", "0")
)
let totalPriceProductThree = priceProductThree * amountProductThree
//Загальна сума
let totalSum =
	totalPriceProductOne + totalPriceProductThree + totalPriceProductThree

document.write(`
		<h2>ВІДПОВІДЬ:</h2>
		<ul>
			<li>Перший товар : ${priceProductOne} грн. * ${amountProductOne} шт. = ${totalPriceProductOne} грн.</li>
			<li>Другий товар : ${priceProductTwo} грн. * ${amountProductTwo} шт. = ${totalPriceProductTwo} грн.</li>
			<li>Третій товар : ${priceProductThree} грн. * ${amountProductThree} шт. = ${totalPriceProductThree} грн.</li>
		</ul>
		<h3>Загальна вартість : ${totalSum} грн.</h3>
		`)
