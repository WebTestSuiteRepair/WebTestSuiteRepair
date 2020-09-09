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

  //click Admin Tools
  //v5
  // .click("#id-left .blockvmenupair:nth-of-type(5) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("#id-left .blockvmenupair:nth-of-type(5) .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(1) > A:nth-child(1)")

  //click backup in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(10) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_tools_dolibarr_export .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(9) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(9) > A:nth-child(1)")

  //click generate backup button
  //v5
  .click('#buttonGo')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > FIELDSET:nth-child(3) > DIV:nth-child(5) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > DIV:nth-child(10) > INPUT:nth-child(1)")
  //v6
  // .click('#buttonGo')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > FIELDSET:nth-child(3) > DIV:nth-child(5) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > DIV:nth-child(10) > INPUT:nth-child(1)')
  // .click('#buttonGo')

  //click delete icon
  //v5
  // .click("[rel] [border]")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > FIELDSET:nth-child(3) > DIV:nth-child(6) > DIV:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(5) > A:nth-child(1) > IMG:nth-child(1)")
  // .click("#backupdatabaseright > DIV:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(5) > A:nth-child(1) > IMG:nth-child(1)")
  //v6
  // .click('.pictodelete')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > FIELDSET:nth-child(3) > DIV:nth-child(6) > DIV:nth-child(1) > DIV:nth-child(2) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(5) > A:nth-child(1) > IMG:nth-child(1)')
  // .click('#row--AFTER0POS1 > TD:nth-child(5) > A:nth-child(1) > IMG:nth-child(1)')

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