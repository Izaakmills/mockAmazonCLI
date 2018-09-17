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
runSearch()
function runSearch() {
    inquirer.prompt({
        name: "todo",
        type: "list",
        message: "What would you like to do?",
        choices: [
            "Buy a product",        ]
    },{
        name:"selectproduct",
        type: "list",
        message: "What product are you interested in?",
        choise: [
            ""
        ]

    })
        .then(function (answer) {
            switch (answer.todo) {

                case "Buy a product":

                    break;
                case "Buy a product":
                    break;
            }
        });
}