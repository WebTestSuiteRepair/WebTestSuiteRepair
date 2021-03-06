var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/dolibarr_5_0_0/htdocs/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "123456"));
scenario.addAction(new lib.ClickAction("#login_line2 > INPUT:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction('#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(4) > A:nth-child(1)'));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > DIV:nth-child(7) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(7) > A:nth-child(1) > IMG:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#usergroupcard"));
scenario.addAction(new lib.TypeAction("[cols]", "DOL_DATA_ROOT/doctemplates/usergroups"));
scenario.addAction(new lib.ClickAction('[value="Modify"]'));
process.send(scenario);
