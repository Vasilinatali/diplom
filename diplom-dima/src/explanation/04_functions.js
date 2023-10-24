function printHelloMessage() {
    console.log('Hello students!');
}

function subtract(a, b) {
    return a - b;
}

const sum = (a, b) => a + b;

const applyOperation = (a, b, operationFn) => {
    return operationFn(a, b);
};

applyOperation(10, 2, sum);

applyOperation(10, 5, (a, b) => a / b);

// refs, values, spread, rest ....
