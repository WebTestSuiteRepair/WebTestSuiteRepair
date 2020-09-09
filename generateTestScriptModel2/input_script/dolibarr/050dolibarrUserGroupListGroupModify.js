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

  //click list of  Group in the left
  //v5
  // .click(".menu_contenu:nth-of-type(9) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(9) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(9) > A:nth-child(1)")
  //v6
  // .click('.menu_contenu_user_group_index .vsmenu')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(9) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(9) > A:nth-child(1)")

  //click one of the member in the list
  //v5
  // .click("[href=\"card\.php\?id\=1\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)")
  .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)")
  //v6
  // .click('[href="card\.php\?id\=2"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  // .click('#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)')
  //repair correct!!
  // .click("#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(1) > A:nth-child(1)")

  //click modify button
  //v5
  // .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)')
  .click('#id-right > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)')
  //v6
  // .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)')

  //type the name
  //v5
  // .type("[size]", "testNewGroup")
  .type("#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testNewGroup")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testNewGroup")
  //v6
  // .type("[size]", "testNewGroup")
  // .type("#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testNewGroup")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)", "testNewGroup")
  
  //type the description
  //v5
  .type("#note", "try to test a new group. Input description")
  // .type(".flat", "try to test a new group. Input description")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > TEXTAREA:nth-child(1)", "try to test a new group. Input description")
  //v6
  // .type("textarea", "try to test a new group. Input description")
  // .type("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(4) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(2) > TD:nth-child(2) > TEXTAREA:nth-child(1)", "try to test a new group. Input description")
  // .type("#note", "try to test a new group. Input description")

  //click save button
  //v5
  .click('[value="Save"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(5) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(5) > INPUT:nth-child(1)')
  //v6
  // .click('[value="Save"]')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(5) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(5) > INPUT:nth-child(1)')

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