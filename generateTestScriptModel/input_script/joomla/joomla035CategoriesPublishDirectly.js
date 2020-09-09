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

  //click categories
  // .click("[href=\"\\/Joomla_3_5_0\\/administrator\\/index\\.php\\?option\\=com_categories\\&extension\\=com_content\"] .j-links-link")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1) > SPAN:nth-child(2)")
  .click("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(3) > A:nth-child(1) > SPAN:nth-child(2)")

  //click the button New
  // .click(".btn-small.btn-success")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#toolbar-new > BUTTON:nth-child(1)")

  .type("#jform_title", "New Category Title")

  //click button save
  // .click(".btn-success")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  .click("#toolbar-apply > BUTTON:nth-child(1)")

  //click button cancel
  // .click("#toolbar-cancel .btn-small")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > BUTTON:nth-child(1)")
  // .click("#toolbar-cancel > BUTTON:nth-child(1)")
  //v7
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(4) > BUTTON:nth-child(1)")  

  //click the category
  // .click("#submenu [href=\"index\.php\?option\=com_categories\&extension\=com_content\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(2) > A:nth-child(1)")
  .click("#submenu > LI:nth-child(2) > A:nth-child(1)")
  
  //click the publish of item 
  // .click("[onclick=\"return listItemTask\(\'cb0\'\,\'categories\.unpublish\'\)\"] .icon-publish")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > TABLE:nth-child(2) > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(3) > DIV:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")
  .click("#categoryList > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(3) > DIV:nth-child(1) > A:nth-child(1) > SPAN:nth-child(1)")

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