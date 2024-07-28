"use strict"

let numOne = parseFloat(prompt("Введіть перше число", "0"))
let numTwo = parseFloat(prompt("Введіть друге число", "0"))

let sum = numOne + numTwo
let mult = numOne * numTwo
let div = numOne / numTwo

document.write(`
	<h2>ДЕ:</h2>

<table border="2px">
	<tr>
		<th>Перше число</th>
		<th>${numOne}</th>
	</tr>
	<tr>
		<th>Друге число</th>
		<th>${numTwo}</th>
	</tr>
</table>

<h2>ВІДПОВІДЬ:</h2>
<table border="2px">

	<tr>
		<th>Шуканий результат</th>
		<th>Отримане значення</th>
	</tr>
	<tr>
		<th>Сума</th>
		<th>${sum}</th>
	</tr>
	<tr>
		<th>Добуток</th>
		<th>${mult}</th>
	</tr>
	<tr>
		<th>Частка</th>
		<th>${div}</th>
	</tr>
</table>

	`)
