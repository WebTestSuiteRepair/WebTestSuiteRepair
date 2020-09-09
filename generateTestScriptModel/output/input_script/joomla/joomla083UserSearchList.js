var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_6_0/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(6) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.TypeAction("#filter_search","test"));
scenario.addAction(new lib.ClickAction("#j-main-container > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > BUTTON:nth-child(2) > SPAN:nth-child(1)"));
process.send(scenario);
