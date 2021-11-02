$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    alert($("#movieTime").val());
  });
});