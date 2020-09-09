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

  //click new article 
  // .click("[href=\"\\/Joomla\\/administrator\\/index\\.php\\?option\\=com_content\\&task\\=article\\.add\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")
  .click("#content > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > UL:nth-child(2) > LI:nth-child(1) > A:nth-child(1)")

  .type("#jform_title", "Article Title New");
  .type("#jform_articletext_ifr", "content of article");

  //click the save button 
  .click("#toolbar-apply > BUTTON:nth-child(1)")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > BUTTON:nth-child(1)")
  // .click("#toolbar-apply > BUTTON:nth-child(1)")

  //click the <<save and close>> button 
  // .click("#toolbar-save .btn-small")
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > BUTTON:nth-child(1)")
  // .click("#toolbar-save > BUTTON:nth-child(1)")
  //v7
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > BUTTON:nth-child(1)")
  
  //click  Articles
  // .click("[href=\"index\.php\?option\=com_content\&view\=articles\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  .click("#submenu > LI:nth-child(1) > A:nth-child(1)")

  //click checkbox
  // .click("tbody [sortable-group-id=\"2\"]:nth-of-type(1) [name]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > TABLE:nth-child(2) > TBODY:nth-child(3) > TR:nth-child(1) > TD:nth-child(2) > INPUT:nth-child(1)")
  .click("#cb0")

  //click batch button
  // .click("#toolbar-batch .btn-small")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(9) > BUTTON:nth-child(1)")
  .click("#toolbar-batch > BUTTON:nth-child(1)")

  //click language dropdown
  // .click("#batch_language_id_chzn [tabindex]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1)")
  .click("#batch_language_id_chzn > A:nth-child(1)")

  //click english language
  // .click("[data-option-array-index=\"2\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(3)")
  .click("#batch_language_id_chzn > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(3)")  

  //click access dropdown
  // .click("#batch_access_chzn span")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > A:nth-child(1) > SPAN:nth-child(1)")
  .click("#batch_access_chzn > A:nth-child(1) > SPAN:nth-child(1)")

  //click public
  // .click("#batch_access_chzn [data-option-array-index=\"1\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(2)")
  .click("#batch_access_chzn > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(2)")

  //click submit
  // .click(".modal-footer [type=\"submit\"]")
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(5) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(3) > BUTTON:nth-child(2)")
  .click("#collapseModal > DIV:nth-child(3) > BUTTON:nth-child(2)")

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