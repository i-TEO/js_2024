"use strict"

let firstChildName = prompt("Ім'я першої дитини:", "Настя")
let candyCountChildOne = parseInt(prompt(`Кількість цукерок в дитини:`, "10"))
let secondChildName = prompt("Ім'я другої дитини :", "Діма")
let candyCountChildTwo = parseInt(prompt("Кількість цукерок в дитини:", "20"))

if (candyCountChildOne > candyCountChildTwo) alert(firstChildName)
else {
	if (candyCountChildOne === candyCountChildTwo) alert(`Однакова кількість цукерок`)
	else alert(secondChildName)
}
