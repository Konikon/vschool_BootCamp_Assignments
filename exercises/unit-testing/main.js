function assert(actual, expected) {
    if (actual !== expected) {
        throw {
            type: "FAILED",
            details: {
                actual: actual,
                expected: expected
            }
        };
    } else {
        console.log("test passed");
    }
}

function describe(message, testFunc) {
    try {
        testFunc();
    } catch (err) {
        console.log("failure:", err);
    }
}

//Addition code to test
function add(a, b) {
    return a + b;
}

describe("testing the add function", function () {
    assert(add(1, 7), 8);
    assert(add(-1, 9), 8);
})

//subtraction code to test
function sub(a, b) {
    return (a - b);
}

describe("testing the subtract function", function () {
    assert(sub(1, 6), -5);
    assert(sub(-1, -9), 8);
})
