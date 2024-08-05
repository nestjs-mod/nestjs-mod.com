---
sidebar_position: 1
---

# Module types

When you create a NestJS module, all existing modules are imported into one imports option of the main application module.

When all the modules are in a single list, we cannot immediately determine which module is a business module and which carries the general logic for logging.

NestJS-mod has not one general option for importing modules, but several.

This decomposition of modules can help when building a report on the infrastructure, and also immediately displays a certain general meaning of the module within the entire application, which helps to quickly enter the context of the logic itself for which this module was designed.

```typescript
import { bootstrapNestApplication } from "@nestjs-mod/common";

bootstrapNestApplication({
  modules: {
    system: [],
    core: [],
    feature: [],
    integrations: [],
    infrastructure: [],
  },
});
```

Module processing order: 1) system, 2) core, 3) feature, 4) integrations, 5) infrastructure

## System modules (System)

Modules for the entire application.

> Examples: running a NestJS application, running microservices, etc.
> Compatible with NestJS-mod only.

## Core modules

Modules with the “Core” type are needed for the operation of functional modules and integration modules.

> Examples: main module with database connection, main module with connection to aws, etc.
> Compatible with NestJS and NestJS-mod.

## Feature modules

Functional (“feature”) modules with the business logic of the application.

> Compatible with NestJS and NestJS-mod.

## Integration modules

“Integration” modules for organizing communication between different functional, system or core modules.

> Example: after creating a user in the `UsersModule` module whose module type is “Feature”, you need to send him a letter from the `NotificationsModule` module with the “Core” type, while the user module does not have information about the transport and sending method, as well as an explicit connection with the notification module, the user module simply has a method in the `afterCreateUser` configuration, the implementation of which will already be transferred from a certain integration module.
> Compatible with NestJS and NestJS-mod.

## Infrastructure modules

Modules for creating configuration files for various services external to the application. These modules are excluded from the final list of modules that will be loaded into NestJS.

> Examples: `docker-compose` file for raising a database, `gitlab` configuration file for deploying an application.
> Compatible with NestJS-mod only.
