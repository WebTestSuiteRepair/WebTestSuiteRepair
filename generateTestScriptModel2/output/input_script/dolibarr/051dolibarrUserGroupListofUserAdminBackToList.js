var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr_5_0_0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction(".blockvmenulast .vmenu"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#user"));
scenario.addAction(new lib.ClickAction("[href=\"\/dolibarr_5_0_0\/htdocs\/user\/index\.php\"]"));
scenario.addAction(new lib.SelectAction("[name=\"limit\"]", "25"));
process.send(scenario);