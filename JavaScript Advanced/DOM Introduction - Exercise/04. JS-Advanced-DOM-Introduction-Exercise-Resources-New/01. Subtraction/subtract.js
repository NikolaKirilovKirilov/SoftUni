function subtract() {
    let input1 = Number(document.getElementById('firstNumber').value);
    let input2 = Number(document.getElementById('secondNumber').value);

    let result = input1 - input2;
    document.getElementById('result').innerText = result;
}