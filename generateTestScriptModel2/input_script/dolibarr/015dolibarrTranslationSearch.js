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

  //click translation in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(7) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(7) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(7) > A:nth-child(1)")  
  //v6
  // .click(".menu_contenu_admin_translation .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(7) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(7) > A:nth-child(1)")

  //click search tag
  .click('#searchkey')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(7) > DIV:nth-child(2) > A:nth-child(1)")
  // .click("#searchkey")

  //type transkey
  .type('[name="transkey"]', "ACCOUNTING_EXPORT")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(8) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)", "ACCOUNTING_EXPORT")
  // .type("#id-right > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(8) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)", "ACCOUNTING_EXPORT")

  //click icon to search
  //v5
  // .click("#id-right > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(7) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > DIV:nth-child(1) > INPUT:nth-child(1)")
  //v6
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(8) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(4) > DIV:nth-child(1) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(8) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(11) > DIV:nth-child(7) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)')


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