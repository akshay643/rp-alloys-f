function menuToggle() {
  var nav = document.getElementById('nav')
  var toggle = document.getElementById('toggle')
  nav.classList.toggle('active')
  toggle.classList.toggle('active')
  console.log('clicked')
}

function scollToTop() {
  document.body.scrollTop = document.documentElement.scrollTop = 0
}

//

let slideIndex = 0
showSlides()

function showSlides() {
  let i
  let slides = document.getElementsByClassName('s2-slides')
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none'
  }
  slideIndex++
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = 'block'
  setTimeout(showSlides, 3000) // Change image every 2 seconds
}
