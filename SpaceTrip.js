function getRandomInt(min, max) {
    max++;
    return Math.floor(Math.random() * (max - min)) + min;
}

var SpaceTrip = function (particleNumber, particleLink, minSpeed, maxSpeed, minSize, maxSize) {
    var width = window.screen.width;
    var height = window.screen.height;
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    var particles = [];

    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    document.body.appendChild(canvas);

    for (var i = 0; i < particleNumber; i++) {
        var size = getRandomInt(minSize, maxSize);
        var speed = getRandomInt(minSpeed, maxSpeed);
        var star = new Image();

        star.src = particleLink;
        star.speed = speed;
        star.style.width = size + "px";
        star.style.height = "auto";
        particles.push(star);
    }

    this.draw = function () {
        var particle = new Image();
        particle.src = "star.png";
        var time = new Date();

        // ctx.clearRect(0, 0, width, height);

        ctx.fillRect(0, 0, 500, 500);
        // ctx.restore();
        // ctx.restore();
        ctx.moveTo(5, 6);
        ctx.drawImage(particle, 0, 0, 100, 100);
        // window.requestAnimationFrame(draw);

    };
    // window.requestAnimationFrame(draw);
};