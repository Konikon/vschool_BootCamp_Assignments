var randomPool = ["abcdefghijklimnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()"]

function passwordGen(num) {
    for (i = 0; i < num; i++) {
        var generatedPW = "";
        generatedPW += randomPool[(Math.floor((Math.random() * randomPool.length)))];
        return generatedPW;
    }
}

console.log(passwordGen(10));
