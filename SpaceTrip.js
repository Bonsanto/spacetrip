function getRandomInt(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

var SpaceTrip = function (particleNumber, particleLink, minSpeed, maxSpeed, minSize, maxSize) {
    var width = window.screen.width;
    var height = window.screen.height;
    var background = document.createElement("canvas");
    var ctx = background.getContext("2d");
    var particles = [];

    background.style.width = width;
    background.style.height = height;

    document.body.appendChild(background);

    for (var i = 0; i < particleNumber; i++) {
        var size = getRandomInt(minSize, maxSize);
        var speed = getRandomInt(minSpeed, maxSpeed);
        var star = new Image();

        star.src = particleLink;
        star.speed = speed;
        star.style.width = size + "px";
        star.style.height = "auto";
        stars.push(star);
    }

    this.draw = function () {
        var time = new Date();

        ctx.clearRect(0, 0, width, height);
        ctx.globalCompositeOperation = 'destination-over';
        ctx.fillStyle = 'rgba(7,7,7,7.4)';
        ctx.strokeStyle = 'rgba(0,1,255,0.4)';
        ctx.translate(300, 300);
        ctx.drawImage(particles[0], -12, -12);
        ctx.translate(0, 28.5);

        ctx.fillRect(0, 0, 300, 200);
        // ctx.restore();
        // ctx.restore();
        ctx.drawImage(sun, 0, 0, 300, 300);
        // window.requestAnimationFrame(draw);

    };
    // window.requestAnimationFrame(draw);
};