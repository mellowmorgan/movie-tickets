function Ticket (title, date, time, age) {
  this.title = title;
  this.date = date;
  this.time = time;
  this.age = age;
  this.price = 8;
}

Ticket.prototype.getPrice = function(){
  if ((this.title!="promisingyoungwoman") && (this.title!="roadrunner")){
    this.price+=2;
  }
  if (this.checkMatinee()){
    this.price-=2;
  }
  if ((this.age>=55)||(this.age<=12)){
    this.price-=2;
  }
  return this.price;
}

Ticket.prototype.checkMatinee = function(){
  if ((this.time==="6:00 PM") || (this.time==="7:00 PM") || (this.time==="8:00 PM") || (this.time==="9:00 PM") || (this.time==="10:00 PM")) {
      return false;
  }
  return true;
}


$(document).ready(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    const movieTitle = $("#movies").val();
    const date = $("#date").val();
    const time =$("#movieTime").val();
    const age = parseInt($("#age").val());
    let ticket = new Ticket(movieTitle, date, time, age);
    const price = ticket.getPrice();
    $("#cart").text("Ticket 1: $"+price);
  });
});