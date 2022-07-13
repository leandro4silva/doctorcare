window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    changeNavColorOnScroll();
    showBackToTopButton();
}

function changeNavColorOnScroll(){
    const nav = document.querySelector("nav")
    if(scrollY == 0){
        nav.classList.remove('scroll')
    }else{
        nav.classList.add('scroll')
    }
}

function showBackToTopButton(){
    if(scrollY > 400){
        backToTop.classList.add('show');
    }else{
        backToTop.classList.remove('show')
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