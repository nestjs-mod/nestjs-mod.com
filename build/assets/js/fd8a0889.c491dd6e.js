"use strict";(self.webpackChunknestjs_mod_com=self.webpackChunknestjs_mod_com||[]).push([[181],{4357:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var n=s(4848),i=s(8453);const o={},l="@nestjs-mod/testing",r={id:"packages/system/testing",title:"@nestjs-mod/testing",description:"Modules and utilities for writing application tests",source:"@site/docs/packages/system/testing.md",sourceDirName:"packages/system",slug:"/packages/system/testing",permalink:"/docs/packages/system/testing",draft:!1,unlisted:!1,editUrl:"https://github.com/nestjs-mod/nestjs-mod.com/blob/master/docs/packages/system/testing.md",tags:[],version:"current",frontMatter:{},sidebar:"packagesSidebar",previous:{title:"@nestjs-mod/terminus",permalink:"/docs/packages/system/terminus/"},next:{title:"Core",permalink:"/docs/category/core"}},a={},d=[{value:"Installation",id:"installation",level:2},{value:"Modules",id:"modules",level:2},{value:"Modules descriptions",id:"modules-descriptions",level:2},{value:"DefaultTestNestApplicationCreate",id:"defaulttestnestapplicationcreate",level:3},{value:"Use in NestJS-mod",id:"use-in-nestjs-mod",level:4},{value:"Static configuration",id:"static-configuration",level:4},{value:"DefaultTestNestApplicationInitializer",id:"defaulttestnestapplicationinitializer",level:3},{value:"Use in NestJS-mod",id:"use-in-nestjs-mod-1",level:4},{value:"Static configuration",id:"static-configuration-1",level:4},{value:"Links",id:"links",level:2},{value:"License",id:"license",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"nestjs-modtesting",children:"@nestjs-mod/testing"}),"\n",(0,n.jsx)(t.p,{children:"Modules and utilities for writing application tests"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://npmjs.org/package/@nestjs-mod/testing",children:(0,n.jsx)(t.img,{src:"https://badgen.net/npm/v/@nestjs-mod/testing",alt:"NPM version"})})," ",(0,n.jsx)(t.a,{href:"https://npmjs.org/package/@nestjs-mod/testing",children:(0,n.jsx)(t.img,{src:"https://badgen.net/npm/dm/@nestjs-mod/testing",alt:"monthly downloads"})})," ",(0,n.jsx)(t.a,{href:"https://t.me/nestjs_mod",children:(0,n.jsx)(t.img,{src:"https://img.shields.io/badge/group-telegram-blue.svg?maxAge=2592000",alt:"Telegram bot"})})]}),"\n",(0,n.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"npm i --save-dev @nestjs/testing @nestjs-mod/testing\n"})}),"\n",(0,n.jsx)(t.h2,{id:"modules",children:"Modules"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Link"}),(0,n.jsx)(t.th,{children:"Category"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#defaulttestnestapplicationcreate",children:"DefaultTestNestApplicationCreate"})}),(0,n.jsx)(t.td,{children:"system"}),(0,n.jsx)(t.td,{children:"Default test NestJS application creator."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"#defaulttestnestapplicationinitializer",children:"DefaultTestNestApplicationInitializer"})}),(0,n.jsx)(t.td,{children:"system"}),(0,n.jsx)(t.td,{children:"Default test NestJS application initializer."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"modules-descriptions",children:"Modules descriptions"}),"\n",(0,n.jsx)(t.h3,{id:"defaulttestnestapplicationcreate",children:"DefaultTestNestApplicationCreate"}),"\n",(0,n.jsx)(t.p,{children:"Default test NestJS application creator."}),"\n",(0,n.jsx)(t.h4,{id:"use-in-nestjs-mod",children:"Use in NestJS-mod"}),"\n",(0,n.jsx)(t.p,{children:"Use without options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { bootstrapNestApplication } from '@nestjs-mod/common';\nimport { DefaultTestNestApplicationCreate } from '@nestjs-mod/testing';\n\nbootstrapNestApplication({\n  modules: {\n    system: [DefaultTestNestApplicationCreate.forRoot()],\n  },\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"Example of use with override provider."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { bootstrapNestApplication } from '@nestjs-mod/common';\nimport { DefaultTestNestApplicationCreate } from '@nestjs-mod/testing';\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n  findAll() {\n    return ['cats'];\n  }\n}\n\nconst fakeCatsService = { findAll: () => ['test'] };\n\nbootstrapNestApplication({\n  modules: {\n    system: [\n      DefaultTestNestApplicationCreate.forRoot({\n        staticConfiguration: {\n          wrapTestingModuleBuilder: (testingModuleBuilder) =>\n            testingModuleBuilder.overrideProvider(CatsService).useValue(fakeCatsService),\n        },\n      }),\n    ],\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h4,{id:"static-configuration",children:"Static configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Constraints"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"wrapTestingModuleBuilder"})}),(0,n.jsx)(t.td,{children:"Method for additional actions with TestingModuleBuilder"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"optional"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"defaultLogger"})}),(0,n.jsx)(t.td,{children:"Default logger for application"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"optional"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#modules",children:"Back to Top"})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h3,{id:"defaulttestnestapplicationinitializer",children:"DefaultTestNestApplicationInitializer"}),"\n",(0,n.jsx)(t.p,{children:"Default test NestJS application initializer."}),"\n",(0,n.jsx)(t.h4,{id:"use-in-nestjs-mod-1",children:"Use in NestJS-mod"}),"\n",(0,n.jsx)(t.p,{children:"Use without options."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { bootstrapNestApplication } from '@nestjs-mod/common';\nimport { DefaultTestNestApplicationCreate, DefaultTestNestApplicationInitializer } from '@nestjs-mod/testing';\n\nbootstrapNestApplication({\n  modules: {\n    system: [DefaultTestNestApplicationCreate.forRoot(), DefaultTestNestApplicationInitializer.forRoot()],\n  },\n});\n"})}),"\n",(0,n.jsx)(t.p,{children:"An example of getting a provider after running a test application."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"import { bootstrapNestApplication } from '@nestjs-mod/common';\nimport { DefaultTestNestApplicationCreate, DefaultTestNestApplicationInitializer } from '@nestjs-mod/testing';\nimport { Injectable } from '@nestjs/common';\n\n@Injectable()\nexport class CatsService {\n  findAll() {\n    return ['cats'];\n  }\n}\n\nbootstrapNestApplication({\n  modules: {\n    system: [\n      DefaultTestNestApplicationCreate.forRoot(),\n      DefaultTestNestApplicationInitializer.forRoot({\n        staticConfiguration: {\n          postInit: async ({ app }) => {\n            if (app) {\n              const catsService = app.get(CatsService);\n              console.log(catsService.findAll());\n            }\n          },\n        },\n      }),\n    ],\n  },\n});\n"})}),"\n",(0,n.jsx)(t.h4,{id:"static-configuration-1",children:"Static configuration"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Key"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Constraints"}),(0,n.jsx)(t.th,{children:"Default"}),(0,n.jsx)(t.th,{children:"Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"preInit"})}),(0,n.jsx)(t.td,{children:"Method for additional actions before init"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"optional"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"postInit"})}),(0,n.jsx)(t.td,{children:"Method for additional actions after init"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"optional"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:(0,n.jsx)(t.code,{children:"defaultLogger"})}),(0,n.jsx)(t.td,{children:"Default logger for test application"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.strong,{children:"optional"})}),(0,n.jsx)(t.td,{children:"-"}),(0,n.jsx)(t.td,{children:"-"})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"#modules",children:"Back to Top"})}),"\n",(0,n.jsx)(t.h2,{id:"links",children:"Links"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod",children:"https://github.com/nestjs-mod/nestjs-mod"})," - A collection of utilities for unifying NestJS applications and modules"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod-contrib",children:"https://github.com/nestjs-mod/nestjs-mod-contrib"})," - Contrib repository for the NestJS-mod"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod-example",children:"https://github.com/nestjs-mod/nestjs-mod-example"})," - Example application built with ",(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod/tree/master/libs/schematics",children:"@nestjs-mod/schematics"})]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod/blob/master/apps/example-basic/INFRASTRUCTURE.MD",children:"https://github.com/nestjs-mod/nestjs-mod/blob/master/apps/example-basic/INFRASTRUCTURE.MD"})," - A simple example of infrastructure documentation."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://github.com/nestjs-mod/nestjs-mod-contrib/blob/master/apps/example-prisma/INFRASTRUCTURE.MD",children:"https://github.com/nestjs-mod/nestjs-mod-contrib/blob/master/apps/example-prisma/INFRASTRUCTURE.MD"})," - An extended example of infrastructure documentation with a docker-compose file and a data base."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://dev.to/endykaufman/collection-of-nestjs-mod-utilities-for-unifying-applications-and-modules-on-nestjs-5256",children:"https://dev.to/endykaufman/collection-of-nestjs-mod-utilities-for-unifying-applications-and-modules-on-nestjs-5256"})," - Article about the project NestJS-mod"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"https://habr.com/ru/articles/788916",children:"https://habr.com/ru/articles/788916"})," - \u041a\u043e\u043b\u043b\u0435\u043a\u0446\u0438\u044f \u0443\u0442\u0438\u043b\u0438\u0442 NestJS-mod \u0434\u043b\u044f \u0443\u043d\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0438 \u043c\u043e\u0434\u0443\u043b\u0435\u0439 \u043d\u0430 NestJS"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"license",children:"License"}),"\n",(0,n.jsx)(t.p,{children:"MIT"})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>l,x:()=>r});var n=s(6540);const i={},o=n.createContext(i);function l(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);