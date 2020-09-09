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

  //click modules
  //v5
  // .click('#id-left .menu_contenu:nth-of-type(4) .vsmenu')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(4) > A:nth-child(1)')
  .click('#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(4) > A:nth-child(1)')
  //v6
  // .click(".menu_contenu_admin_modules .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(4) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(4) > A:nth-child(1)")

  //click setup icon in Users & groups
  //v5
  // .click("#list_of_modules .impair:nth-of-type(2) [align=\"right\"] [border]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > DIV:nth-child(7) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(7) > A:nth-child(1) > IMG:nth-child(1)")
  // .click("#list_of_modules > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(7) > A:nth-child(1) > IMG:nth-child(1)")
  //repair the breaking action
  //v6
  // .click('.tabBar .div-table-responsive:nth-child(8) tr:nth-of-type(1) a [title="Setup"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)')
  // .click('#searchFormList > DIV:nth-child(6) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(6) > A:nth-child(1) > IMG:nth-child(1)')

  //click Complementary attributes Tag button
  .click("#attributes")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(4) > A:nth-child(1)")
  // .click("#attributes")
 
  //click new button attributes
  .click(".butAction")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(4) > A:nth-child(1)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(4) > A:nth-child(1)")

  //type lebel 
  .type("tr:nth-of-type(1) [type]", "testLabel")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testLabel")
  // .type("#id-right > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testLabel")

  // type Attribute code
  .type("#attrname", "c123456")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)", "c123456")
  // .type("#attrname", "c123456")

  //select the string
  .select('[name="type"]', 'varchar')
  // .select('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(2) > SELECT:nth-child(1)', 'varchar')
  // .select('#type', 'varchar')

  //click save button
  .click('[action] [align] .button:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(5) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(7) > DIV:nth-child(5) > INPUT:nth-child(1)')
  
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