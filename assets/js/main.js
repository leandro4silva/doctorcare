const nav = document.querySelector("nav")

function onScroll(){
    if(scrollY == 0){
        nav.classList.remove('scroll')
    }else{
        nav.classList.add('scroll')
    }
}