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

  //click List of User
  //v5
  // .click(".menu_contenu:nth-of-type(5) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  //v6
  // .click('.menu_contenu_user_index .vsmenu')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  // .click('#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)')

  //click admin
  //v5
  // .click(".impair:nth-of-type(3) .classfortooltip .valignmiddle:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  //v6 break
  // .click('tr:nth-of-type(3) .inline-block.valignmiddle')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)')
  // .click('#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)')

  //click modify button
  //v5
  .click(".butAction")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click('.butAction')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > A:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > A:nth-child(1)')

  //click save button
  //v5
  // .click("[align] [type=\"submit\"]:nth-of-type(1)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(6) > INPUT:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(6) > INPUT:nth-child(1)")
  //v6
  // .click('[align] [type="submit"]:nth-of-type(1)')
  // .click('HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(6) > INPUT:nth-child(1)')
  // .click('#id-right > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(6) > INPUT:nth-child(1)')


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