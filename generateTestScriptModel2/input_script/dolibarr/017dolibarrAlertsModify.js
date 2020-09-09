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

  //click Alerts in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(9) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(9) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(9) > A:nth-child(1)")
  //v?
  // .click(".menu_contenu_admin_delais .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")

  //click modify button
  .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(10) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(10) > A:nth-child(1)')

  //click save button
  .click('[value="Save"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(8) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(6) > DIV:nth-child(8) > INPUT:nth-child(1)')

  
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