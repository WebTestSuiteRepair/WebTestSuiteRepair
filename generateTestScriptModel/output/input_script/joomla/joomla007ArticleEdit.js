var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/Joomla_3_6_0/administrator/"));
scenario.addAction(new lib.TypeAction("#mod-login-username", "admin"));
scenario.addAction(new lib.TypeAction("#mod-login-password", "123456")  );
scenario.addAction(new lib.ClickAction("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#jform_title", "Article Title New"));
scenario.addAction(new lib.TypeAction("#jform_articletext_ifr", "content of article"));
scenario.addAction(new lib.ClickAction("#toolbar-apply > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > BUTTON:nth-child(1)"));
scenario.addAction(new lib.ClickAction("#cb0"));
scenario.addAction(new lib.ClickAction("#toolbar-edit > BUTTON:nth-child(1)"));
scenario.addAction(new lib.TypeAction("#jform_title", "ArticleTitleEdit"));
scenario.addAction(new lib.TypeAction("#jform_articletext_ifr", "content of edit"));
scenario.addAction(new lib.ClickAction("#toolbar-apply > BUTTON:nth-child(1)"));
process.send(scenario);
