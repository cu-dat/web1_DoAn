const quantity = document.getElementById('quantity');
const minus = document.getElementById('minus');
const plus = document.getElementById('plus');

minus.onclick = function (){
 if(quantity.value > 1){
   quantity.value--;
 }
}
plus.onclick = function (){
   if(quantity.value < 20){
    quantity.value++;
   }
   else{
    alert("Exceed Maximum Permitted Units!");
   }
}

document.getElementById("toastbtn").onclick = function() {
    const toastElList = [].slice.call(document.querySelectorAll('.toast'))
    const toastList = toastElList.map(function(toastEl) {
      return new bootstrap.Toast(toastEl)
    })
    toastList.forEach(toast => toast.show()) 
  }

 
  function check(){
    var username= document.getElementById('UserNameSignUp').value;
    let x = username.length;
    var regExpp = /[~`!@#$%^&*()+=_{}\|:;'",.<>?]/;
    
    
    if (x >15){
      alert("Username is too long!");
    }
      else if(regExpp.test(username)){
           alert("Username invalidate! Please try again with no special characters");
      }
      else{
          var a="true";
      }
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    if (regExp.test(email)) {
        var b="true";
      }
        else {
          alert('Email invalidate!');
          }

    var pass= document.getElementById('PassSignUp').value;
    let y = pass.length;
    if(y<6){
      alert("Password is not long enough!");
    }
      else{
        var c="true";
      }

    var confirmpass= document.getElementById('ConfirmPass').value;
    if(pass === confirmpass){
      var d="true";
    }
      else{
        alert("Password is not confirmed!");
      }
    if (a=="true" && b=="true" && c=="true" && d=="true"){
      alert("Your account has been created! ");
    }
      else{

      }
  }

  

  function login(){
  const username= document.getElementById("UserNameLogIn").value;
  const pass= document.getElementById("PassLogIn").value;
  if (username === 'skywind' && pass === '12345'){
    location='index-user.html';
    alert('Login success ! You will be move to next location');
   }
  else{
    alert("Wrong User Name or Password ! Please try again");
    return;
  } 
 }
 
 
 














/*const x = document.forms["frm1"];
let text = "";
for (let i = 0; i < x.length ;i++) {
  text += x.elements[i].value + "<br>";
}
document.getElementById("demo").innerHTML = text;*/
