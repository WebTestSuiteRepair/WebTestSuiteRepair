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

  //click Dictionaries in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(15) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(15) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(4) > DIV:nth-child(15) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_dict .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(16) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(16) > A:nth-child(1)")

  //click the Currencies
  //v5
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)")
  //v6
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > TABLE:nth-child(5) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  // repair
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(5) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  
  // click back to list
  //v5
  // .click("[href=\"\/dolibarr_5_0_0\/htdocs\/admin\/dict\.php\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(3) > A:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(3) > A:nth-child(1)")
  //v6
  // .click('#id-right > DIV:nth-child(1) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(3) > A:nth-child(1)')
  

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