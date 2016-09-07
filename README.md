Javascript and Jquery Exercise - Shopping Cart
=============================

1. Fork the project on Github
2. Clone the project to your computer
3. Make the shopping cart total price calculator using Javascript and Bootstrap


// notes


<//-- 1 row

1 input field = shopping item
1 input field = price of item
create button

--//>

<//--create button

click create button.

create div with class row
  create div with shopping item
    push value into array
    .html("shopping item")
  create div with price of item
    push value into array
    .html("price of item")
  create div with QTY & input field
    .html("QTY: <input>")
    change in field should be reflected in subtotal immediately
  create div with subtotals
    return new variable (with same class) with float of 0
  create div with cancel button
    remove current row
remove array items

--//>

<//-- calculate price

takes all subtotal class and adds everything. outputs to total price:

--//>
