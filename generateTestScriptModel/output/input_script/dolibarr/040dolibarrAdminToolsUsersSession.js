var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr_5_0_0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction(".butActionDelete"));
scenario.addAction(new lib.ClickAction("#mainbody > DIV:nth-child(10) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)"));
scenario.addAction(new lib.ClickAction('.butAction'));
process.send(scenario);
