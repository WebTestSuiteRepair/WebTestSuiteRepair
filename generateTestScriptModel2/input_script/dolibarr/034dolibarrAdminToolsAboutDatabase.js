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

  //click About database in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(8) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(8) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(8) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_system_database .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(8) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(8) > A:nth-child(1)")

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