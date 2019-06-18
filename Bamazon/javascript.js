var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "oliver01",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  console.log("------------------------------ \n" + 
  "Hello and welcome to Bamazon! Please take a moment to peruse our online catalogue. \n" +
  "If you are interested in purchasing from our catalogue, please answer the prompts below." +
  "\n ------------------------------")
  start();
});

// function which prompts the user for what action they should take
function start() {
  
    // display all of the items available for sale including ids, names, and prices of products
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " 
        + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }
      console.log("-----------------------------------");
    });

    // query the database for all of the items available for sale
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
    // prompts ask user which product, and how many units of that product they would like to buy
    inquirer
      .prompt([
        {
          name: "productID",
          type: "input",
          message: "What product would you like to buy? (input product ID#)"
        },
        {
          name: "orderVolume",
          type: "input",
          message: "How many units of the product would you like to buy?"
        },
      ])
      .then(function(answer) {
        let chosenItem
        // get the item_id of the chosen item
        for (var i = 0; i < res.length; i++) {
          if (res[i].item_id == answer.productID) {
            chosenItem = res[i];
          }
        }
      // determine if stock quantity greater than order volume
      if (chosenItem.stock_quantity >= answer.orderVolume) {
        newStock_quantity = (chosenItem.stock_quantity - answer.orderVolume);
        // stock_quantity was high enough, so update db, let the user know, and start over
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: newStock_quantity
            },
            {
              item_id: chosenItem.item_id
            }
          ],
          function(error) {
            if (error) throw err;
            console.log("Your order was successful! Thank you for your business");
            start();
          }
        );
      }
      else {
        // bid wasn't high enough, so apologize and start over
        console.log("The item you are trying to order is sold out. We apologize for the inconvenience. Please check again soon.");
        console.log("----------------------------------")
        start();
      }
    });
  });
}


