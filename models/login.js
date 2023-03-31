var attempt = 3; 

function validate()
{
var username = document.getElementById("Username").value;
var password = document.getElementById("Password").value;

if ( username == "admin123" && password == "lamba3")
{
  alert ("You have successfully accessed your account!");
  window.location = "clientprofile.html"; 
  return false;
}
else
{
  attempt --;
  alert("Wrong account information, you have only "+attempt+" left.");

if( attempt == 0)
    {
      document.getElementById("Username").disabled = true;
      //changes the by true 0 and False 1
      document.getElementById("Password").disabled = true;
      
      
      
      
      document.getElementById("Success").disabled = true;
      return false;
    }
  }
}
