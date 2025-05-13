function greet(){
    var mail=document.getElementById('email').value;
    var password=document.getElementById('password').value;
    
   document.getElementById('block').innerHTML="mail is "+mail+"<br> password is : "+password;
}