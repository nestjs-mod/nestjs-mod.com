"use strict";(self.webpackChunknestjs_mod_com=self.webpackChunknestjs_mod_com||[]).push([[4043],{9801:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=t(4848),a=t(8453);const r={},i="Creating an empty project using NestJS-mod",o={id:"en-posts/fullstack/2024-08-08",title:"Creating an empty project using NestJS-mod",description:"After many years of writing various projects on NestJS and Angular, I decided to rewrite a group of projects from the repository https://github.com/rucken and to use the current coding style, it has not changed much, it just became less of the same type of code.",source:"@site/docs/en-posts/fullstack/2024-08-08.md",sourceDirName:"en-posts/fullstack",slug:"/en-posts/fullstack/2024-08-08",permalink:"/docs/en-posts/fullstack/2024-08-08",draft:!1,unlisted:!1,editUrl:"https://github.com/nestjs-mod/nestjs-mod.com/blob/master/docs/en-posts/fullstack/2024-08-08.md",tags:[],version:"current",frontMatter:{},sidebar:"enPostsSidebar",previous:{title:"Fullstack",permalink:"/docs/category/fullstack"},next:{title:"Creating an empty Angular project and linking it to an existing server on NestJS",permalink:"/docs/en-posts/fullstack/2024-08-09"}},c={},d=[{value:"1. Create an empty NestJS-mod project and specify our organization as the name",id:"1-create-an-empty-nestjs-mod-project-and-specify-our-organization-as-the-name",level:3},{value:"2. Installed the necessary libraries and created an empty NestJS-mod application",id:"2-installed-the-necessary-libraries-and-created-an-empty-nestjs-mod-application",level:3},{value:"3. We create documentation for the project and simultaneously create additional code and scripts to run the project",id:"3-we-create-documentation-for-the-project-and-simultaneously-create-additional-code-and-scripts-to-run-the-project",level:3},{value:"4. Launching the project in watch mode via pm2",id:"4-launching-the-project-in-watch-mode-via-pm2",level:3},{value:"5. Running unit tests",id:"5-running-unit-tests",level:3},{value:"6. Running e2e tests",id:"6-running-e2e-tests",level:3},{value:"7. Stopping the pm2 project",id:"7-stopping-the-pm2-project",level:3},{value:"Links",id:"links",level:3}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"creating-an-empty-project-using-nestjs-mod",children:"Creating an empty project using NestJS-mod"}),"\n",(0,s.jsxs)(n.p,{children:["After many years of writing various projects on NestJS and Angular, I decided to rewrite a group of projects from the repository ",(0,s.jsx)(n.a,{href:"https://github.com/rucken",children:"https://github.com/rucken"})," and to use the current coding style, it has not changed much, it just became less of the same type of code."]}),"\n",(0,s.jsxs)(n.p,{children:["I will develop the main fullstack-bolerplate for frontend and backend without business functionality in a separate organization NestJS-mod (",(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod",children:"https://github.com/nestjs-mod"})," )."]}),"\n",(0,s.jsxs)(n.p,{children:["After the completion of the bolerplate, further development will continue in the Rucken organization (",(0,s.jsx)(n.a,{href:"https://github.com/rucken",children:"https://github.com/rucken"})," )."]}),"\n",(0,s.jsxs)(n.p,{children:["I will document and describe all the steps in the style I did for the KaufmanBot project (",(0,s.jsx)(n.a,{href:"https://dev.to/endykaufman/series/16805",children:"https://dev.to/endykaufman/series/16805"})," )"]}),"\n",(0,s.jsx)(n.h3,{id:"1-create-an-empty-nestjs-mod-project-and-specify-our-organization-as-the-name",children:"1. Create an empty NestJS-mod project and specify our organization as the name"}),"\n",(0,s.jsx)(n.p,{children:"We are creating an empty monorepository with nx-workspace, then we will create applications and libraries in it that will already have the necessary names."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Create empty nx project\nnpx --yes create-nx-workspace@19.5.3 --name=nestjs-mod-fullstack --preset=apps --interactive=false --ci=skip\n\n# Go to created project\ncd nestjs-mod-fullstack\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$ npx --yes create-nx-workspace@19.5.3 --name=nestjs-mod-fullstack --preset=apps --interactive=false --ci=skip\nNX   Let\'s create a new workspace [https://nx.dev/getting-started/intro]\n\n\n NX   Creating your v19.5.3 workspace.\n\n\u2714 Installing dependencies with npm\n\u2714 Successfully created the workspace: nestjs-mod-fullstack.\n\n NX   Directory is already under version control. Skipping initialization of git.\n\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n\n NX   Nx CLI is not installed globally.\n\nThis means that you will have to use "npx nx" to execute commands in the workspace.\nRun "npm i -g nx" to be able to execute command directly.\n\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n\n NX   First time using Nx? Check out this interactive Nx tutorial.\n\nhttps://nx.dev/getting-started/tutorials/npm-workspaces-tutorial\n'})}),"\n",(0,s.jsx)(n.h3,{id:"2-installed-the-necessary-libraries-and-created-an-empty-nestjs-mod-application",children:"2. Installed the necessary libraries and created an empty NestJS-mod application"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Install all need main dev-dependencies\nnpm install --save-dev @nestjs-mod/schematics@latest\n\n# Create NestJS-mod application\n./node_modules/.bin/nx g @nestjs-mod/schematics:application --directory=apps/server --name=server --projectNameAndRootFormat=as-provided --strict=true\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm install --save-dev @nestjs-mod/schematics@latest\nnpm WARN deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.\nnpm WARN deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported\n\nadded 199 packages, and audited 560 packages in 12s\n\n64 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n\n$ ./node_modules/.bin/nx g @nestjs-mod/schematics:application --directory=apps/server --name=server --projectNameAndRootFormat=as-provided --strict=true\n\n NX  Generating @nestjs-mod/schematics:application\n\nFetching prettier...\nFetching @nx/webpack...\nUPDATE package.json\nCREATE rucken.json\nCREATE .nxignore\nUPDATE README.md\nCREATE tsconfig.base.json\nCREATE .prettierrc\nCREATE .prettierignore\nUPDATE .vscode/extensions.json\nCREATE apps/server/src/assets/.gitkeep\nCREATE apps/server/src/main.ts\nCREATE apps/server/tsconfig.app.json\nCREATE apps/server/tsconfig.json\nCREATE apps/server/webpack.config.js\nUPDATE nx.json\nCREATE apps/server/project.json\nCREATE .eslintrc.json\nCREATE .eslintignore\nCREATE apps/server/.eslintrc.json\nCREATE jest.preset.js\nCREATE jest.config.ts\nCREATE apps/server/jest.config.ts\nCREATE apps/server/tsconfig.spec.json\nCREATE apps/server-e2e/project.json\nCREATE apps/server-e2e/jest.config.ts\nCREATE apps/server-e2e/src/server/server.spec.ts\nCREATE apps/server-e2e/src/support/global-setup.ts\nCREATE apps/server-e2e/src/support/global-teardown.ts\nCREATE apps/server-e2e/src/support/test-setup.ts\nCREATE apps/server-e2e/tsconfig.json\nCREATE apps/server-e2e/tsconfig.spec.json\nCREATE apps/server-e2e/.eslintrc.json\nCREATE apps/server/src/app/app.controller.spec.ts\nCREATE apps/server/src/app/app.controller.ts\nCREATE apps/server/src/app/app.module.ts\nCREATE apps/server/src/app/app.service.spec.ts\nCREATE apps/server/src/app/app.service.ts\nCREATE .env\nCREATE apps/server/package.json\nnpm WARN deprecated @humanwhocodes/config-array@0.11.14: Use @eslint/config-array instead\nnpm WARN deprecated rimraf@3.0.2: Rimraf versions prior to v4 are no longer supported\nnpm WARN deprecated @ngneat/transloco-utils@3.0.4: NOTICE: Transloco has moved to a new scope, this package will no longer receive updates. please use @jsverse/transloco-utils instead.\nnpm WARN deprecated @humanwhocodes/object-schema@2.0.3: Use @eslint/object-schema instead\nnpm WARN deprecated glob@7.1.7: Glob versions prior to v9 are no longer supported\nnpm WARN deprecated @ngneat/transloco-scoped-libs@3.0.4: NOTICE: Transloco has moved to a new scope, this package will no longer receive updates. please use @jsverse/transloco-scoped-libs instead.\nnpm WARN deprecated q@1.5.1: You or someone you depend on is using Q, the JavaScript Promise library that gave JavaScript developers strong feelings about promises. They can almost certainly migrate to the native JavaScript promise now. Thank you literally everyone for joining me in this bet against the odds. Be excellent to each other.\nnpm WARN deprecated\nnpm WARN deprecated (For a CapTP with native promises, see @endo/eventual-send and @endo/captp)\nnpm WARN deprecated @ngneat/transloco-keys-manager@3.4.2: NOTICE: Transloco has moved to a new scope, this package will no longer receive updates. please use @jsverse/transloco-keys-manager instead.\n\nadded 1152 packages, removed 9 packages, changed 14 packages, and audited 1913 packages in 25s\n\n241 packages are looking for funding\n  run `npm fund` for details\n\n11 vulnerabilities (1 moderate, 10 high)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"3-we-create-documentation-for-the-project-and-simultaneously-create-additional-code-and-scripts-to-run-the-project",children:"3. We create documentation for the project and simultaneously create additional code and scripts to run the project"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Build all applications and library\nnpm run build\n\n# Generate markdown report\nnpm ru docs:infrastructure\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'$  npm run build\n\n> @nestjs-mod-fullstack/source@0.0.0 build\n> npm run generate && npm run tsc:lint && ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=build --skip-nx-cache=true\n\n\n> @nestjs-mod-fullstack/source@0.0.0 generate\n> ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=generate --skip-nx-cache=true && npm run make-ts-list && npm run lint:fix\n\n NX   Successfully ran target generate for 0 projects (23ms)\n\n\n> @nestjs-mod-fullstack/source@0.0.0 make-ts-list\n> ./node_modules/.bin/rucken make-ts-list\n\n\n> @nestjs-mod-fullstack/source@0.0.0 lint:fix\n> npm run tsc:lint && ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=lint --fix\n\n\n> @nestjs-mod-fullstack/source@0.0.0 tsc:lint\n> ./node_modules/.bin/tsc --noEmit -p tsconfig.base.json\n\n\n   \u2714  nx run server-e2e:lint (1s)\n   \u2714  nx run server:lint (1s)\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Successfully ran target lint for 2 projects (1s)\n\n      With additional flags:\n        --fix=true\n\n\n> @nestjs-mod-fullstack/source@0.0.0 tsc:lint\n> ./node_modules/.bin/tsc --noEmit -p tsconfig.base.json\n\n\n   \u2714  nx run server:build:production (3s)\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Successfully ran target build for project server (3s)\n\n$ npm run docs:infrastructure\n\n> @nestjs-mod-fullstack/source@0.0.0 docs:infrastructure\n> export NESTJS_MODE=infrastructure && ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=start --parallel=1\n\n\n NX   Running target start for project server:\n\n- server\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n> nx run server:start\n\n> node dist/apps/server/main.js\n\n[00:14:38.808] INFO (390376): Starting Nest application...\n    context: "NestFactory"\n[00:14:38.808] INFO (390376): DefaultNestApp dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): ProjectUtilsSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): DefaultNestApplicationInitializerSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): DefaultNestApplicationInitializerShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): NestjsPinoLoggerModuleSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): NestjsPinoLoggerModuleShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): TerminusHealthCheckModuleSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): DefaultNestApplicationListenerSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): DefaultNestApplicationListenerShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): AppModuleSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): AppModuleShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): InfrastructureMarkdownReportGeneratorSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): Pm2Settings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): Pm2Shared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): ProjectUtils dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): InfrastructureMarkdownReportGeneratorSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): ProjectUtils dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): InfrastructureMarkdownReportStorage dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.808] INFO (390376): InfrastructureMarkdownReportStorageSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): DefaultNestApplicationListenerSettings dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): DefaultNestApplicationListenerShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): InfrastructureMarkdownReportStorageShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): AppModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): ProjectUtils dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): DefaultNestApplicationInitializer dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): DefaultNestApplicationListener dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): InfrastructureMarkdownReportGenerator dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): DefaultNestApplicationListener dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): NestjsPinoLoggerModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): TerminusModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): TerminusModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): ProjectUtilsShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): InfrastructureMarkdownReportGeneratorShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): Pm2 dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): InfrastructureMarkdownReportGeneratorShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): InfrastructureMarkdownReportGenerator dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): LoggerModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): TerminusHealthCheckModuleShared dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.809] INFO (390376): TerminusHealthCheckModule dependencies initialized\n    context: "InstanceLoader"\n[00:14:38.815] INFO (390376): TerminusHealthCheckController {/health}:\n    context: "RoutesResolver"\n[00:14:38.817] INFO (390376): Mapped {/health, GET} route\n    context: "RouterExplorer"\n[00:14:38.817] INFO (390376): AppController {/}:\n    context: "RoutesResolver"\n[00:14:38.817] INFO (390376): Mapped {/, GET} route\n    context: "RouterExplorer"\n[00:14:38.823] DEBUG (390376):\n    0: "SERVER_PORT: Description=\'The port on which to run the server.\', Default=\'3000\', Original Name=\'port\'"\n    1: "SERVER_HOSTNAME: Description=\'Hostname on which to listen for incoming packets.\', Original Name=\'hostname\'"\n    context: "All application environments"\n[00:14:38.828] INFO (390376): Nest application successfully started\n    context: "NestApplication"\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Successfully ran target start for project server\n'})}),"\n",(0,s.jsx)(n.h3,{id:"4-launching-the-project-in-watch-mode-via-pm2",children:"4. Launching the project in watch mode via pm2"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nm run pm2:start\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm run pm2:start\n\n> @nestjs-mod-fullstack/source@0.0.0 pm2:start\n> ./node_modules/.bin/pm2 start ./ecosystem.config.json\n\n\n>>>> In-memory PM2 is out-of-date, do:\n>>>> $ pm2 update\nIn memory PM2 version: 3.1.3\nLocal PM2 version: 5.4.2\n\n[PM2][WARN] Applications server not running, starting...\n[PM2] App [server] launched (1 instances)\n\u250c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id \u2502 name      \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21ba    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502\n\u251c\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 0  \u2502 server    \u2502 default     \u2502 N/A     \u2502 fork    \u2502 390932   \u2502 0s     \u2502 0    \u2502 online    \u2502 0%       \u2502 45.3mb   \u2502 endy     \u2502 disabled \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.h3,{id:"5-running-unit-tests",children:"5. Running unit tests"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run test\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npm run test\n\n> @nestjs-mod-fullstack/source@0.0.0 test\n> ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=test --skip-nx-cache=true --passWithNoTests --output-style=stream-without-prefixes\n\n\n\n> nx run server:test --passWithNoTests\n\n NX   Running target test for project server\n\n      With additional flags:\n        --passWithNoTests=true\n\n   \u2192  Executing 1/1 remaining tasks...\n\n   \u2714  nx run server:test (2s)\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Successfully ran target test for project server (2s)\n\n      With additional flags:\n        --passWithNoTests=true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"6-running-e2e-tests",children:"6. Running e2e tests"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"./node_modules/.bin/nx runmany --exclude=@nestjs-mod-fullstack/source --all -t=e2e --skip-nx-cache=true --passWithNoTests --output-style=stream-without-prefixes\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=e2e --skip-nx-cache=true --passWithNoTests --output-style=stream-without-prefixes\n\n\n> nx run server:build:production\n\n NX   Running target e2e for project server-e2e and 1 task it depends on\n\n   \u2714  nx run server:build:production (3s)\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n\n\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Running target e2e for project server-e2e and 1 task it depends on\n\n      With additional flags:\n        --passWithNoTests=true\n\n   \u2714  nx run server-e2e:e2e (2s)\n\n\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\u2014\n\n NX   Successfully ran target e2e for project server-e2e and 1 task it depends on (4s)\n\n      With additional flags:\n        --passWithNoTests=true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"7-stopping-the-pm2-project",children:"7. Stopping the pm2 project"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nm run pm2:stop\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Console output"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$  npm run pm2:stop\n\n> @nestjs-mod-fullstack/source@0.0.0 pm2:stop\n> ./node_modules/.bin/pm2 delete all\n\n\n>>>> In-memory PM2 is out-of-date, do:\n>>>> $ pm2 update\nIn memory PM2 version: 3.1.3\nLocal PM2 version: 5.4.2\n\n[PM2] Applying action deleteProcessId on app [all](ids: [ 0 ])\n[PM2] [server](0) \u2713\n\u250c\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 id \u2502 name      \u2502 namespace   \u2502 version \u2502 mode    \u2502 pid      \u2502 uptime \u2502 \u21ba    \u2502 status    \u2502 cpu      \u2502 mem      \u2502 user     \u2502 watching \u2502\n\u2514\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n"})}),"\n",(0,s.jsx)(n.p,{children:"In the next post, I will add an empty frontend application to Angular and call backend application methods from it..."}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nestjs.com",children:"https://nestjs.com"})," -the official website of the framework"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nestjs-mod.com",children:"https://nestjs-mod.com"})," -the official website of additional utilities"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod/nestjs-mod-fullstack",children:"https://github.com/nestjs-mod/nestjs-mod-fullstack"})," - the project from the post"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod/nestjs-mod-fullstack/commit/5fab437a5d4a9122aee021f3a49756419dc8dee2",children:"https://github.com/nestjs-mod/nestjs-mod-fullstack/commit/5fab437a5d4a9122aee021f3a49756419dc8dee2"})," - commit to current changes"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"#nestjs #typescript #node #nestjsmod #fullstack\n#2024-08-08"})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(6540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);