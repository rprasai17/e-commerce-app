function onlyOdds(arr) {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            output.push(arr[i]);
            
        }
        
    }
    return output;
};

onlyOdds([2, 4, 6, 8, 11, 20, 15, 22]);

function vowelsAndConsonants(str) {
    let vowels = 0;
    let consonants = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            vowels += 1;
        }
        if (str[i] !== "a" && str[i] !== "e" && str[i] !== "i" && str[i] !== "o" && str[i] !== "u") {
            consonants += 1;
        }
        
    }
    return str + " has " + consonants + " consonants and " + vowels + " vowels";
};

vowelsAndConsonants("hello");

function reverseArr(arr) {
    let output = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        output.push(arr[i]);
    }
    return output;
};

reverseArr([1, 2, 3]);

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i > 100) return;
        if (i % 3 == 0 && i % 5 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");  
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        };
    }
};

fizzBuzz();

