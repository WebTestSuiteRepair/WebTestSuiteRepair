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
  //version 3.5.0
  // .click("#page-wrapper > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")
  
  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")
  
  //click dashboard
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  
  //click Online users 
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#page-footer > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > SECTION:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(2) > ASIDE:nth-child(1) > SECTION:nth-child(8) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")

  //click link BrowserSessions
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(5) > SPAN:nth-child(1) > A:nth-child(1)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(5) > SPAN:nth-child(1) > A:nth-child(1)")
  //version 3.5.0
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(5) > SPAN:nth-child(1) > A:nth-child(1)")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(3) > UL:nth-child(2) > LI:nth-child(5) > SPAN:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > SECTION:nth-child(4) > UL:nth-child(2) > LI:nth-child(5) > SPAN:nth-child(1) > A:nth-child(1)")

  //click Browser sessions
  // v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(1) > OL:nth-child(1) > LI:nth-child(4) > A:nth-child(1)")
  // v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > HEADER:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(1) > OL:nth-child(1) > LI:nth-child(4) > A:nth-child(1)")


  
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