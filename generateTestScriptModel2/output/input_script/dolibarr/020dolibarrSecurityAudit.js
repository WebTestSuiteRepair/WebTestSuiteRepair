var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr_5_0_0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(10) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction('#audit'));
scenario.addAction(new lib.ClickAction("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)"));
scenario.addAction(new lib.ClickAction(".button"));
process.send(scenario);
