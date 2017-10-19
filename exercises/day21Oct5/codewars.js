//inputArray = [3, 6, -2, -5, 7, 3]
//
//adjacentElementsProduct = (inputArray) => {
//    let duopro = []
//    for (let i = 0; i < inputArray.length - 1; i++)
//        duopro.push(inputArray[i]*inputArray[i+1]); 
        
//        const max = Math.max(...duopro);
//    }
//
//return adjacentElementsProduct(inputArray)
    // Math.max(indexOf(max)*indexOf


//Linked list

//let a = {
//    next: b,
//    value: "kite"
//}
//
//let b = {
//    next: c,
//    value: "donkey"
//}
//
//let c = {
//    next: null,
//    value: "peeee"
//}

//the structure will look like

//const linkedList = {
//    next: {
//        next: {
//            next: null,
//            value: "peeee"
//        },
//        value: "donkey"
//    },
//    value: "kite"
//}

//to go to kite you will use

//console.log(linkedList.next.next.value)



function genlinkedList(n){
    if(n === 1) {
        return {
        next: null,
        value: 1
        }
    } 
        return {
        next: genlinkedList(n-1),
        value: n
    }
}


console.log(JSON.stringify(genlinkedList(2)));




