"use strict";
var Nightmare = require("nightmare");
var nightmare = Nightmare({
  show: true
});

nightmare
  // Visit login page
  .goto("http://localhost:8888/Joomla_3_6_0/administrator/")////version 3.6.0
  // .goto("http://localhost:8888/Joomla_3_7_0/administrator/")////version 3.7.0
  
  .type("#mod-login-username", "admin")
  .type("#mod-login-password", "123456")  
  //click login button
  // .click(".login-button")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(4) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#form-login > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")

  //click  Users
  // .click("[href=\"\\/Joomla_3_5_0\\/administrator\\/index\\.php\\?option\\=com_users\"] .j-links-link")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(6) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(2)")
  .click("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(6) > LI:nth-child(1) > A:nth-child(1) > SPAN:nth-child(2)")

  //click cuser Group
  // .click(".active [href]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)")
  .click("#submenu > LI:nth-child(2) > A:nth-child(1)")

  //click new button
  // .click(".btn-success")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#toolbar-new > BUTTON:nth-child(1)")

  //input title
  .type("#jform_title", "UserGroupTitle")

  //click group parent
  // .click("[tabindex] span")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > A:nth-child(1) > SPAN:nth-child(1)")
  .click("#jform_parent_id_chzn > A:nth-child(1) > SPAN:nth-child(1)")

  //click the guest
  // .click("[data-option-array-index=\"1\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > FIELDSET:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(2)")
  .click("#jform_parent_id_chzn > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(2)")

  //click save&new button
  // .click("#toolbar-save-new .btn-small")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > BUTTON:nth-child(1)")
  .click("#toolbar-save-new > BUTTON:nth-child(1)")

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