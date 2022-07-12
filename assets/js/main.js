const nav = document.querySelector("nav")

function onScroll(){
    if(scrollY == 0){
        nav.classList.remove('scroll')
    }else{
        nav.classList.add('scroll')
    }
}

function openMenu(){
    document.body.classList.add('menu-expanded')
}

function closeMenu(){
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
}).reveal(`#home, #home img, #home .stats, 
           #services, #services header, #services service-item,
           #about, #about img,
           #contact, #contact img,
           footer`);