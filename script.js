//your JS code here. If required.
let inp = document.querySelector("#fname")
inp.addEventListener("blur", converted)
function converted(){
	let res = inp.value
	inp.value = res.toUpperCase();
}