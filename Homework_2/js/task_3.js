"use strict"

let price = parseFloat(prompt("Введіть вартість товару в гривнях", "0"))
let amount = parseInt(prompt("Введіть кількість товару", "0"))

let totalPrice = price * amount
const pdvRate = 5
let totalPDV = (totalPrice * pdvRate) / 100
let totalPriceWithPDV = totalPDV + totalPrice

document.write(`
	<h2>ДЕ:</h2>
	<ul>
		<li>Ціна товару: ${price} грн.</li>
		<li>Кількість товару: ${amount} шт.</li>
	</ul>
	<h2>ВІДПОВІДЬ:</h2>
	<ul>
		<li>Загальна вартість: ${totalPrice} грн.</li>
		<li>ПДВ: ${pdvRate} %</li>
		<li>Вартість ПДВ від загальної суми: ${totalPDV} грн.</li>
		<li>Загальна вартість з ПДВ: ${totalPriceWithPDV} грн.</li>
	</ul>
	`)
