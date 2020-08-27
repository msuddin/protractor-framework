# Protractor Framework

## Purpose
This is a sample Protractor Framework. This project contains a single test (needs some more solid examples) with a single page object (also need some more examples).

## Features
 - Allure Reporting
 - HTML Reporting
 - Screenshots on Test Failure

## Instructions

### Installing Dependencies
From the root directory, need to instal all the dependencies:
```
npm install
```

### Running Tests
Run the following command to run all tests:
```
protractor conf/conf/js
```

### Seeing Reports

#### Allure Reports
To see Allure reports, from the root directory, run comand to start server:
```
allure serve allure-results
```

#### HTML Reports
Open ProtractorTestReport.html from root directory of ths project.

## Still Under Development
 - dockerfile + docker-compose.yml still needs work, chrome binary does not work

## Dependencies Used
Using Screenshot library:
https://www.npmjs.com/package/protractor-jasmine2-screenshot-reporter

Using Jasmine Allure Reporting:
https://www.npmjs.com/package/jasmine-allure-reporter
https://www.npmjs.com/package/allure-commandline

## Useful Info
Log into a docker container
```
docker exec -it my_jenkins /bin/bash
```
Stop all containers, remove them and then remove all images
```
docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q) && docker rmi $(docker images -q)
```