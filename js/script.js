const navBtn = document.querySelector('.hamburger')
const navToggle = document.querySelector('.nav__items')

const handleNav = () => {
	navBtn.classList.toggle('is-active')
	navToggle.classList.toggle('nav__mobile--active')
}

navBtn.addEventListener('click', handleNav)
