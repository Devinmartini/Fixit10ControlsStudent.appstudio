
rdbPersonality.onchange=function(choice){
  lblAnswer.value= `I would agree that you are a ${$("input[name=rdbPersonality]:checked").prop("value")} person too!`
}


btnExercise.onclick=function(){
  ChangeForm(ABfavExercises)
}
