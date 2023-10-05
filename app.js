                                // *******CHANGE HEADER BACKGROUND*********
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('scroll-header') 
                       : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
                                //*************SWIPER STUFF************************
let swiper = new Swiper(".mySwiper", {
spaceBetween: 121,//32,
 grabCursor: true,
 centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
   prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1024: {
      spaceBetween: 70,
    },
  },
  });
  //**********SCROLL SECTIONS AND ACTIVE LINKS */
  const sections = document.querySelectorAll('section[id]')
    
  const scrollActive = () =>{
      const scrollDown = window.scrollY
  
    sections.forEach(current =>{
      const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.menu a[href*=' + sectionId + ']')
  
      if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
      }else{
        sectionsClass.classList.remove('active-link')
      }                                                    
    })
  }
  window.addEventListener('scroll', scrollActive)
  //show scroll
  const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
      // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
  }
  window.addEventListener('scroll', scrollUp)
  //DARK THEME
  const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-fill' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-fill' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true

})
sr.reveal('.home-data, .products__container, .footer-container, .footer-information')
sr.reveal('.home-image', {delay: 600, origin: 'bottom'})
sr.reveal('.new-card, .brand-image', {interval:100})
sr.reveal(' .collection-explore:nth-child(1)', {origin: 'right'})
sr.reveal(' .collection-explore:nth-child(2)', {origin: 'left'})