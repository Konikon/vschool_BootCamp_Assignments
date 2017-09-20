var goombaTotal = 0;
var bobombsTotal = 0;
var cheepTotal = 0;

document.getElementById("goomba-count").addEventListener("input", function(){
    var goombaCount = parseInt(document.getElementById("goomba-count").value);
    goombaTotal = 12 * goombaCount;
    document.getElementById("goomba-total").innerHTML = goombaTotal;
    document.getElementById("grand-total").innerHTML = goombaTotal + bobombsTotal + cheepTotal;
});

document.getElementById("bobombs-count").addEventListener("input", function(){
    var bobombsCount = parseInt(document.getElementById("bobombs-count").value);
    bobombsTotal = 8 * bobombsCount;
    document.getElementById("bobombs-total").innerHTML = bobombsTotal;
    document.getElementById("grand-total").innerHTML = goombaTotal + bobombsTotal + cheepTotal;
});

document.getElementById("cheep-count").addEventListener("input", function(){
    var cheepCount = parseInt(document.getElementById("cheep-count").value);
    cheepTotal = 5 * cheepCount;
    document.getElementById("cheep-total").innerHTML = cheepTotal;
    document.getElementById("grand-total").innerHTML = goombaTotal + bobombsTotal + cheepTotal;
});