const btnClear = document.getElementById('btnClear')
const header = document.getElementById('header')
const main = document.getElementById('main')
const headerBackBtn = document.getElementById('headerbackBtn')
const menulanguage = document.getElementById('menulanguage')
headerBackBtn.onclick = function () {
	header.classList.remove('header__isHidden')
}
const body = document.getElementById('body')
const menuHeader = document.getElementById('header-menu')

const settingsBtn = document.getElementById('sttings-menu')

settingsBtn.onclick = function () {
	menuHeader.classList.toggle('menu__setting')
}
btnClear.onclick = function () {
	header.classList.toggle('header__isHidden')
	main.classList.toggle('main-ishiden')
	btnClear.classList.toggle('header__clearbttnhiden')
}
const btnBack = document.getElementById('btnBack')

const menuClear = document.getElementById('btnClearMenu')

menuClear.onclick = function () {
	menuHeader.classList.toggle('menu__setting')
}

// dark mode:

let darkmode = localStorage.getItem('darkmode')
let swithact = localStorage.getItem('swithact')
const switchBtn = document.getElementById('switch')
const sttings = document.getElementById('sttings-menu')
const nthChild = document.getElementById('nth-child')

const enableDarkmode = () => {
	header.classList.toggle('header-dark')
	sttings.classList.toggle('header-dark-settingsbtn')
	nthChild.classList.toggle('nthchillink-dark')
	body.classList.toggle('body-dark')
	menuHeader.classList.toggle('menu__dark')

	localStorage.setItem('darkmode', 'active', 'swithact')
}
const disableDarkmode = () => {
	header.classList.remove('header-dark')
	sttings.classList.remove('header-dark-settingsbtn')
	nthChild.classList.remove('nthchillink-dark')
	body.classList.remove('body-dark')
	menuHeader.classList.remove('menu__dark')

	localStorage.setItem('darkmode', 'swithact', null)
}
if (darkmode === 'active') enableDarkmode()

switchBtn.addEventListener('click', () => {
	darkmode = localStorage.getItem('darkmode')

	darkmode !== 'active' ? enableDarkmode() : disableDarkmode()
	switchBtn.classList.toggle('active')
})
