"use strict"

let a = parseFloat(prompt("Введіть число a", "0"))
let b = parseFloat(prompt("Введіть число b", "0"))
let c = parseFloat(prompt("Введіть число c", "0"))
let s1 = a + 12 + b
let s2 = Math.sqrt((a + b) / (2 * a))
let s3 = Math.cbrt((a + b) * c)
let s4 = Math.sin(a / -b)
document.write(`
	<h2>ДЕ:</h2>
	<ul>
			<li>a = ${a}</li>
			<li>b = ${b}</li>
			<li>c = ${c}</li>
		</ul>
	<h2>ВІДПОВІДЬ:</h2>
	<ol>
		<li>s1 = ${s1}</li>
		<li>s2 = ${s2}</li>
		<li>s3 = ${s3}</li>
		<li>s4 = ${s4}</li>
	</ol>
	`)
