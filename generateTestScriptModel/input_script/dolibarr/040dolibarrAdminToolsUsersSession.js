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

  //click UsersSession in left
  //v5
  // .click("#id-left .menu_contenu:nth-of-type(14) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_admin_tools_listsessions .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(5) > DIV:nth-child(14) > A:nth-child(1)")

  //click purge of session button
  //v5
  .click(".butActionDelete")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)")
  //v?
  // .click('.butActionDelete')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(2)')

  //click yes
  //v5
  // .click(".ui-dialog-buttonset [role=\"button\"]:nth-of-type(1) .ui-button-text")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(10) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")
  .click("#mainbody > DIV:nth-child(10) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")
  //v?
  // .click('.ui-dialog-buttonset .ui-widget:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')
  // .click('#mainbody > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')
  // repair
  // .click('#mainbody > DIV:nth-child(11) > DIV:nth-child(1) > BUTTON:nth-child(2)')

  // click Lock new connections
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(8) > A:nth-child(1)')
  .click('.butAction')

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