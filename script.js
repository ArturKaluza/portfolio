// elements
const header = document.querySelector('.header');
const about = document.getElementById('about');
const nav = document.querySelector('nav');

const navLi = document.querySelectorAll('.nav > li a');


// Nav functions
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

function resetActive() {
    navLi.forEach(li => li.classList.remove('active'))
};

function togleActive(e) {
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

// Modal
//modal button element
const modalBtn = document.getElementById('modal');

// modal element
const modal = document.querySelector('.modal');
// modal close button
const closeBtn = document.querySelector('.closeBtn');
const modalContent = document.querySelector('.modal-content');



function openModal() {
    modal.style.display = 'flex';
    resetActive();
    navLi[4].classList.add('active');
}

function closeModal() {
    modal.style.display = 'none';
    resetActive();
}

function closeModalEle(e){
    if (e.target == modal) {
        modal.style.display = 'none';
        resetActive();
    }
}

// events
window.addEventListener('scroll', addSticky);
window.addEventListener('scroll', togleActive);
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeModalEle);


/* sklills animation */
/*
const html5 = document.getElementById('html5');
console.log(html5);
html5.addEventListener('transitionend', () => {
    html5.innerHTML = `<p>coś tam coś tam</p>`;
})
html5.addEventListener('mouseout', () => {
    html5.innerHTML = `<figure>
    <svg viewBox="0 0 128 128">
        <path fill="#E44D26" d="M27.854 116.354l-8.043-90.211h88.378l-8.051 90.197-36.192 10.033z"></path><path fill="#F16529" d="M64 118.704l29.244-8.108 6.881-77.076h-36.125z"></path><path fill="#EBEBEB" d="M64 66.978h-14.641l-1.01-11.331h15.651v-11.064h-27.743l.264 2.969 2.72 30.489h24.759zM64 95.711l-.049.013-12.321-3.328-.788-8.823h-11.107l1.55 17.372 22.664 6.292.051-.015z"></path><path fill="#fff" d="M63.962 66.978v11.063h13.624l-1.284 14.349-12.34 3.331v11.51l22.682-6.286.166-1.87 2.6-29.127.27-2.97h-2.982zM63.962 44.583v11.064h26.725l.221-2.487.505-5.608.265-2.969z"></path>
    </svg>
    <figcaption>html 5</figcaption>
</figure>`;
})
*/

/*
html5.addEventListener('transitionend', () => {
    ;
})
*/