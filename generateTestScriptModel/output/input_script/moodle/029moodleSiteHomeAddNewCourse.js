var Nightmare = require("nightmare");
var lib = require("test_scenario");
var scenario = new lib.Scenario();
scenario.addAction(new lib.GotoAction("http://localhost:8888/moodle_3_5_0/login/index.php"));
scenario.addAction(new lib.TypeAction("#username", "admin"));
scenario.addAction(new lib.TypeAction("#password", "TestMoodle$100"));
scenario.addAction(new lib.ClickAction("#loginbtn"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)"));
scenario.addAction(new lib.ClickAction("#dropdown-2"));
scenario.addAction(new lib.ClickAction("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(3)"));
scenario.addAction(new lib.TypeAction("#id_fullname", "course full name1"));
scenario.addAction(new lib.TypeAction("#id_shortname", "course short name1"));
scenario.addAction(new lib.TypeAction("#id_summary_editoreditable", "one course description"));
scenario.addAction(new lib.ClickAction("#id_saveandreturn"));
process.send(scenario);
