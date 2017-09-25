//https://coursework.vschool.io/caeser-cipher/

//For this exercise, you will be implementing a Caeser cipher using Javascript. Your program will receive two inputs:
//
//The text to be encoded
//The number positions to shift each letter (to the right)
//For example: 

//function should take a string and shift number

////should 1) leave space, numbers and characters unchanged
//        2) if the digits are closer to laast index of alphabet should startover
//        3) should be able to handle large shift
//        4) should be converting capitals to small


function cipher(str, shift){
    var str = str.toLowerCase();
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var cipherStr = "";
    for(var i = 0; i < str.length; i++){
        var shiftBy = shift + alphabet.indexOf(str[i]);
        console.log(alphabet.indexOf(str[i]));
        cipherStr = alphabet.charAt(shiftBy);
    }
}

console.log(cipher("abc",1));