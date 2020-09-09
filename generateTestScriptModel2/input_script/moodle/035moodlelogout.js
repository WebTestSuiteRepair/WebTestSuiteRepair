"use strict";

var Nightmare = require("nightmare");
// var should = require("chai").should();
// var expect = require("chai").expect;

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle_3_4_5/login/index.php")
  .goto("http://localhost:8888/moodle_3_5_0/login/index.php")
  // .goto("http://localhost:8888/moodle_3_6_0/login/index.php")

  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")

  //click dropdown icon
  //v5
  .click("#dropdown-1")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("#dropdown-1")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")

  //click logout
  //v5
  // .click("#actionmenuaction-6")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(7) > SPAN:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(2) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > A:nth-child(7)")

  //click login link
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > NAV:nth-child(5) > UL:nth-child(4) > LI:nth-child(3) > DIV:nth-child(1) > SPAN:nth-child(1) > A:nth-child(1)")

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