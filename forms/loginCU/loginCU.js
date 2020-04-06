

btnShortcuttoFavfoods.onclick=function(){
  ChangeForm(favFoods)
}

btnLogin.onclick=function(){
  req = Ajax("https://radlab.creighton.edu/appStudio/authLDAP.php" , "POST", "j_username=" + inpNet.value + "&j_password=" + inpPassword.value)

if (req.status == 200) { //everything worked.
  if (req.responseText == 1) 
    ChangeForm(favFoods)
  else 
    NSB.MsgBox("Incorrect login information")
  //1 good 0 bad
  } else  
  NSB.MsgBox("had a problem was the AJAX request.")
   
  
}

/*
req = Ajax("http://radlab.creighton.edu/appStudio/authLDAP.php", "POST", "j_username=" + txtNetID.value)

btnLogin.onclick=function(){  
    if (req.status == 200) {
    lblResponse.hidden= false
    lblResponse.value=  "Your LDAP return code was " + req.responseText

    } else { 
    lblResponse.hidden= false;
    lblResponse.value= "Error: " + req.status;
  }
}
*/