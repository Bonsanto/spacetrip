var background = function(){
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    var arr = [];

    for(var i = 0; i < 1000; i++) {
        var img = document.createElement("img");
        var coorX = getRandomInt(0, window.screen.width);
        var coorY = getRandomInt(0, window.screen.height);
        var size = getRandomInt(1, 20);

        img.src = "star.png"

        img.style.width = size + "px"
        img.style.height = "auto"
        img.style.position = "absolute"

        img.style.top = coorY + "px";
        img.style.left = coorX + "px";
        img.speed = getRandomInt(1, 5);

        arr.push(img);

        document.body.appendChild(img)
    }

    setInterval(function(ev){
        arr.forEach(function(img){
            var top = parseInt(img.style.top.substr(0, img.style.top.length - 2));

            if(top <= 0.0)
                img.style.top = window.screen.height + "px";
            else
                img.style.top = parseInt(top) - img.speed + "px";
        });
    }, 14);
}();
