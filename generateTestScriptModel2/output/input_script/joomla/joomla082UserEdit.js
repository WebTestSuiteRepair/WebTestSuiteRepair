var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_6_0/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(6) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#userList > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(1) > INPUT:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#toolbar-edit > BUTTON:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#jform_name", "li bai"));
scenario.addAction(new lib.ClickAction("#toolbar-save .btn-small"));
process.send(scenario);
