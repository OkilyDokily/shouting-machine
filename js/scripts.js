$(document).ready(function(){
  $("#formOne").submit(function(e){
    e.preventDefault();
    $(".shouting").text($("#shouting").val().toUpperCase())
  })
})