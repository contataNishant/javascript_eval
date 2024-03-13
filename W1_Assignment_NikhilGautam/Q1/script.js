function calAddition() {
    try {
        const num1 = Number.parseInt(document.getElementById('num1').value);
        const num2 = Number.parseInt(document.getElementById('num2').value);

        if (isNaN(num1) || isNaN(num2)) {
            throw new Error("Wrong Input: Input can only be a number");
        }
        if (num1 < 5 || num1 > 10 || num2 < 5 || num2 > 10) {
          if(num1<5 || num2<5){
            throw new Error("Wrong Input: Number is too low")
          }
          if(num1>10 || num2>10){
            throw new Error("Wrong Input: Number is too high")
          }
        }
        const result = num1 + num2;
        document.getElementById('result').innerHTML = `Result: ${result}`
        document.getElementById('result').style.color = "lightgreen"
        document.getElementById('result').style.fontSize = "26px"
    } catch (error) {
        document.getElementById('result').innerHTML = `Error: ${error.message}`
        document.getElementById('result').style.color = "red"
        document.getElementById('result').style.fontSize = "26px"
    }
}
