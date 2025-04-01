const translateBtn = document.getElementById('languegeBtn')
const rotetIco = document.getElementById('rotetIco')

translateBtn.onmouseover = function () {
	rotetIco.classList.toggle('rotet-ttr-active')
}

translateBtn.onmouseout = function () {
	rotetIco.classList.remove('rotet-ttr-active')
}
