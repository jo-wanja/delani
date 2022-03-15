$(function(){
  // hover effect
  let work = ['1','2','3','4','5','6','7','8']
  let over= ['1','2','3','4','5','6','7','8']
$.each(work,function(i,value){
  $.each(over,function(i,value){
  $("#work"+work[i]).hover(function(){
    $("#overlay"+over[i]).show();
  }, function(){
    $("#overlay"+over[i]).hide();
  })
  })
  })
// services toggle
let show =['design-image','development-image','product-image']
let hide=['design','development','product']
  $.each(show,function(i,val){
    $.each(hide,function(i,val){})
    $('#'+show[i]).click(function(){
      $('#'+show[i]).toggle();
      $('#'+hide[i]).toggle();
    })

    $('#'+hide[i]).click(function(){
      $('#'+hide[i]).toggle();
      $('#'+show[i]).toggle();
    });
  })
// subMIT
$('form').submit(function(event){
  event.preventDefault();

  let jina = $("input#MERGE2").val()
  let email= $("input#MERGE0").val()
      console.log(jina)
      alert("Thank you "+jina+" for the feedback")
    })

 })
