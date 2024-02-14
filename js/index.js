var image1 = document.getElementById("left_heart");
var image2 = document.getElementById("right_heart");
var button = document.getElementById("rope");

button.addEventListener("click", function() {
    button.style.transform = "translate(0px, 10px)"
    setTimeout(function() {
        button.style.zIndex = "0"
        button.style.transform = "translate(0px, -30px)"
    }, 250);
    setTimeout(function() {
        image1.style.transform = "rotateY(90deg)";
        image2.style.transform = "rotateY(-90deg)";
    }, 500);
});