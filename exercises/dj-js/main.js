
//    if ("mouseup" === true || onkeypress.keyCode === 89) {
//        this.style.backgroundColor = "yellow";
//    }
//    if ("dblclick" === true || onkeypress.keyCode === 71) {
//        this.style.backgroundColor = "green";
//    }
//    if ("scroll" === true || onkeypress.keyCode === 79) {
//        this.style.backgroundColor = "orange";
//    }
//    return;
//})

document.getElementById("sq").addEventListener("mouseover", function () {
    this.style.backgroundColor = "blue";
    return;
});

document.getElementById("sq").addEventListener("onmousedown", function () {
    console.log("fire");
    this.style.backgroundColor = "red";
    console.log("fire");
});

document.getElementById("sq").addEventListener("mouseup", function () {
    console.log("fire");
    this.style.backgroundColor = "yellow";
    console.log("fire");
    
});

document.getElementById("sq").addEventListener("dblclick", function () {
    console.log("fire");
    this.style.backgroundColor = "green";
    console.log("fire");
    return;
});


document.body.addEventListener("wheelmouse", function () {
    this.style.backgroundColor = "orange";
});

document.body.addEventListener("keypress", function (event) {
    if(event.keyCode === 89);{
    document.getElementById("sq").style.backgroundColor = "yellow";
    }
    if(event.keyCode === 71);{
    document.getElementById("sq").style.backgroundColor = "green";
    }
    if(event.keyCode === 66);{
    document.getElementById("sq").style.backgroundColor = "blue";
        console.log("fire");
    }
    if(event.keyCode === 79);{
    document.getElementById("sq").style.backgroundColor = "orange";
    }
});


document.getElementById("sq").addEventListener("dblclick", function(){
    this.style.backgroundColor = "green"; 
    return;
})

document.getElementById("sq").addEventListener("wheelmouse", function(){
    this.style.backgroundColor = "orange"; 
    return;
})



//another way of doing this is 
//document.getElementById("sq").onclick = function(){
//    document.getElementById("sq").style.backgroundColor = "blue";
//}