// elements
const header = document.querySelector('.header');
const about = document.getElementById('about');
const nav = document.querySelector('nav');

const navLi = document.querySelectorAll('.nav > li a');


// Nav functions
function addSticky(e) {
    if (window.innerWidth > 768) {
        if (window.scrollY > about.offsetTop) {
            nav.classList.add('sticky');
            nav.style.opacity = 1;
        } else if (window.scrollY < about.offsetTop && window.scrollY > nav.offsetHeight) {
            nav.style.opacity = 0;
            nav.classList.remove('sticky');
        } else {
            nav.classList.remove('sticky');
            nav.style.opacity = 1;
        }
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

/* form firebase */
// Initialize Firebase
const config = {
    apiKey: "AIzaSyArxspwTvDHNj6JsvxHmD-C3wKxz7OZwhM",
    authDomain: "portfolio-14cfe.firebaseapp.com",
    databaseURL: "https://portfolio-14cfe.firebaseio.com",
    projectId: "portfolio-14cfe",
    storageBucket: "portfolio-14cfe.appspot.com",
    messagingSenderId: "103325106409"
    };
  firebase.initializeApp(config);

const messageRef = firebase.database().ref('messages');

const form = document.getElementById('form');
const formName = document.getElementById('form-name');
const formTitle = document.getElementById('form-title');
const formMessage = document.getElementById('form-message');
const success = document.querySelector('.modal .success');

form.addEventListener('submit', formVal);

function formVal(e) {
    e.preventDefault();
    const name = formName.value;
    const title = formTitle.value;
    const message = formMessage.value;

    pushMessage(name, title, message);

    success.style.display = 'block';
    form.style.display = 'none';
    setTimeout(() => { 
        success.style.display = 'none';
        form.style.display = 'flex';
    }, 8000);

    form.reset();
}

function pushMessage(name, title, message) {
    const messageObj = {
        name: name,
        title: title,
        message: message
    }
    const newMessage = messageRef.push(messageObj);
}

// events
window.addEventListener('scroll', addSticky);
window.addEventListener('scroll', togleActive);
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', closeModalEle);


