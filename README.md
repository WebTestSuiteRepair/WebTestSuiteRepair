# WebTestSuiteRepair

This is an approach to repair broken test suites for web applications.
Test suites need to evolve with the evolution of web apps.
We generate TestSuiteGraph (TestSuiteModel) to find and repair the broken tests.


## Preparation of Testing Web Apps

1. Download the corresponding versions of the web applications.

   [Joomla 3.6.0 and Joomla 3.7.0](https://github.com/joomla/joomla-cms/releases)

   [moodle-3.5.0 and moodle-3.6.0](https://github.com/moodle/moodle/releases)

   [dolibarr-5.0.0 and dolibarr-6.0.0](https://github.com/Dolibarr/dolibarr/releases)

2. And install these web apps   
   
   The database for them is mysql. Database Configuration:
     * Host name:127.0.0.1
     * Username:root
     * passworld: 12345678
     * databaseName: Joomla_3_6_0 or Joomla_3_7_0 
                     or moodle_3_5_0 or moodle_3_6_0 
                     or dolibarr_5_0_0 or dolibarr_6_0_0


   The login account for these web apps: 
     * account : admin, 
     * passworld : 123456

3. Then these web apps are ready to test.

   On my local computer machine, I set the port as **8888** , 

   So the Joomla URLs are :
     * http://localhost:8888/Joomla_3_6_0/administrator/ 
     * http://localhost:8888/Joomla_3_7_0/administrator/

   And Moodle URLs : 
     * http://localhost:8888/moodle_3_5_0/login/index.php 
     * http://localhost:8888/moodle_3_6_0/login/index.php

   And Dolibarr URLs : 

     * http://localhost:8888/dolibarr_5_0_0/htdocs/index.php
     * http://localhost:8888/dolibarr_6_0_0/htdocs/index.php


## Prepare Test Suites

You can write your own test suites, now we give the example of test suites in file input_script.


## Steps to use this repair approach

if you want to use it, please follow these steps:

1. Install mocha:
   ```
   npm install --global mocha
   ```

2. clone this repository:

```
git clone https://github.com/WebTestSuiteRepair/WebTestSuiteRepair.git
```

3. start docker-compose:

In docker-compose file,

```
docker-compose up
```

4. generate TSGR1:

In file generateTestScriptModel,

```
npm install
mocha generateTSM.js
```
It will take several minutes to create TSGR1.
But, if you want to repair other Tests, you can change input path at line 11 in generateTSM.js

5. generate TSGR2:

In file generateTestScriptModelR2,

```
npm install
mocha generateTSM.js
```
It will take several minutes to create TSGR2.
But, if you want to repair other Tests, you can change input path at line 11 in generateTSM.js

6. compare TSGs:

In file TSGsComparison,
```
npm install
mocha index.js
```

Before you start to compare TSGs, it is needed to confirm "WebAppR1" and "WebAppR2" at line 24 in index.js 

We will try to develop web platform for users, to make it easier using our approach for repair broken tests.






