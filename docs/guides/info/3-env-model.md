---
sidebar_position: 3
---

# Environment variables

Decorators `EnvModel`, `EnvModelProperty` for describing the module's environment variables and the `envTransform` function for its serialization and verification. Values can be automatically read from `process.env` or other sources such as https://www.vaultproject.io or https://developer.hashicorp.com/consul/docs/dynamic-app-config/kv.

### Example NestJS application with different ways to use environment variables

```typescript
import { EnvModel, EnvModelProperty, envTransform } from "@nestjs-mod/common";
import { DynamicModule, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { IsNotEmpty } from "class-validator";

// Describe a class for working with environment variables
@EnvModel()
class AppEnv {
  @EnvModelProperty()
  @IsNotEmpty()
  option!: string;
}

// Describe a module that receives the values of environment variables when calling the forRoot method
@Module({ providers: [AppEnv] })
class AppModule {
  static forRoot(env: Partial<AppEnv>): DynamicModule {
    return {
      module: AppModule,
      providers: [
        {
          provide: `${AppEnv.name}_loader`,
          useFactory: async (emptyAppEnv: AppEnv) => {
            if (env.constructor !== Object) {
              Object.setPrototypeOf(emptyAppEnv, env);
            }
            const obj = await envTransform({
              model: AppEnv,
              data: env,
            });
            Object.assign(emptyAppEnv, obj.data);
          },
          inject: [AppEnv],
        },
      ],
    };
  }
}

// We try to run the application and at the same time we do not pass anything to the module and do not have the necessary variables in process.env
async function bootstrap1() {
  const app = await NestFactory.create(AppModule.forRoot({}));
  await app.listen(3000);
}

// We get a validation error
// throw new ConfigModelValidationErrors(validateErrors);
// isNotEmpty: option should not be empty
bootstrap1();

// We try to launch the application and manually transfer the values of environment variables to the module, process.env is still empty
async function bootstrap2() {
  const app = await NestFactory.create(AppModule.forRoot({ option: "value1" }));
  console.log(app.get(AppEnv)); // output: { option: 'value1' }
  await app.listen(3000);
}

// No error
bootstrap2();

// We try to launch the application and do not pass the values of environment variables to the module, but put them in process.env
async function bootstrap3() {
  process.env["OPTION"] = "value1";
  const app = await NestFactory.create(AppModule.forRoot({}));
  console.log(app.get(AppEnv)); // output: { option: 'value1' }
  await app.listen(3000);
}

// No error
bootstrap3();
```

### Field key names are formed using formatters.

Examples:

- main formatter - transforms the chain of names: application, context, module, properties, which are formed during the process of starting the creation of the application and module (example: *PROJECT_NAME+CONTEXT_NAME+MODULE_NAME+PROPERTY_NAME*). ([code](https://github.com/nestjs-mod/nestjs-mod/blob/master/libs/common/src/lib/env-model/formatters/dot-env-property-name.formatter.ts))
- custom formatter - inherited from the main transformer and includes in the naming chain an additional static string *PROJECT_NAME+CONTEXT_NAME+MODULE_NAME+STATIC_STRING+PROPERTY_NAME*) ([code](https://github.com/nestjs-mod/nestjs-mod-contrib/blob/master/libs/core/prisma/src/lib/formatters/dot-env-property-name.formatter.ts))

### The values of environment variables are obtained using extractors, which in their work use the names of the keys that the formatters created.

Examples:

- main extractor - gets the value by key from the object that was passed to the `configTransform` function ([code](https://github.com/nestjs-mod/nestjs-mod/blob/master/libs/common/src/lib/env-model/extractors/default-property-value.extractor.ts))
- `process.env` extractor - gets values from the environment of the current process ([code](https://github.com/nestjs-mod/nestjs-mod/blob/master/libs/common/src/lib/env-model/extractors/process-env-property-value.extractor.ts))
