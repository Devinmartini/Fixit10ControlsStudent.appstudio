let goodFoods=["pizza","apples","cookies","sushi","pasta","steak"]

favFoods.onshow=function(){
  LstFood.clear()
  for (i = 0; i <= goodFoods.length-1 ; i++) 
  LstFood.addItem(goodFoods[i])
}



LstFood.onclick=function(choice){
  let textChoice = NSB.$("LstFood_" + choice).textContent
  NSB.MsgBox(`You picked ${textChoice} -that is a great choice!`)
}


BtnDessert.onclick=function(){
  ChangeForm(dessertVoting)
}
