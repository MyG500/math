let firstNumber = Number(prompt('כתבי מספר'));
let secondNumber = Number(prompt('כתבי עוד מספר'));
let operator = prompt("/לחיבור הזיני + לחיסור הזיני - לכפל * ולחילוק הזיני");

if (isNaN(firstNumber)) {
    alert('זה לא מספר');
}
else if (isNaN(secondNumber)) {
    alert('זה לא מספר');
}
else {

    if (operator == '+') {
        result = firstNumber + secondNumber;
    }
    else if (operator == '-') {
        result = firstNumber - secondNumber;
    }
    else if (operator == '*') {
        result = firstNumber * secondNumber;
    }
    else if (operator == '/') {
        result = firstNumber / secondNumber;
    }

    else {
        result = "רק מספרים"
    }
    alert(result);
}