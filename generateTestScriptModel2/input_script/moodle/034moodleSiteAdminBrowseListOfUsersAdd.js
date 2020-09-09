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

  //click Site administration on left side
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")
  // .click("#nav-drawer > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(7) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(8) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  
  //click button search
  //v5
  .click("#id_search")
  // .click("[value=\"Search\"]")

  // click tag Users
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(2) > A:nth-child(1)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(2) > A:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(2) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(2) > A:nth-child(1)")

  //click Browse list of users
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  // .click("#linkusers > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")

  //click Add a new user
  // .click("#single_button5cae5cdb2c92515")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(6) > FORM:nth-child(1) > BUTTON:nth-child(2)")

  .type("#id_username", "testname")
  .type("#id_firstname", "ming")
  .type("#id_lastname", "zhen")
  .type("#id_email", "48484388@gmail.com")

  //click submit input
  .click("#id_submitbutton")

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