// Set First Image as OG Image
let firstImage = document.querySelector('main img')
let metaImage = document.querySelector('#meta-image')
metaImage.content = firstImage.src

// Tab Layout Configuration

const tabClick = ({ target }) => {
    const { dataset: { id = '' }} = target;
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('selected'))
    target.classList.add('selected')
    document.querySelectorAll('.tab-panel').forEach(t => t.classList.add('hidden'))
    document.querySelector(`#${id}`).classList.remove('hidden')
    location.hash = id
}

const bindTabs = () => {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', tabClick)
  })
}

function loadTab() {
  if (location.hash) {
    let noNash = location.hash.substring(1)
    document.querySelectorAll('.tab')[0].classList.remove('selected')
    document.querySelector(`div[data-id="${noNash}"]`).classList.add('selected')
    document.querySelectorAll('.tab-panel')[0].classList.add('hidden')
    document.querySelector(location.hash).classList.remove('hidden')
  }
}

// Belts and braces, lets ensure our DOM is loaded and only assign click to the `tabs`
document.addEventListener('DOMContentLoaded', () => {
  bindTabs()
})

// Calculate Blog Readtime
if (document.querySelector('.readtime')) {
  let readTime = document.querySelector('.readtime')
  let amount = readTime.textContent
  amount /= 200
  let remainder = amount - Math.floor(amount)
  let min = 'min read'
  amount = Math.floor(amount)
  if (remainder > 0.49) {
    amount += 1
  }
  readTime.textContent = `${amount} ${min}`
}

// Fix Footer if no Scrollbars
if (!(document.body.scrollHeight > document.body.clientHeight)) {
  let footer = document.querySelector('.footer')
  footer.style.position = 'fixed'
  footer.style.bottom = 0
}

// Link to Homepage CTA if no CTA
if (!(document.querySelector('#start-a-project-wrap'))) {
  let startMobile = document.querySelector('#start-project-button-mobile')
  let startDesktop = document.querySelector('#start-project-button-desktop')
  startMobile.href = '/#start-a-project'
  startDesktop.href = '/#start-a-project'
}

// Close sidebar menu when clicking Form Link

function startProject() {
  document.querySelector('#open-sidebar-menu').checked = false
  return true
}

// Prevent form submission, show submit message

var formSubmit = document.querySelector("#start-a-project-form")

if(typeof(formSubmit) != 'undefined' && formSubmit != null) {
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = formSubmit
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => true).catch((error) =>
    alert(error))
    document.querySelector("#start-a-project-form").style.display = "none"
    document.querySelector("#submit-message").style.display = "block"
  }

  formSubmit.addEventListener("submit", handleSubmit);
}

// Color Mode Toggle

document.querySelector("#mode-toggle").addEventListener("click", function(event) {
  colorToggle(true)
}, false)

  function colorToggle(changePref) {
    if (changePref) {
      if (localStorage.darkMode === 'true') {
        localStorage.setItem('darkMode','false')
      } else {
        localStorage.setItem('darkMode','true')
      }
    }

  // Color Mode Icon
  document.querySelector("#mode-toggle").classList.toggle("show-moon")
  document.querySelector("#mode-toggle").classList.toggle("show-sun")

  // Toggle Dark Class on Body
  document.body.classList.toggle("dark")

  // Nav Logo Coloration
  document.querySelector(".logo-light").classList.toggle("hide")
  document.querySelector(".logo-dark").classList.toggle("hide")

  // Footer Logo Coloration
  document.querySelector(".footer-logo-light").classList.toggle("hide")
  document.querySelector(".footer-logo-dark").classList.toggle("hide")

}

window.onload = () => {
  if (document.querySelector('.tab')) {
    loadTab()
  }

  if (localStorage.getItem('darkMode') === 'true') {
    colorToggle(false)
  }
  let aboutRob = document.querySelector('#about-us-wrap > div > div.about-text > div > h2')
  if(typeof(aboutRob) != 'undefined' && aboutRob != null) {
    if (aboutRob.textContent === "Rob Petrin") {
      document.querySelector('#rob-linkedin').style.display = "block"
      document.querySelector('#rob-twitter').style.display = "block"
    }
  }
}