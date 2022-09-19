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
