var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle_3_5_0/login/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "TestMoodle$100"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > SECTION:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(2) > SPAN:nth-child(1) > A:nth-child(1)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(1) > OL:nth-child(1) > LI:nth-child(4) > A:nth-child(1)"));
process.send(scenario);
