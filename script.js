// elements
const header = document.querySelector('.header');
const about = document.getElementById('about');
const nav = document.querySelector('nav');

const navLi = document.querySelectorAll('.nav > li');
console.log(window.innerHeight);

// functions
function addSticky(e) {
    if (window.scrollY > about.offsetTop) {
        nav.classList.add('sticky');
        //document.body.style.marginTop = nav.offsetHeight + 'px';
        nav.style.opacity = 1;
    } else if (window.scrollY < about.offsetTop && window.scrollY > nav.offsetHeight) {
        nav.style.opacity = 0;
        nav.classList.remove('sticky');
    } else {
        document.body.style.marginTop = 0;
        nav.classList.remove('sticky');
        nav.style.opacity = 1;
    }
}

function togleActive(e) {
    function resetActive() {
        navLi.forEach(li => li.classList.remove('active'))
    };
    
    if (window.innerHeight > window.scrollY) {
        resetActive();
        navLi[0].classList.add('active');
    } else if (window.innerHeight < window.scrollY && window.scrollY < 2*window.innerHeight) {
        resetActive();
        navLi[1].classList.add('active');
    } else if (window.innerHeight < window.scrollY && window.scrollY < 3*window.innerHeight) {
        resetActive();
        navLi[2].classList.add('active');
    } else if (window.innerHeight < window.scrollY && window.scrollY < 4*window.innerHeight) {
        resetActive();
        navLi[3].classList.add('active');
    }

}

// events
window.addEventListener('scroll', addSticky);
window.addEventListener('scroll', togleActive);