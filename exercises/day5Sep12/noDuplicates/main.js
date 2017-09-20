function noDuplicates(input){
//input

// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'

//create an array of the input string


var inputArr = input.split("");

//create empty arrays for duplicate elements=extras and unique = unDupl

var unDupl = [];
var extras = [];
for(j = 0; j < inputArr.length; j++){
for (i = 1; i < inputArr.length; i++){
    if (inputArr[j] === inputArr[i]){
        extras.push(extras[i]);
    } else {
        unDupl.push(unDupl[i]);
    }
    
}
    }
    return extras;
    return unDupl;

}

noDuplicates('bookkeeper larry');
