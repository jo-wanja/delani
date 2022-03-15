$(function(){
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
})


