var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle_3_5_0/login/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "TestMoodle$100"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
process.send(scenario);
