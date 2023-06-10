/* MENU SHOW Y HIDDEN */
const navMenu = document.getElementById('nav-menu'),
        navToggler = document.getElementById('nav-toggler'),
        navClose = document.getElementById('nav-closer')

/* MENU SHOW */
/* Validate if constant exists */
if(navToggler){
    navToggler.addEventListener('click', () =>{
        navMenu.classList.add('show-men');
    })
}

/* MENU HIDDEN */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE MENU MOBILE */
const navLink = document.getElementById('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu') //click on nav-link to remove show
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ACCORDION SKILLS */


/* QUALIFICATION TABS */


/* SERVICES MODAL */


/* PORTFOLIO SWIPER  */


/* TESTIMONIAL */


/* SCROLL SECTIONS ACTIVE LINK */


/* CHANGE BACKGROUND HEADER */ 


/* SHOW SCROLL UP */ 


/* DARK LIGHT THEME */ 