document.addEventListener('DOMContentLoaded', () => {
  
  const navPanel = document.querySelector(".navPanel");
  const menu = document.querySelector(".hamburgerMenu");
  const dropDown = document.querySelector(".navPanel")

  menu.addEventListener('click', () => {
    menu.classList.toggle('active')
    dropDown.classList.toggle('show')
  })

})




