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
//    img.style.

    img.style.top = coorY + "px";
    img.style.left = coorX + "px";
    img.speed = getRandomInt(1, 5);

    arr.push(img);

    document.body.appendChild(img)
}

setInterval(function(ev){
        arr.forEach(function(img){
            var top = parseInt(img.style.top.substr(0, img.style.top.length - 2));

//            console.log(top)

            if(top <= 0.0)
                img.style.top = window.screen.height + "px";
            else
                img.style.top = parseInt(top) - img.speed + "px";
        });
//        arr.forEach(function(img){
//
//            var x = getRandomInt(0, 2) == 0 ? -1 : 1;
//            var y = getRandomInt(0, 2) == 0 ? -1 : 1;
//
//
////        console.log("x: " + x + "\n" + "y: " +  y);
//
//            var top = img.style.top.substr(0, img.style.top.length - 2);
//            var left = img.style.left.substr(0, img.style.left.length - 2);
//
////        alert(img.style.top + "\n" + img.style.left);
//
//            img.style.top = parseInt(top) + y * speed + "px";
//            img.style.left = parseInt(left) + x * speed + "px";
//        });
}, 16);
