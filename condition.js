let number = 11;
let number1 = 10;

if (number === null) {
    console.log("Number est égal à null.");
} else if (number !== null) {
    console.log("N'est pas égal a null");
}


if (number <= 10 && number1 <= 9) {
    console.log("True");
} else {
    console.log("False");
}

console.log("break");

if (number <= 11 || number1 <= 10) {
    console.log("True");
} else {
    console.log("False");
}

number === 11 ? console.log("True") : console.log("False");
number === 11 ? console.log("True") : "";

// Try & Catch

try {
    func();
} catch (error) {
    console.error(error);
}