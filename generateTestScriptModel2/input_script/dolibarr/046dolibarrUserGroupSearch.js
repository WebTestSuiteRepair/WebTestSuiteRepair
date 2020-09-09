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

  //click user&group
  //v5
  .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")  
  //v6
  // .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")

  //type User
  //v5
  // .type("[method] .impair:nth-of-type(2) [type=\"text\"]", "admin")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "admin")
  .type('#id-right > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "admin")
  //v6
  // .type('.fichethirdleft tr:nth-of-type(2) [type]', "admin")
  // .type('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "admin")
  // .type('#id-right > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > INPUT:nth-child(1)', "admin")

  //click search button
  //v5
  .click(".button")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(3) > INPUT:nth-child(1)")
  //v6
  // .click('.button')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > TABLE:nth-child(2) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > INPUT:nth-child(1)')


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