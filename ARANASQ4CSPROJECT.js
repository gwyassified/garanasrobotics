window.addEventListener('load', function() {
    var robot = document.querySelector('.robot');
    setInterval(function() {
        robot.style.transform = 'translateX(0)';
        setTimeout(function() {
            robot.style.transform = 'translateX(-100%)';
        }, 3000);
    }, 6000);
});
