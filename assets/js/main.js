window.addEventListener('scroll', onScroll)
onScroll()

function onScroll(){
    changeNavColorOnScroll();
    showBackToTopButton();
    activateMenuAtCurrentSection(home);
    activateMenuAtCurrentSection(services);
    activateMenuAtCurrentSection(about);

}

function activateMenuAtCurrentSection(section){
    //linha ao meio da tela
    const targetLine = scrollY + (innerHeight / 2);

    //topo da section
    const sectionTop = section.offsetTop

    //altura da section
    const sectionHeight = section.offsetHeight 

    //onde a section termina
    const sectionEndAt = sectionTop + sectionHeight

    //topo da section chegou ou ultrapassou a linha ao meio da tela
    const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop && targetLine <= sectionEndAt

    const menuElement = document.querySelector(`.menu a[href*=${section.getAttribute('id')}]`)

    menuElement.classList.remove('active')
    if(sectionTopReachOrPassedTargetLine){
        menuElement.classList.add('active')
    }
    
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