---
sidebar_position: 1
---

# Introduction

## Problems

NestJS is a great framework and you can do great things with it, but often when we develop many applications in one organization we end up with different application architectures, file structures, and a lot of duplicate code.

To unify application architecture and develop standard modules, many teams began to develop their own solutions that hang on top of NestJS.

In addition to writing product code, there is also a need for a unified process for building and delivering that code directly to the customer.

When the product and team are the same, then there are no problems with different code bases, deployment and delivery; you set it up once and it always works.

But when new products or new microservices start appearing in separate repositories, all the settings and code start to diverge.

If an organization has a devops specialist or an entire department dedicated to automating development processes, they can take on the work of synchronizing devops settings, but the problem of synchronizing product architectures and module architectures will remain.

In addition to the above, there is also a need to generate a report on the entire project infrastructure with all the environment variables used and their values, as well as a report on all the options that were used in the modules.

## Solutions

Since I wrote a lot of different code on NestJS, I know typical architectural solutions that are more often used when developing modules, but to use them I had to write a lot of the same type of code.

Constantly adjusting devops for projects with different modules was also very tiring.

The NestJS-mod collection of utilities is designed to unify applications and modules, and also introduces new logical possibilities for separating responsibilities between modules (System, Core, Feature, Integration, Infrastructure).

Since all parts of the application are unified, you can create a report on the entire project infrastructure.

The single source of information for operation, deployment, delivery and documentation is the NestJS-mod application itself.

NestJS-mod modules themselves generate all the necessary settings and scripts for launching various infrastructure systems.
