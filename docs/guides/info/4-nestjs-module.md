---
sidebar_position: 4
---

# Function for creating a NestJS-mod module

The `createNestModule` function for creating a dynamic NestJS module with the ability to configure through configurations or environment variables, as well as providing the ability to use part of the module’s services through the `forFeature` method or transfer part of the configurations from the module feature.

All modules have the ability to create several parallel named instances of the module with different input parameters; to do this, you need to pass the name of the instance to the `contextName` option.

Unlike NestJS modules, NestJS-mod modules can contain additional wrapper methods that will be called when building a NestJS application.

## An example of creating a native NestJS module using the createNestModule function and passing various types of configurations

```typescript
import {
  ConfigModel,
  ConfigModelProperty,
  EnvModel,
  EnvModelProperty,
  createNestModule,
  getNestModuleDecorators,
  InjectableFeatureConfigurationType,
} from "@nestjs-mod/common";
import { Injectable } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { IsNotEmpty } from "class-validator";

// App1Module

const { InjectFeatures } = getNestModuleDecorators({
  moduleName: "App1Module",
});

@ConfigModel()
class AppFeatureConfig {
  @ConfigModelProperty()
  @IsNotEmpty()
  featureOptionConfig!: string;
}

@Injectable()
class AppFeaturesService {
  constructor(
    @InjectFeatures()
    private readonly appFeatureConfigs: InjectableFeatureConfigurationType<AppFeatureConfig>[]
  ) {}

  getFeatureConfigs() {
    return this.appFeatureConfigs.map(
      ({ featureConfiguration }) => featureConfiguration
    );
  }
}

const { App1Module } = createNestModule({
  moduleName: "App1Module",
  sharedProviders: [AppFeaturesService],
  featureConfigurationModel: AppFeatureConfig,
});

@ConfigModel()
class App2Config {
  @ConfigModelProperty()
  @IsNotEmpty()
  option!: string;
}

@Injectable()
class App2Service {
  constructor(
    private readonly appFeaturesService: AppFeaturesService,
    private readonly app2Config: App2Config
  ) {}

  getFeatureConfigs() {
    return this.appFeaturesService.getFeatureConfigs();
  }

  getConfig() {
    return this.app2Config;
  }
}

// App2Module

const { App2Module } = createNestModule({
  moduleName: "App2Module",
  imports: [
    App1Module.forFeature({
      featureModuleName: "App2Module",
      featureConfiguration: { featureOptionConfig: "featureOptionConfig-app2" },
    }),
  ],
  providers: [App2Service],
  configurationModel: App2Config,
});

@EnvModel()
class App3Env {
  @EnvModelProperty()
  @IsNotEmpty()
  option!: string;
}

@Injectable()
class App3Service {
  constructor(
    private readonly appFeaturesService: AppFeaturesService,
    private readonly app3Env: App3Env
  ) {}

  getFeatureConfigs() {
    return this.appFeaturesService.getFeatureConfigs();
  }

  getEnv() {
    return this.app3Env;
  }
}

const { App3Module } = createNestModule({
  moduleName: "App3Module",
  imports: [
    App1Module.forFeature({
      featureModuleName: "App2Module",
      featureConfiguration: { featureOptionConfig: "featureOptionConfig-app3" },
    }),
  ],
  providers: [App3Service],
  environmentsModel: App3Env,
});

// Test

const { AppModule } = createNestModule({
  moduleName: "AppModule",
  imports: [
    App1Module.forRoot(),
    App2Module.forRoot({ configuration: { option: "appConfig3value" } }),
    App3Module.forRoot({ environments: { option: "appEnv2value" } }),
  ],
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule.forRoot());
  const appFeatureScannerService = app.get(AppFeaturesService);
  const app2Service = app.get(App2Service);
  const app3Service = app.get(App3Service);

  console.log(appFeatureScannerService.getFeatureConfigs()); // output: [{ featureOptionConfig: 'featureOptionConfig-app2' }, { featureOptionConfig: 'featureOptionConfig-app3' }]
  console.log(app2Service.getFeatureConfigs()); // output: [{ featureOptionConfig: 'featureOptionConfig-app2' }, { featureOptionConfig: 'featureOptionConfig-app3' }]
  console.log(app3Service.getFeatureConfigs()); // output: [{ featureOptionConfig: 'featureOptionConfig-app2' }, { featureOptionConfig: 'featureOptionConfig-app3' }]
  console.log(app2Service.getConfig()); // output: { option: 'appConfig3value' }
  console.log(app3Service.getEnv()); // output: { option: 'appEnv2value' }
}

bootstrap();
```

### Wrapper methods

- preWrapApplication - called for all root modules, here we can create another additional root module, the configuration for which will be dynamically generated based on the original module, for example: set a new prefix to the name of the keys when working with environment variables ([code example](https ://github.com/nestjs-mod/nestjs-mod/blob/8ab5dc5a340215bdba8cea63e004dea2c3676e95/libs/common/src/lib/modules/system/project-utils/project-utils.module.ts#L50))
- wrapApplication - a method that can create a NestJS application or microservice, returns an instance of the created application. ([code example](https://github.com/nestjs-mod/nestjs-mod/blob/8ab5dc5a340215bdba8cea63e004dea2c3676e95/libs/common/src/lib/modules/system/default-nest-application/default-nest-application- initializer.ts#L106))
- postWrapApplication - this method works after the application is created, for example, you need to start listening on the HTTP port ([code example](https://github.com/nestjs-mod/nestjs-mod/blob/8ab5dc5a340215bdba8cea63e004dea2c3676e95/libs/common/src/lib /modules/system/default-nest-application/default-nest-application-listener.ts#L79))

When creating a module, you can pass many different new parameters, there are both original NestJS options and extended ones.

Descriptions and examples of using each option will be discussed in separate posts; now I will only describe the options for configuring the module.

### Options for creating a NestJS-mod module

**environmentsModel**

The class and its properties are marked with decorators of the type “Environment Variables” (Env model), it contains properties with primitive types used in the module, the values of which can be obtained from various sources, such as: `process.env` or `consul-kv` .

**configurationModel**

The class and its properties are marked with decorators of the “Config model” type; the properties of primitive and complex types that are used in the module, the values for which must be passed when connecting the module to the application, are described in the code.

**staticEnvironmentsModel**

The “Environment Variables” class (Env model) with static properties of a primitive type can be used at the time of generating module metadata; values can be obtained from various sources, for example: `process.env` or `consul-kv`.

> Example: different import conditions depending on environment variables, dynamic routes for REST controllers.

**staticConfigurationModel**

A configuration class with static properties of primitive and complex types that can be used when generating module metadata (imports, controllers); values for them must be passed when connecting the module to the application.

**featureEnvironmentsModel**

Environment variables are a “feature” of modules with primitive types, the values of which can be obtained from various sources, such as: `process.env` or `consul-kv`.

> Example: the name of the environment variable for connecting to the database feature of the module differs from the name of the environment variable of the root connection.

**featureConfigurationModel**

A class for the “feature” of modules, variables of primitive and complex types that can be added to the current module from other modules.

> Example: the transport for sending a message can be defined as a product “feature” functionality, but the main implementation of bypassing recipients and sending will be a “core” or “integration” module.

### Create the main dynamic module and pass the asynchronous configuration

When the configuration of a module is unknown in advance, we can pass it using an asynchronous factory; if other modules are needed for its operation, we can pass them through the `imports` option, just like in regular NestJS.

In addition to the asynchronous factory, you can also use class and pass by value, just like in regular NestJS.

NestJS-mod has another way of passing a configuration, this is passing an Observable stream with the values of this configuration. This method is needed when values may change over time.

> Example: core module for dynamically changing the address and credentials of a proxy server when the current one is blocked, the module feature may not call an additional method to obtain the current address and credentials, it simply uses the configuration instance that was connected through the constructor, as if it were a static configuration.

### Working with options that were passed from other modules (configuration feature)

Since at the time of initialization of NestJS modules, the order of loading (resolving) may differ, definitely at the moment of start we can get all the “configuration features” only in the NestJS `onApplicationBootstrap` hook.

To obtain it you need to use the `InjectFeatures` decorator.
When the application is running (runtime), there are no longer any problems with access to all configurations.

### Decorators for working with module entities

Since the use of decorators is static code and cannot be changed in real time, decorators for each module must be created manually using the `getNestModuleDecorators` function

### Types of decorators:

**InjectService**

To connect a provider using an injected token or class.

> Example: if an application has several instances of the same module, but with different context names, then the name of this context can be passed to the decorator.

**InjectFeatures**

To connect an array with all configurations obtained from various modules.

> Example: There is a “systems” website accessibility module and there is a configuration feature through which the “core” module for working with the database can notify about the functionality of the database. Based on this list of “systems,” the module decides whether people can be allowed into the backend.

**InjectAllFeatures**

If the application has several instances of a module with different contexts, then to get all the “feature configurations” you need to use this decorator.

**InjectFeatureEnvironments**

In addition to configurations, you can also get all the environment variables that the feature modules used.

> Example: a certain console application that, at startup, will create all the necessary databases on the database server, we receive the connection string to the database with root rights from the “systems” of the module, and the connection string to the database of the feature modules themselves is passed from the feature modules themselves and at the same time All key names are different and must be validated when starting the application.

**InjectAllFeatureEnvironments**

The same as `InjectFeatureEnvironments` only collects information on all instances of the module.

**InjectModuleSettings**

Sometimes you need to get all the metadata of configuration classes and classes for module environment variables, this is a decorator for that.

> Example: the application collects all configuration values of environment variables with the names of the keys and generates a report.

**InjectAllModuleSettings**

Context-independent retrieval of all module configuration metadata.
