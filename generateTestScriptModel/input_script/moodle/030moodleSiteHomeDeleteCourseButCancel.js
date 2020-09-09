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
  
  // click the "Site administration"
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(7) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")
  // .click("#nav-drawer > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(7) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(8) > NAV:nth-child(2) > A:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > SPAN:nth-child(2)")

  // click the tag "Courses"
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")
  // .click("#region-main > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > UL:nth-child(6) > LI:nth-child(3) > A:nth-child(1)")

  // click the link "Manage courses and categories"
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  // .click("#linkcourses > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(7) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(1) > LI:nth-child(1) > A:nth-child(1)")
  
  //click new courses
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > A:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(1) > A:nth-child(1)")

  .type("#id_fullname", "coursefullname")
  .type("#id_shortname", "sname")
  .click("#id_saveandreturn")

  // click the delete button
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > UL:nth-child(3) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")
  // .click("#course-listing > DIV:nth-child(1) > UL:nth-child(3) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(3) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(3) > DIV:nth-child(4) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(2) > UL:nth-child(2) > LI:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(4) > SPAN:nth-child(1) > A:nth-child(2) > I:nth-child(1)")

  // click confirm to delete
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")
  // .click("#modal-footer > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")
  //v5
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(1) > FORM:nth-child(1) > BUTTON:nth-child(4)")

  // cancel and not delete
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")
  // .click("#modal-footer > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")
  //v5
  .click("HTML > BODY:nth-child(2) > DIV:nth-child(4) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")
  //v6
  // .click("HTML > BODY:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(6) > DIV:nth-child(2) > DIV:nth-child(1) > SECTION:nth-child(1) > DIV:nth-child(2) > DIV:nth-child(2) > DIV:nth-child(1) > DIV:nth-child(3) > DIV:nth-child(1) > DIV:nth-child(2) > FORM:nth-child(1) > BUTTON:nth-child(2)")

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