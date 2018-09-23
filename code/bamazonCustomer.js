var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to Database")
    runActionPrompt()
})

function runActionPrompt() {
    inquirer.prompt(
        [
            {
                name: "todo",
                type: "list",
                message: "What would you like to do?",
                choices: [
                    "Buy a product",
                ]
            }, {
                name: "productid",
                type: "list",
                message: "What product are you interested in?",
                choices: [
                    "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"
                ]
            }, {
                name: "amount",
                type: "input",
                message: "how many would you like?",
            }
        ]
    )
        .then(answer => {
            switch (answer.todo) {
                case "Buy a product":
                    console.log("You are buying " + answer.amount + " of product " + answer.productid)
                    // db calls
                    function queryDB() {
                        connection.query("SELECT * FROM products WHERE item_id = ?", [answer.productid], function (err, res) {
                            var price = res[0].price
                            if (res.stock_quantity - answer.amount <= 0) {
                                console.log("Insufficient Quantity!")
                            } else (
                                connection.query("UPDATE products SET stock_quantity = stock_quantity - " + answer.amount + " WHERE item_id = ?", [answer.productid], function (err, res) {
                                    console.log("Order Fulfilled! The total cost of your order is $" + (answer.amount * price))
                                })
                            )
                        });
                    }
                    queryDB()
                    break;
                case "Check ":
                    break;
            }
        });
}