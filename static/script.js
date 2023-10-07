function myfun(){
  var namecheck=document.getElementById("fullname").value;
  var checkphn=document.getElementById("mobno").value;
  var checkpass=document.getElementById("ps").value;
  var checkmail=document.getElementById("emailid").value;
  var em=new RegExp("^([A-Za-z]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z]{2,6})");
  var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");


  if(namecheck.length==0){
     alert("NAME Cant be blank");
     return false;
  }
  else if(namecheck.length>30){
     alert("Cant exceed 30letters");
     return false;
  }
  else if(/[0-9%@#$*&^]/.test(namecheck)){
      alert("Cnat be number and special charc");
      return false;
  }
  if(checkphn.length==0){
      alert("Number field cant be blank");
      return false;
  }
  if(/[a-zA-Z]/.test(checkphn)){
      alert("plz enter numbers");
      return false;
  }
  if((checkphn.length<10) || (checkphn.length>10)){
      alert("Number should be of 10dig");
      return false;
  }
  if(checkpass.length<6){
      alert("password should be atleast of 6 characters");
      return false;
  }
 

  else if (strongRegex.test(checkpass)!=true){
      alert("INVALID PASS- password must have ATLEAST 1 number 1 special char and 1 alphabet ");
      return false;
  }
  if(em.test(checkmail)!=true){
      alert("Invalid Email id ");
      return false;
  }else{
      return true;
  }   
}