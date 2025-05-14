function add1(a,b){
    return a+b;
}
function diff(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
function div(a,b){
    return a/b;
}
function add(){
    let a=parseFloat(document.getElementById('num1').value)
    let b=parseFloat(document.getElementById('num2').value)
    let add=add1(a,b);
    let sub=sub()
    let mul=mul(a,b);
    let div=div(a,b);
    document.getElementById('display').innerHTML="addition is "+add+"<br>subtraction is "+sub+" <br>Multiplication is "+mul+" <br>Division is "+div;
}