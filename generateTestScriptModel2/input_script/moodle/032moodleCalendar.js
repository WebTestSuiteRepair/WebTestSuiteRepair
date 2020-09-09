"use strict";

var Nightmare = require("nightmare");

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle_3_4_5/")
  // .goto("http://localhost:8888/moodle_3_4_5/login/index.php")
  .goto("http://localhost:8888/moodle_3_5_0/login/index.php")
  // .goto("http://localhost:8888/moodle_3_6_0/login/index.php")
  
  // .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")

  //click calendar on left side
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1)")
  // .click("#nav-drawer > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > NAV:nth-child(1) > A:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")

  // click tag calendar
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(1) > OL:nth-child(1) > LI:nth-child(3) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(1) > OL:nth-child(1) > LI:nth-child(3) > A:nth-child(1)")

  // click new event
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")
  //v5
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(3)")

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