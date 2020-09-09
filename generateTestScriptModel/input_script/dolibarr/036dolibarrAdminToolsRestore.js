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

  //click restore in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(11) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(11) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(11) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_tools_dolibarr_import .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(10) > A:nth-child(1)")

  //click radio icon
  .click('#radio_dump_mysql')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FIELDSET:nth-child(7) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(1) > DIV:nth-child(1) > FIELDSET:nth-child(1) > DIV:nth-child(2) > INPUT:nth-child(1)')
  // .click('#radio_dump_mysql')

  //click show real command
  //v5
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FIELDSET:nth-child(7) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > DIV:nth-child(1) > FIELDSET:nth-child(1) > DIV:nth-child(2) > A:nth-child(5)")
  // .click("#mysql_options > DIV:nth-child(2) > A:nth-child(5)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FIELDSET:nth-child(7) > TABLE:nth-child(8) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > DIV:nth-child(1) > FIELDSET:nth-child(1) > DIV:nth-child(2) > A:nth-child(6)")
  // .click("#mysql_options > DIV:nth-child(2) > A:nth-child(6)")

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