function add(){
    var a=document.getElementById('num1').value;
    var b=document.getElementById('num2').value;
    var add=Number(a)+Number(b);
    var sub=a-b;
    var mul=a*b;
    var div=a/b;
    document.getElementById('display').innerHTML="addition is "+add+"<br>subtraction is "+sub+" <br>Multiplication is "+mul+" <br>Division is "+div;
}