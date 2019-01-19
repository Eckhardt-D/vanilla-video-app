// Menu toggler animation
let toggler = document.querySelector('.menu-toggle')
let toggled = false

toggler.addEventListener('click', e => {
  if(!toggled) {
    toggler.childNodes[1].style.transform = 'rotate(45deg) translateY(3px)'
    toggler.childNodes[1].style.transition = '250ms all ease-in-out'
    toggler.childNodes[3].style.display = 'none'
    toggler.childNodes[5].style.transform = 'rotate(-45deg) translateY(-3px)'
    toggler.childNodes[5].style.transition = '250ms all ease-in-out'
    document.querySelector('.slideout-menu').classList.remove('closed')
    document.querySelector('.slideout-menu').classList.add('open')
  } else {
    toggler.childNodes[1].style.transform = ''
    toggler.childNodes[3].style.display = 'block'
    toggler.childNodes[5].style.transform = ''
    document.querySelector('.slideout-menu').classList.add('closed')
    document.querySelector('.slideout-menu').classList.remove('open')
  }
  toggled = !toggled
})
