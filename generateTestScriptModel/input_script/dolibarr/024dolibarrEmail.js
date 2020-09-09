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

  //click email in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(13) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(13) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(13) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_mails .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")

  //click button modify
  //v5
  // .click(".tabsAction .butAction:nth-of-type(1)")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(5) > A:nth-child(1)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(5) > A:nth-child(1)")
  //v6
  // .click('.tabsAction .butAction:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(4) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(4) > A:nth-child(1)')

  //click the select
  //v5
  // .click('[name="MAIN_DISABLE_ALL_MAILS"]')
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > SELECT:nth-child(1)")
  // .click('#MAIN_DISABLE_ALL_MAILS')
  //v6
  // .click('[name="MAIN_DISABLE_ALL_MAILS"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(4) > TABLE:nth-child(3) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > SELECT:nth-child(1)')
  // .click('#MAIN_DISABLE_ALL_MAILS')

  //click save button
  //v5
  // .click("[method] .center [type=\"submit\"]:nth-of-type(1)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(5) > INPUT:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(5) > DIV:nth-child(5) > INPUT:nth-child(1)")
  //v6
  // .click('.fiche .center [type="submit"]:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(6) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(3) > DIV:nth-child(6) > INPUT:nth-child(1)')
  
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