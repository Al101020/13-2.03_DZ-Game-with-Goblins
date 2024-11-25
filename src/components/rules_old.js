// --------- поле
const arrayFields = Array.from(document.querySelectorAll('.field'));

let seconds = 0;

function secondsLimit() {
    seconds++;
    if (seconds === 5) {
        seconds = 0;
        document.querySelector('.lost').textContent++;
    }

    if (document.querySelector('.lost').textContent >= 5) {
        alert('Ты проиграл!');
        document.querySelector('.dead').textContent = 0;
        document.querySelector('.lost').textContent = 0;
    }

    if (document.querySelector('.dead').textContent >= 5) {
        alert('Ты выиграл!');
        document.querySelector('.dead').textContent = 0;
        document.querySelector('.lost').textContent = 0;
    }
    
    console.log(seconds);
}

let timerId = setInterval(secondsLimit, 1000);

for(let i = 0; i < arrayFields.length; i++){
    function poleClick() {

        if (document.getElementById('field' + [i + 1]).className == 'field field_goblin') {
            document.querySelector('.dead').textContent++;
            secondsLimit();
        } else if (document.getElementById('field' + [i + 1]).className == 'field') {
            document.querySelector('.lost').textContent++;
            secondsLimit();
        }
        
        seconds = 0;
    }

    document.getElementById('field' + [i + 1]).onclick = poleClick;
};

// --------- попал / промахнулся
console.log(document.querySelectorAll('span')[0]);
document.querySelectorAll('span')[0].classList = 'dead';

console.log(document.querySelectorAll('span')[1]);
document.querySelectorAll('span')[1].classList = 'lost';