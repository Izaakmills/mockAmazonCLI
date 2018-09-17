var mysql = require("mysql");
var inquirer = require("inquirer");

// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 3306,
//     user: "root",
//     password: "1234",
//     database: "bamazon"
// });

// connection.connect(function (err) {
//     if (err) throw err;
//     runSearch();
// });

runActionPrompt()
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
                name: "selectproduct",
                type: "list",
                message: "What product are you interested in?",
                choices: [
                    "product 1",
                    "product 2",
                    "product 3"
                ]
            }, {
                name: "selectamount",
                type: "input",
                message: "how many would you like?",
            }
        ]
    )
        .then(function (answer) {
            switch (answer.todo) {

                case "Buy a product":

                    break;
                case "Buy a product":
                    break;
            }
        });
}