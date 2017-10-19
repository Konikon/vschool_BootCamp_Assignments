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

