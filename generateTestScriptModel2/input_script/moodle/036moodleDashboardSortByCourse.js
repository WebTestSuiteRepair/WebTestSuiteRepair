"use strict";

var Nightmare = require("nightmare");
// var should = require("chai").should();
// var expect = require("chai").expect;

var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  // .goto("http://localhost:8888/moodle_3_4_5/")
  .goto("http://localhost:8888/moodle_3_4_5/login/index.php")

  // .click("#yui_3_17_2_1_1553508179757_19")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  // .click("#page-wrapper > HEADER:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(3) > SPAN:nth-child(1) > A:nth-child(1)")
  
  .type("#username", "admin")
  .type("#password", "TestMoodle$100")
  .click("#loginbtn")

  //click the Dashboard
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(1) > A:nth-child(1) > DIV:nth-child(1)")

  //click timeline tag
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")

  //click sort by course
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > A:nth-child(2)")
  //click sort by dates
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > ASIDE:nth-child(2) > ASIDE:nth-child(5) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > A:nth-child(1)")

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