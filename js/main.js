const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById ('pop_up_close');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
})


const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
const newAlbum = '26 Feb 2022'

function countdown () {
    const newAlbumDate = new Date (newAlbum);
    const currentDate = new Date();

    const totalseconds = (newAlbumDate - currentDate)/1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60 ) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time <10? '0' + time:time;
}

countdown()
setInterval(countdown,1000);



