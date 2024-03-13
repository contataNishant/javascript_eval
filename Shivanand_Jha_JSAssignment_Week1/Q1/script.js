function add(){
    // event.preventDefault();
    try{ 
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
        if(isNaN(a) || isNaN(b)){
            throw "Wrong Input  : input can only be a number"
        }
        if(a>10 || b>10){
            throw "Wrong Input : number is too high"
        }
        if(a<5 || b<5){
            throw "Wrong Input : number is too low"
        }
        let x = a+b;
        document.getElementById('result').innerText = "Result is :"+ x;
    }catch(err){
        document.getElementById('result').innerText = err;
    }
    // document.getElementById("add").reset();
}