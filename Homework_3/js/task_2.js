"use strict"

let priceProduct = parseFloat(prompt("Вкажіть ціну товару", "0.00"))
let amountMoney = parseFloat(prompt("Кількість грошей", "0.00"))

const priceLotteryTicket = 4

if (priceProduct <= amountMoney) {
	if (priceProduct + priceLotteryTicket <= amountMoney) alert("Пропонуємо вам лотерейний квиток")
	else alert("Дякуємо за покупку")
} else alert("Відмова в покупці")
