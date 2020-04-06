var exercises = ["pullups","pushups","situps","jogging","plank","curls"]
var coreExercises = ["situps","plank"]

ABfavExercises.onshow=function(){
  selExercises.clear()   
  for (y = 0; y <= exercises.length-1 ; y++) 
  selExercises.addItem(exercises[y])
}

selExercises.onfocusout=function(){
  for (i = 0; i <= 1; i++)
     fav = `You chose ${selExercises.text[0]} and ${selExercises.text[1]}.`
}



btnSubmit.onclick=function(){
  mod1.toggle()
  mod1.value = fav
  mod1.toggle()
  btnMod.onclick=function(){
  ChangeForm(ABfavExercises)
  }
}

btnMobile.onclick=function(){
  ChangeForm(mobileNav)
}


