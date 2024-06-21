const dateElements = document.querySelectorAll('.num, .num1, .num2, .num3, .num4');

function changeColorToOrange(event) {
    event.target.style.backgroundColor = '#F77600';
    event.target.style.color = 'white';
}

dateElements.forEach(element => {
    element.addEventListener('click', changeColorToOrange);
});
