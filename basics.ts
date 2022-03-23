function add(n1: number, n2: number, showResult: boolean, phrase: string) {
    let result = n1 + n2;

    if (showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1: number = 5;
const number2: number = 8.3;
const printResult: boolean = true;
const resultPhrase: string = "Result is: ";

const result = add(number1, number2, printResult, resultPhrase);
