---
sidebar_position: 4
---

# Plans

- It will be necessary to decompose the code and improve the typing - since during the development of this project I set myself a certain deadline, which I was able to successfully meet, but the quality of the code suffered greatly.
- Write more tests for the main functionality - there are not tests for all possible situations; some parameters when using utilities were checked manually, and not automated through tests. The modules that are in the repository https://github.com/nestjs-mod/nestjs-mod-contrib do not have tests at all, everything was checked manually.
- Expand the infrastructure documentation generator.
- Add examples of use for all modules and utilities - now working with them can only be learned by reading the tests, but the documentation must be in the readme file.
- Add more wrapper modules or write your own implementations for typical things (working with Redis, working with Nodemailer, and so on).
- Add modules for generating pipeline configurations gitlab-ci, bitbucket, jenkins
- Add a generator for building docker images and generating scripts for deploying an application in Kubernetes.
- Write a console application for more convenient work with schematics.
- Add the ability to save meta information on modules and their configuration in package.json and the ability to deploy the entire code base and deployment and delivery parameters with just two files package.json and .env file.
- Create a cloud solution that will allow you to visually assemble the application and include all the necessary modules and groups of modules, which can be deployed anywhere.
