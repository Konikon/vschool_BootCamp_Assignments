var xhr = new XMLHttpRequest();
xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true);
xhr.send();
xhr.onreadystatechange = function parsePokemon() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        var pokemonList = data.objects[0].pokemon;
        var ol = document.getElementById("pokemonNames");

//write a for loop to run through array of object and return just the name of the pokemon
        for (var i = 0; i < pokemonList.length; i++) {
              var li = document.createElement("LI");
              li.innerHTML = pokemonList[i].name;
              ol.appendChild(li);
//            document.getElementById("pokemonNames").innerHTML = x;


//dont know if the name data is index 0 or 3
//            var t = document.createTextNode("data");
//            li.appendChild(t);
        }

    }
}
//xhr= xml http request
//        
//        four parts of parseing the json data
//        1) create element in your HTML
//        2) create a text node in the Element
//        3) append the text node in the Element
//        4) 
