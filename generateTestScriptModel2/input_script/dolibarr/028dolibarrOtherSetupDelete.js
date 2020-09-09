"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/dolibarr_5_0_0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr_6_0_0/htdocs/index.php")
  // .goto("http://localhost:8888/dolibarr_7_0_0/htdocs/index.php")

  .type("#username", "admin")
  .type("#password", "123456")
  //click login button
  // .click("[value=\"  Login  \"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(16) > DIV:nth-child(2) > INPUT:nth-child(2)")
  .click("#login_line2 > INPUT:nth-child(2)")

  //click setup
  //v5
  // .click("#id-left .blockvmenuimpair:nth-of-type(4) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("#id-left .blockvmenuimpair:nth-of-type(4) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(1) > A:nth-child(1)")

  //click other setup in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(16) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(16) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(16) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_const .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(17) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(17) > A:nth-child(1)")

  //type name
  //v5
  // .type('[size="24"]', "TestSet")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)', "TestSet")
  .type("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)","TestSet")
  //v6 
  // .type('[size="24"]', "TestSet")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)', "TestSet")
  // .type('#id-right > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > INPUT:nth-child(1)', "TestSet")

  //type value
  //v5
  // .type('[width] .impair:nth-of-type(2) [size="30"]', "100")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "100")
  .type('#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "100")
  //v6 
  // .type('[width] .oddeven:nth-of-type(2) [size="30"]', "100")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "100")
  // .type('#id-right > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "100")

  //type Comment
  //v5
  // .type("[width] .impair:nth-of-type(2) [size=\"40\"]", "try add test set")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)", "try add test set")
  .type("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)", "try add test set")
  //v6 
  // .type('[width] .oddeven:nth-of-type(2) [size="40"]', "try add test set")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)', "try add test set")
  // .type('#id-right > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)', "try add test set")

  //click the add button
  //v5
  // .click("[value=\"Add\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > INPUT:nth-child(2)")
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > INPUT:nth-child(2)")
  //v6
  // .click('[value="Add"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > INPUT:nth-child(2)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > INPUT:nth-child(2)')

  //click checkbox of the delete
  //v5
  // .click("[name=\"const\[4\]\[check\]\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(3) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(7) > TD:nth-child(4) > INPUT:nth-child(2)")
  .click("#check_4")
  //v6
  // .click("[name=\"const\[4\]\[check\]\"]")
  // .click("#check_4")

  //click the delete button
  //v5
  // .click("[action] [align=\"right\"]:nth-child(6) .button")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(6) > INPUT:nth-child(1)")
  // .click("#delconst > INPUT:nth-child(1)")
  //v6
  // .click('[action] [align="right"]:nth-child(6) .button')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(6) > INPUT:nth-child(1)')
  // .click('#delconst > INPUT:nth-child(1)')


  // End test
  .end()
  // Execute commands
  .then(function () {
    console.log("Done!")
  })
  // Catch errors
  .catch(function (err) {
     console.log(err)
   })