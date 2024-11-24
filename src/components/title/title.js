import "./title.css";

function createH3(textTitle) {
    const divStatus = document.createElement('h3');
    divStatus.classList = 'status';
    divStatus.innerHTML = textTitle;
    document.querySelector('body').prepend(divStatus);
}

createH3('Промахов: <span>0</span><br>');
createH3('Попаданий: <span>0</span><br>');


function createH1(textTitle) {
    const titleH1 = document.createElement('h1');
    titleH1.classList = 'titleH1';
    titleH1.textContent = textTitle;

    document.querySelector('body').prepend(titleH1);
}

createH1('Игра с гоблинами');

