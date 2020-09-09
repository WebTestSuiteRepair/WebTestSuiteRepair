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

  //click new User
  //v5
  .click(".menu_contenu:nth-of-type(4) .vsmenu")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(4) > A:nth-child(1)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(4) > A:nth-child(1)")
  //v6
  // .click(".menu_contenu_user_card .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(4) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(4) > A:nth-child(1)")

  .type("#lastname", "lastName1")
  .type("[maxsize=\"24\"]", "logindine")

  //click create user submit
  .click("#id-right > DIV:nth-child(1) > FORM:nth-child(4) > DIV:nth-child(6) > INPUT:nth-child(1)")

  //click user&group
  //v5
  .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")  
  //v6
  // .click(".blockvmenulast .vmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(1) > A:nth-child(1)")

  //click userlist
  //v5
  // .click(".menu_contenu:nth-of-type(5) .vsmenu")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  //v6
  // .click('.menu_contenu_user_index .vsmenu')
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")
  // .click("#id-left > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(5) > A:nth-child(1)")

  //click item user
  //v5
  // .click(".pair:nth-of-type(4) .classfortooltip .valignmiddle:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  // repair in new version
  //v?
  // .click("tr:nth-of-type(4) .valignmiddle")
  // .click("#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(4) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")

  //click delete button
  //v5
  // .click(".tabsAction .divButAction:nth-of-type(5) .butActionDelete")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(5) > A:nth-child(1)")
  .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(5) > A:nth-child(1)")
  //v?
  // .click("#id-right > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(6) > A:nth-child(1)")
  // .click(".tabsAction .divButAction:nth-of-type(6) .butActionDelete")

  //click confirm YES
  //v5
  // .click(".ui-dialog-buttonset [role=\"button\"]:nth-of-type(1) .ui-button-text")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")
  .click("#mainbody > DIV:nth-child(11) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1) > SPAN:nth-child(1)")
  //v?
  // .click('.ui-dialog-buttonset .ui-widget:nth-of-type(1)')
  // .click('#mainbody > DIV:nth-child(12) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')
  // repair in new version
  // .click('#mainbody > DIV:nth-child(14) > DIV:nth-child(3) > DIV:nth-child(1) > BUTTON:nth-child(1)')

  //select limit 25
  //v5
  .select("[name=\"limit\"]", "25")

  //click limit number one page
  //v5
  // .click("[name=\"limit\"]")

  //click login to sort by name in table
  //v5
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TH:nth-child(1) > A:nth-child(1)")
  // .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(1) > TH:nth-child(1) > A:nth-child(1)")

  // click admin item
  //v5
  // .click(".impair:nth-of-type(3) .classfortooltip .valignmiddle:nth-of-type(2)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > FORM:nth-child(1) > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  // .click("#searchFormList > DIV:nth-child(8) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)")
  //v?
  // .click('#searchFormList > DIV:nth-child(9) > TABLE:nth-child(1) > TBODY:nth-child(1) > TR:nth-child(3) > TD:nth-child(1) > A:nth-child(1) > DIV:nth-child(2)')

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