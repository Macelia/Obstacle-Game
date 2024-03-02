var dinos = document.querySelector(".dinos");
var obstacles = document.querySelector(".obstacles");


function Sauter() {
    // faire sauter le dinosor

    if(dinos.classList != "animation") {
       dinos.classList.add("animation");
    }

setTimeout(function() {
    dinos.classList.remove("animation");
}, 500);

}

// vérifier si l'obstacle touche le dinosor 

var verification = setInterval(function(){

    var dinosStop = parseInt(window.getComputedStyle(dinos).getPropertyValue("top"));
    var obstacleLeft = parseInt(window.getComputedStyle(obstacles).getPropertyValue("left"));

    if(obstacleLeft<20 && obstacleLeft>0 && dinosStop >=130 ){
      
        obstacles.computedStyleMap.animation ="none";
        alert("vous avez perdu");
    }

    
}, 1);

