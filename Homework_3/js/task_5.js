"use strict"

let category = prompt("Введіть категорію водія (A, B, C):").toUpperCase()

//спробував перевірку на мову, якшо користувач введе українські букви
if (category === "A" || category === "А") alert("Ви можете керувати мотоциклом")
else {
	if (category === "B" || category === "В") alert("Ви можете керувати легковим автомобілем")
	else if (category === "C" || category === "С") alert("Ви можете керувати вантажним автомобілем")
	else alert("Невідома категорія")
}
