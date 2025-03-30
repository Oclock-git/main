const btnClear = document.getElementById('btnClear')
const header = document.getElementById('header')
const main = document.getElementById('main')

btnClear.onclick = function () {
	header.classList.toggle('header__isHidden')
	main.classList.toggle('main-ishiden')
	btnClear.classList.toggle('header__clearbttnhiden')
}
const btnBack = document.getElementById('btnBack')
