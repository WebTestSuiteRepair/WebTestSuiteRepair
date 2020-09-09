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

  //click Limits and accuracy in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(11) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(11) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(11) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_limits .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(12) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(12) > A:nth-child(1)")

  //click button modify
  .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(5) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(5) > A:nth-child(1)')

  //type value 1
  // .type('[name="MAIN_MAX_DECIMALS_UNIT"]', "5")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)", "5")
  .type("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)", "5")

  //type value 2
  .type('[name="MAIN_MAX_DECIMALS_TOT"]', "2")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(2) > INPUT:nth-child(1)", "2")
  // .type("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(2) > INPUT:nth-child(1)", "2")

  //type value 3
  // .type('[name="MAIN_MAX_DECIMALS_SHOWN"]', "8")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(2) > INPUT:nth-child(1)", "8")
  .type("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(2) > INPUT:nth-child(1)", "8")

  //click save button
  // .click('[type="submit"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > INPUT:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(5) > INPUT:nth-child(1)')
  
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