function rotateRectangles() {
    let rectangle = document.querySelectorAll('.fin');
    rectangle.forEach(function(rect) {
        rect.style.transform = 'rotate(0deg)';
    });
}

function hoverRotate() {
    var rotateButton = document.getElementById('front-btn');
    var leftElements = document.querySelectorAll('.fin-l');
    var rightElements = document.querySelectorAll('.fin-r');
    rotateButton.addEventListener('mouseenter', function() {
        leftElements.forEach(function(element) {
            element.classList.add('rotate-l');
        });
        rightElements.forEach(function(element) {
            element.classList.add('rotate-r');
        });
    });
    
    rotateButton.addEventListener('mouseleave', function() {
        leftElements.forEach(function(element) {
            element.classList.remove('rotate-l');
        });
        rightElements.forEach(function(element) {
            element.classList.remove('rotate-r');
        });
    });
}

document.addEventListener('DOMContentLoaded', function() {
    rotateRectangles();
    hoverRotate()
});

window.addEventListener('load', function() {
    rotateRectangles();
});