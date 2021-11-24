# Movie Tickets

#### By Morgan Waites

## Technologies Used

* Javascript
* HTML/CSS/Bootstrap

## Description

Simulates movie ticket online shop. Add tickets to cart.

## Setup/Installation Requirements

* git clone this repo
* navigate to top-level of directory
* open index.html and will open in your browser.

## License
[MIT](https://opensource.org/licenses/MIT) Copyright 2021 Morgan Waites.

## Tests

Describe: Ticket(movie,date,time,age)
Test: It should save selected movie, date, time, and age to Ticket
Code: let movieticket = new Ticket("venom", 2021-11-02, 6:00 PM, 18);
movieTicket.title;
movieTicket.date;
movieTicket.time;
movieTicket.age;
Expected Output: "venom", 2021-11-02, 6:00 PM, 18


Describe Ticket.prototype.checkMatinee()
Test: It should check user inputted time for matinee and return true
Code: ticket.checkMatinee()
Expected Output: true

Test: It should check user inputted time for matinee and return false
Code: ticket.checkMatinee()
Expected Output: false

Describe: Ticket.prototype.getPrice()
Test: "It should check age, if matinee, release new or not, return price amount."
Code:
ticket.getPrice();
Expected Output: $10


