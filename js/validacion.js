function showAlertSuccess() {
    document.getElementById("alert-success").classList.add("show");
    
    
   }



function showAlertError() {
    document.getElementById("alert-danger").classList.add("show");
}

document.getElementById('regBtn').addEventListener('click',function(){
    var password1= document.getElementById("password1").value;
    var password2= document.getElementById("password2").value;
    var terminos= document.getElementById("terminos").checked;
    var nombre= document.getElementById("nombre").value;
    var apellido= document.getElementById("apellido").value;
    var email= document.getElementById("email").value;



    if(password1===password2 && password1.length>=6 && password2.length && terminos && email &&nombre && apellido)
    {
     showAlertSuccess();

    } 
    
    else { showAlertError();}


});
