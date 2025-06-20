function toggle() {
    let button = document.getElementsByClassName('button')[0];
    let displayState = document.getElementById('extra');

    if(button.textContent === 'More') {
        displayState.style.display = 'block';
        button.textContent = 'LESS';
    }
    else if (displayState === 'block') {
        displayState.style.display = 'none';
        button.textContent = 'MORE';
    }
}