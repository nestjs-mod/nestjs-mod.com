"use strict";(self.webpackChunknestjs_mod_com=self.webpackChunknestjs_mod_com||[]).push([[5586],{4956:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={},a="Adding lint-staged to NestJS and Angular applications",r={id:"en-posts/fullstack/2024-09-17",title:"Adding lint-staged to NestJS and Angular applications",description:"Since versioning via the nx-semantic-release plugin takes place by analyzing changes to related Typescript imports, we need to minimize these changes, to do this, we connect to the project lint-staged and we add strictness to the Typescript code.",source:"@site/docs/en-posts/fullstack/2024-09-17.md",sourceDirName:"en-posts/fullstack",slug:"/en-posts/fullstack/2024-09-17",permalink:"/docs/en-posts/fullstack/2024-09-17",draft:!1,unlisted:!1,editUrl:"https://github.com/nestjs-mod/nestjs-mod.com/blob/master/docs/en-posts/fullstack/2024-09-17.md",tags:[],version:"current",frontMatter:{},sidebar:"enPostsSidebar",previous:{title:"Semantic versioning of NestJS and Angular applications in the NX monorepository",permalink:"/docs/en-posts/fullstack/2024-09-16"},next:{title:"Creating a configurable Webhook module for a NestJS application",permalink:"/docs/en-posts/fullstack/2024-10-06"}},c={},l=[{value:"1. Adding lint-staged to format the code when committing",id:"1-adding-lint-staged-to-format-the-code-when-committing",level:3},{value:"2. We are updating the prepare script and the lint-staged section in the root package.json",id:"2-we-are-updating-the-prepare-script-and-the-lint-staged-section-in-the-root-packagejson",level:3},{value:"3. Starting the lint-staged formatting manually",id:"3-starting-the-lint-staged-formatting-manually",level:3},{value:"4. Updating the package.json and NX configuration in backend applications",id:"4-updating-the-packagejson-and-nx-configuration-in-backend-applications",level:3},{value:"5. Creating a package.json in the frontend application and add the semantic-release command to its NX configuration",id:"5-creating-a-packagejson-in-the-frontend-application-and-add-the-semantic-release-command-to-its-nx-configuration",level:3},{value:"6. Adding a new dynamic environment variable",id:"6-adding-a-new-dynamic-environment-variable",level:3},{value:"7. Updating the file deployment",id:"7-updating-the-file-deployment",level:3},{value:"8. Updating the CI/CD deployment configuration for Kubernetes and Docker Compose",id:"8-updating-the-cicd-deployment-configuration-for-kubernetes-and-docker-compose",level:3},{value:"9. Updating the local Docker image collector",id:"9-updating-the-local-docker-image-collector",level:3},{value:"10. Updating the configuration for the local launch of the &quot;Docker Compose&quot; mode",id:"10-updating-the-configuration-for-the-local-launch-of-the-docker-compose-mode",level:3},{value:"11. We launch the local &quot;Docker Compose&quot; mode and wait for the successful completion of the tests",id:"11-we-launch-the-local-docker-compose-mode-and-wait-for-the-successful-completion-of-the-tests",level:3},{value:"12. Replacing the check for the release marker in the commit comment with a check for the skip release marker",id:"12-replacing-the-check-for-the-release-marker-in-the-commit-comment-with-a-check-for-the-skip-release-marker",level:3},{value:"13. Adding strictness to the code",id:"13-adding-strictness-to-the-code",level:3},{value:"14. Commit the code and wait for the successful creation of releases and passing tests",id:"14-commit-the-code-and-wait-for-the-successful-creation-of-releases-and-passing-tests",level:3},{value:"Conclusion",id:"conclusion",level:3},{value:"Plans",id:"plans",level:3},{value:"Links",id:"links",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"adding-lint-staged-to-nestjs-and-angular-applications",children:"Adding lint-staged to NestJS and Angular applications"}),"\n",(0,s.jsxs)(n.p,{children:["Since versioning via the ",(0,s.jsx)(n.code,{children:"nx-semantic-release"})," plugin takes place by analyzing changes to related ",(0,s.jsx)(n.code,{children:"Typescript"})," imports, we need to minimize these changes, to do this, we connect to the project ",(0,s.jsx)(n.code,{children:"lint-staged"})," and we add strictness to the ",(0,s.jsx)(n.code,{children:"Typescript"})," code."]}),"\n",(0,s.jsx)(n.h3,{id:"1-adding-lint-staged-to-format-the-code-when-committing",children:"1. Adding lint-staged to format the code when committing"}),"\n",(0,s.jsxs)(n.p,{children:["This utility runs certain scripts with each commit, so that the formatting of the code in the ",(0,s.jsx)(n.code,{children:"git"})," repository is always the same, no matter how the developer has configured his local development environment."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npx mrm@2 lint-staged\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Consule outputs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ npx mrm@2 lint-staged\nRunning lint-staged...\nUpdate package.json\nInstalling husky...\n\nadded 1 package, removed 1 package, and audited 2765 packages in 18s\n\n331 packages are looking for funding\n  run `npm fund` for details\n\n49 vulnerabilities (31 moderate, 18 high)\n\nTo address issues that do not require attention, run:\n  npm audit fix\n\nTo address all issues possible (including breaking changes), run:\n  npm audit fix --force\n\nSome issues need review, and may require choosing\na different dependency.\n\nRun `npm audit` for details.\nhusky - Git hooks installed\nhusky - created .husky/pre-commit\n"})}),"\n",(0,s.jsx)(n.h3,{id:"2-we-are-updating-the-prepare-script-and-the-lint-staged-section-in-the-root-packagejson",children:"2. We are updating the prepare script and the lint-staged section in the root package.json"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"prepare"})," script is automatically created after installing ",(0,s.jsx)(n.code,{children:"lint-staged"}),", I did not remove it, I just changed the launch method a little, I run it through ",(0,s.jsx)(n.code,{children:"npx"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In small projects, the ",(0,s.jsx)(n.code,{children:"pre-commit"})," hook with ",(0,s.jsx)(n.code,{children:"lint-staged"})," works quickly, but if the project is large, then it can work longer, in which case it is easier for all developers to agree on a common formatting style in order to reduce the number of files that linters will need to check."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.code,{children:"pre-commit"})," hook, it is not necessary to prescribe various heavy operations, for example: generation of the frontend client, such operations are better performed in ",(0,s.jsx)(n.code,{children:"CI/CD"})," or locally by hand as needed, and not for each commit."]}),"\n",(0,s.jsxs)(n.p,{children:["Updating part of the ",(0,s.jsx)(n.code,{children:"package.json"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "scripts": {\n    // ...\n    "prepare": "npx -y husky install"\n    // ...\n  },\n  // ...\n  "lint-staged": {\n    "*.{js,ts}": "eslint --fix",\n    "*.{js,ts,css,scss,md}": "prettier --ignore-unknown --write",\n    "*.js": "eslint --cache --fix"\n  }\n  // ...\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"3-starting-the-lint-staged-formatting-manually",children:"3. Starting the lint-staged formatting manually"}),"\n",(0,s.jsxs)(n.p,{children:["In order to manually check the operation of ",(0,s.jsx)(n.code,{children:"lint-staged"}),", you need to add all the files to ",(0,s.jsx)(n.code,{children:"stage"})," and run it through ",(0,s.jsx)(n.code,{children:"npx"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git add .\nnpx lint-staged\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Consule outputs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" npx lint-staged\n\u2714 Preparing lint-staged...\n\u2714 Running tasks for staged files...\n\u2714 Applying modifications from tasks...\n\u2714 Cleaning up temporary files...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"4-updating-the-packagejson-and-nx-configuration-in-backend-applications",children:"4. Updating the package.json and NX configuration in backend applications"}),"\n",(0,s.jsxs)(n.p,{children:["Since in the previous post we disabled publishing in ",(0,s.jsx)(n.code,{children:"npm"}),", we did not change the version of the application in the source code, in order for the version in the source code to change and this publication in ",(0,s.jsx)(n.code,{children:"npm"})," did not start, you need to add the option ",(0,s.jsx)(n.code,{children:'"private": true'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Updating the ",(0,s.jsx)(n.code,{children:"apps/server/package.json"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "server",\n  "version": "0.0.3",\n  "private": true,\n  "scripts": {},\n  "dependencies": {\n    "pm2": _=5.3.0",\n    "dotenv": _=16.3.1"\n  },\n  "devScripts": ["manual:prepare", "serve:dev:server"],\n  "prodScripts": ["manual:prepare", "start:prod:server"],\n  "testsScripts": ["test:server"]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Updating part of the ",(0,s.jsx)(n.code,{children:"apps/server/package.json"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "server",\n  // ...\n  "targets": {\n    // ...\n    "semantic-release": {\n      "executor": "@theunderscorer/nx-semantic-release:semantic-release",\n      "options": {\n        "github": true,\n        "changelog": true,\n        "npm": true,\n        "tagFormat": "server-v${VERSION}"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"5-creating-a-packagejson-in-the-frontend-application-and-add-the-semantic-release-command-to-its-nx-configuration",children:"5. Creating a package.json in the frontend application and add the semantic-release command to its NX configuration"}),"\n",(0,s.jsxs)(n.p,{children:["Earlier in the posts, we launched the ",(0,s.jsx)(n.code,{children:"Nginx"})," upgrade when the backend version of the application was changed."]}),"\n",(0,s.jsxs)(n.p,{children:["In order for the ",(0,s.jsx)(n.code,{children:"Nginx"})," image with an embedded frontend to be assembled only when the frontend changes, we need to versionize the frontend and use its version in further logics with ",(0,s.jsx)(n.code,{children:"Docker"})," images and ",(0,s.jsx)(n.code,{children:"Kubernetes"})," templates."]}),"\n",(0,s.jsxs)(n.p,{children:["Semantic versioning requires a ",(0,s.jsx)(n.code,{children:"package.json"})," to work the library or application, so we add it to the frontend application and specify ",(0,s.jsx)(n.code,{children:'"private": true'}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Creating the ",(0,s.jsx)(n.code,{children:"apps/client/package.json"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "client",\n  "version": "0.0.1",\n  "private": true\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Adding a new target to the ",(0,s.jsx)(n.code,{children:"apps/client/project.json"})," file"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "name": "client",\n  // ...\n  "targets": {\n    // ...\n    "semantic-release": {\n      "executor": "@theunderscorer/nx-semantic-release:semantic-release",\n      "options": {\n        "github": true,\n        "changelog": true,\n        "npm": true,\n        "tagFormat": "client-v${VERSION}"\n      }\n    }\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"6-adding-a-new-dynamic-environment-variable",children:"6. Adding a new dynamic environment variable"}),"\n",(0,s.jsxs)(n.p,{children:["Adding a new variable with the version of the frontend application to the file ",(0,s.jsx)(n.code,{children:".kubernetes/set-env.sh"})," and ",(0,s.jsx)(n.code,{children:".docker/set-env.sh"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export CLIENT_VERSION=$(cd ./apps/client && npm pkg get version --workspaces=false | tr -d \\")\n'})}),"\n",(0,s.jsx)(n.h3,{id:"7-updating-the-file-deployment",children:"7. Updating the file deployment"}),"\n",(0,s.jsxs)(n.p,{children:["Updating the file ",(0,s.jsx)(n.code,{children:".kubernetes/templates/client/3.deployment.yaml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  namespace: '%NAMESPACE%'\n  name: %NAMESPACE%-client\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      pod: %NAMESPACE%-client-container\n  template:\n    metadata:\n      namespace: '%NAMESPACE%'\n      labels:\n        app: %NAMESPACE%-client\n        pod: %NAMESPACE%-client-container\n    spec:\n      containers:\n        - name: %NAMESPACE%-client\n          image: ghcr.io/nestjs-mod/nestjs-mod-fullstack-nginx:%CLIENT_VERSION%\n          imagePullPolicy: IfNotPresent\n          ports:\n            - containerPort: %NGINX_PORT%\n          envFrom:\n            - configMapRef:\n                name: %NAMESPACE%-config\n            - configMapRef:\n                name: %NAMESPACE%-client-config\n          resources:\n            requests:\n              memory: 128Mi\n              cpu: 100m\n            limits:\n              memory: 512Mi\n              cpu: 300m\n      imagePullSecrets:\n        - name: docker-regcred\n"})}),"\n",(0,s.jsx)(n.h3,{id:"8-updating-the-cicd-deployment-configuration-for-kubernetes-and-docker-compose",children:"8. Updating the CI/CD deployment configuration for Kubernetes and Docker Compose"}),"\n",(0,s.jsxs)(n.p,{children:["Updating part of the file ",(0,s.jsx)(n.code,{children:".github/workflows/kubernetes.yml"})," and ",(0,s.jsx)(n.code,{children:".github/workflows/docker-compose.workflows.yml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"jobs:\n  # ...\n  check-nginx-image:\n    runs-on: ubuntu-latest\n    needs: [release]\n    continue-on-error: true\n    steps:\n      - name: Checkout repository\n        if: ${{ !contains(github.event.head_commit.message, '[skip cache]') && !contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        uses: actions/checkout@v4\n      - name: Set ENV vars\n        if: ${{ !contains(github.event.head_commit.message, '[skip cache]') && !contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        id: version\n        run: |\n          echo \"client_version=\"$(cd ./apps/client && npm pkg get version --workspaces=false | tr -d \\\") >> \"$GITHUB_OUTPUT\"\n      - name: Check exists docker image\n        if: ${{ !contains(github.event.head_commit.message, '[skip cache]') && !contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        id: check-exists\n        run: |\n          export TOKEN=$(curl -u ${{ github.actor }}:${{ secrets.GITHUB_TOKEN }} https://${{ env.REGISTRY }}/token\\?scope\\=\"repository:${{ env.NGINX_IMAGE_NAME}}:pull\" | jq -r .token)\n          curl --head --fail -H \"Authorization: Bearer $TOKEN\" https://${{ env.REGISTRY }}/v2/${{ env.NGINX_IMAGE_NAME}}/manifests/${{ steps.version.outputs.client_version }}\n      - name: Store result of check exists docker image\n        id: store-check-exists\n        if: ${{ !contains(github.event.head_commit.message, '[skip cache]') && !contains(github.event.head_commit.message, '[skip nginx cache]') && !contains(needs.check-exists.outputs.result, 'HTTP/2 404') }}\n        run: |\n          echo \"conclusion=success\" >> \"$GITHUB_OUTPUT\"\n    outputs:\n      result: ${{ steps.store-check-exists.outputs.conclusion }}\n  # ...\n  build-and-push-nginx-image:\n    runs-on: ubuntu-latest\n    needs: [build-and-push-builder-image, check-nginx-image]\n    permissions:\n      contents: read\n      packages: write\n      attestations: write\n      id-token: write\n    steps:\n      - name: Checkout repository\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        uses: actions/checkout@v4\n      - name: Set ENV vars\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        id: version\n        run: |\n          echo \"root_version=\"$(npm pkg get version --workspaces=false | tr -d \\\") >> \"$GITHUB_OUTPUT\"\n          echo \"client_version=\"$(cd ./apps/client && npm pkg get version --workspaces=false | tr -d \\\") >> \"$GITHUB_OUTPUT\"\n      - name: Log in to the Container registry\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        uses: docker/login-action@65b78e6e13532edd9afa3aa52ac7964289d1a9c1\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}\n      - name: Generate and build production code\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        run: |\n          mkdir -p dist\n          docker run -v ./dist:/usr/src/app/dist -v ./apps:/usr/src/app/apps -v ./libs:/usr/src/app/libs ${{ env.REGISTRY}}/${{ env.BUILDER_IMAGE_NAME}}:${{ steps.version.outputs.root_version }}\n      - name: Build and push Docker image\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        id: push\n        uses: docker/build-push-action@f2a1d5e99d037542a71f64918e516c093c6f3fc4\n        with:\n          context: .\n          push: true\n          file: ./.docker/nginx.Dockerfile\n          tags: ${{ env.REGISTRY}}/${{ env.NGINX_IMAGE_NAME}}:${{ steps.version.outputs.client_version }},${{ env.REGISTRY}}/${{ env.NGINX_IMAGE_NAME}}:latest\n          cache-from: type=registry,ref=${{ env.REGISTRY}}/${{ env.NGINX_IMAGE_NAME}}:${{ steps.version.outputs.client_version }}\n          cache-to: type=inline\n      - name: Generate artifact attestation\n        continue-on-error: true\n        if: ${{ needs.check-nginx-image.outputs.result != 'success' || contains(github.event.head_commit.message, '[skip cache]') || contains(github.event.head_commit.message, '[skip nginx cache]') }}\n        uses: actions/attest-build-provenance@v1\n        with:\n          subject-name: ${{ env.REGISTRY }}/${{ env.NGINX_IMAGE_NAME}}\n          subject-digest: ${{ steps.push.outputs.digest }}\n          push-to-registry: true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"9-updating-the-local-docker-image-collector",children:"9. Updating the local Docker image collector"}),"\n",(0,s.jsxs)(n.p,{children:["Updating the file ",(0,s.jsx)(n.code,{children:".docker/build-images.sh "})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'#!/bin/bash\nset -e\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${BUILDER_IMAGE_NAME}:${ROOT_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${BUILDER_IMAGE_NAME}:${ROOT_VERSION}" -t "${REGISTRY}/${BUILDER_IMAGE_NAME}:latest" -f ./.docker/builder.Dockerfile . --progress=plain\n\n# We build all applications\ndocker run --network host -v ./dist:/usr/src/app/dist -v ./apps:/usr/src/app/apps -v ./libs:/usr/src/app/libs ${REGISTRY}/${BUILDER_IMAGE_NAME}:${ROOT_VERSION}\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${BASE_SERVER_IMAGE_NAME}:${ROOT_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${BASE_SERVER_IMAGE_NAME}:${ROOT_VERSION}" -t "${REGISTRY}/${BASE_SERVER_IMAGE_NAME}:latest" -f ./.docker/base-server.Dockerfile . --progress=plain\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${SERVER_IMAGE_NAME}:${SERVER_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${SERVER_IMAGE_NAME}:${SERVER_VERSION}" -t "${REGISTRY}/${SERVER_IMAGE_NAME}:latest" -f ./.docker/server.Dockerfile . --progress=plain --build-arg=\\"BASE_SERVER_IMAGE_TAG=${ROOT_VERSION}\\"\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${MIGRATIONS_IMAGE_NAME}:${ROOT_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${MIGRATIONS_IMAGE_NAME}:${ROOT_VERSION}" -t "${REGISTRY}/${MIGRATIONS_IMAGE_NAME}:latest" -f ./.docker/migrations.Dockerfile . --progress=plain\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${NGINX_IMAGE_NAME}:${CLIENT_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${NGINX_IMAGE_NAME}:${CLIENT_VERSION}" -t "${REGISTRY}/${NGINX_IMAGE_NAME}:latest" -f ./.docker/nginx.Dockerfile . --progress=plain\n\n# We check the existence of a local image with the specified tag, if it does not exist, we start building the image\nexport IMG=${REGISTRY}/${E2E_TESTS_IMAGE_NAME}:${ROOT_VERSION} && [ -n "$(docker images -q $IMG)" ] || docker build --network host -t "${REGISTRY}/${E2E_TESTS_IMAGE_NAME}:${ROOT_VERSION}" -t "${REGISTRY}/${E2E_TESTS_IMAGE_NAME}:latest" -f ./.docker/e2e-tests.Dockerfile . --progress=plain\n\n'})}),"\n",(0,s.jsx)(n.h3,{id:"10-updating-the-configuration-for-the-local-launch-of-the-docker-compose-mode",children:'10. Updating the configuration for the local launch of the "Docker Compose" mode'}),"\n",(0,s.jsxs)(n.p,{children:["Updating the file ",(0,s.jsx)(n.code,{children:".docker/docker-compose-full.yml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"version: '3'\nnetworks:\n  nestjs-mod-fullstack-network:\n    driver: 'bridge'\nservices:\n  nestjs-mod-fullstack-postgre-sql:\n    image: 'bitnami/postgresql:15.5.0'\n    container_name: 'nestjs-mod-fullstack-postgre-sql'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    healthcheck:\n      test:\n        - 'CMD-SHELL'\n        - 'pg_isready -U postgres'\n      interval: '5s'\n      timeout: '5s'\n      retries: 5\n    tty: true\n    restart: 'always'\n    environment:\n      POSTGRESQL_USERNAME: '${SERVER_POSTGRE_SQL_POSTGRESQL_USERNAME}'\n      POSTGRESQL_PASSWORD: '${SERVER_POSTGRE_SQL_POSTGRESQL_PASSWORD}'\n      POSTGRESQL_DATABASE: '${SERVER_POSTGRE_SQL_POSTGRESQL_DATABASE}'\n    volumes:\n      - 'nestjs-mod-fullstack-postgre-sql-volume:/bitnami/postgresql'\n  nestjs-mod-fullstack-postgre-sql-migrations:\n    image: 'ghcr.io/nestjs-mod/nestjs-mod-fullstack-migrations:${ROOT_VERSION}'\n    container_name: 'nestjs-mod-fullstack-postgre-sql-migrations'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    tty: true\n    environment:\n      NX_SKIP_NX_CACHE: 'true'\n      SERVER_ROOT_DATABASE_URL: '${SERVER_ROOT_DATABASE_URL}'\n      SERVER_APP_DATABASE_URL: '${SERVER_APP_DATABASE_URL}'\n    depends_on:\n      nestjs-mod-fullstack-postgre-sql:\n        condition: 'service_healthy'\n    working_dir: '/usr/src/app'\n    volumes:\n      - './../apps:/usr/src/app/apps'\n      - './../libs:/usr/src/app/libs'\n  nestjs-mod-fullstack-server:\n    image: 'ghcr.io/nestjs-mod/nestjs-mod-fullstack-server:${SERVER_VERSION}'\n    container_name: 'nestjs-mod-fullstack-server'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    healthcheck:\n      test: ['CMD-SHELL', 'npx -y wait-on --timeout= --interval=1000 --window --verbose --log http://localhost:${SERVER_PORT}/api/health']\n      interval: 30s\n      timeout: 10s\n      retries: 10\n    tty: true\n    environment:\n      SERVER_APP_DATABASE_URL: '${SERVER_APP_DATABASE_URL}'\n      SERVER_PORT: '${SERVER_PORT}'\n    restart: 'always'\n    depends_on:\n      nestjs-mod-fullstack-postgre-sql:\n        condition: service_healthy\n      nestjs-mod-fullstack-postgre-sql-migrations:\n        condition: service_completed_successfully\n  nestjs-mod-fullstack-nginx:\n    image: 'ghcr.io/nestjs-mod/nestjs-mod-fullstack-nginx:${CLIENT_VERSION}'\n    container_name: 'nestjs-mod-fullstack-nginx'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    healthcheck:\n      test: ['CMD-SHELL', 'curl -so /dev/null http://localhost:${NGINX_PORT} || exit 1']\n      interval: 30s\n      timeout: 10s\n      retries: 10\n    environment:\n      SERVER_PORT: '${SERVER_PORT}'\n      NGINX_PORT: '${NGINX_PORT}'\n    restart: 'always'\n    depends_on:\n      nestjs-mod-fullstack-server:\n        condition: service_healthy\n    ports:\n      - '${NGINX_PORT}:${NGINX_PORT}'\n  nestjs-mod-fullstack-e2e-tests:\n    image: 'ghcr.io/nestjs-mod/nestjs-mod-fullstack-e2e-tests:${ROOT_VERSION}'\n    container_name: 'nestjs-mod-fullstack-e2e-tests'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    environment:\n      BASE_URL: 'http://nestjs-mod-fullstack-nginx:${NGINX_PORT}'\n    depends_on:\n      nestjs-mod-fullstack-nginx:\n        condition: service_healthy\n    working_dir: '/usr/src/app'\n    volumes:\n      - './../apps:/usr/src/app/apps'\n      - './../libs:/usr/src/app/libs'\n  nestjs-mod-fullstack-https-portal:\n    image: steveltn/https-portal:1\n    container_name: 'nestjs-mod-fullstack-https-portal'\n    networks:\n      - 'nestjs-mod-fullstack-network'\n    ports:\n      - '80:80'\n      - '443:443'\n    links:\n      - nestjs-mod-fullstack-nginx\n    restart: always\n    environment:\n      STAGE: '${HTTPS_PORTAL_STAGE}'\n      DOMAINS: '${SERVER_DOMAIN} -> http://nestjs-mod-fullstack-nginx:${NGINX_PORT}'\n    depends_on:\n      nestjs-mod-fullstack-nginx:\n        condition: service_healthy\n    volumes:\n      - nestjs-mod-fullstack-https-portal-volume:/var/lib/https-portal\nvolumes:\n  nestjs-mod-fullstack-postgre-sql-volume:\n    name: 'nestjs-mod-fullstack-postgre-sql-volume'\n  nestjs-mod-fullstack-https-portal-volume:\n    name: 'nestjs-mod-fullstack-https-portal-volume'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"11-we-launch-the-local-docker-compose-mode-and-wait-for-the-successful-completion-of-the-tests",children:'11. We launch the local "Docker Compose" mode and wait for the successful completion of the tests'}),"\n",(0,s.jsx)(n.p,{children:'When we change a lot of files or change the parameters of devops or install new dependencies, we need to locally make sure that everything works in the "Docker Compose" mode, since the build process in CI/CD spends free limits in cases of using public runners, and also loads and increases the deployment process when using your own low-power runners.'}),"\n",(0,s.jsxs)(n.p,{children:['Local launch in the "Docker Compose" mode also allows you to identify problems that may appear when running through Kubernetes, since the assembly of the ',(0,s.jsx)(n.code,{children:"Docker"})," images is the same."]}),"\n",(0,s.jsxs)(n.p,{children:["When running locally, we can download and connect the ",(0,s.jsx)(n.code,{children:"Docker"})," images that were used in Kubernetes, this helps in finding bugs that do not repeat on our machines and on our locally assembled ",(0,s.jsx)(n.code,{children:"Docker"})," images."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Commands"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm run docker-compose-full:prod:start\ndocker logs nestjs-mod-fullstack-e2e-tests\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Consule outputs"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"$ docker logs nestjs-mod-fullstack-e2e-tests\n\n> @nestjs-mod-fullstack/source@0.0.0 test:e2e\n> ./node_modules/.bin/nx run-many --exclude=@nestjs-mod-fullstack/source --all -t=e2e --skip-nx-cache=true --output-style=stream-without-prefixes\n\nNX  Falling back to ts-node for local typescript execution. This may be a little slower.\n - To fix this, ensure @swc-node/register and @swc/core have been installed\n\n NX   Running target e2e for 2 projects:\n\n- client-e2e\n- server-e2e\n\n\n\n> nx run client-e2e:e2e\n\n> playwright test\n\n\nRunning 6 tests using 3 workers\n  6 passed (4.9s)\n\nTo open last HTML report run:\n\n  npx playwright show-report ../../dist/.playwright/apps/client-e2e/playwright-report\n\n\n> nx run server-e2e:e2e\n\nSetting up...\n PASS   server-e2e  apps/server-e2e/src/server/server.spec.ts\n  GET /api\n    \u2713 should return a message (32 ms)\n    \u2713 should create and return a demo object (38 ms)\n    \u2713 should get demo object by id (9 ms)\n    \u2713 should get all demo object (7 ms)\n    \u2713 should delete demo object by id (8 ms)\n    \u2713 should get all demo object (6 ms)\nTest Suites: 1 passed, 1 total\nTests:       6 passed, 6 total\nSnapshots:   0 total\nTime:        0.789 s\nRan all test suites.\nTearing down...\n\n\n\n NX   Successfully ran target e2e for 2 projects\n"})}),"\n",(0,s.jsx)(n.h3,{id:"12-replacing-the-check-for-the-release-marker-in-the-commit-comment-with-a-check-for-the-skip-release-marker",children:"12. Replacing the check for the release marker in the commit comment with a check for the skip release marker"}),"\n",(0,s.jsxs)(n.p,{children:["In the previous post, I added the marker ",(0,s.jsx)(n.code,{children:"[release]"})," according to which we decided on the need to launch the creation of a release, it was more like an example, in reality they always forget to write this marker and have to make an unnecessary non-important commit to force the creation of a release."]}),"\n",(0,s.jsxs)(n.p,{children:["In order for the release to always try to start, replace the marker ",(0,s.jsx)(n.code,{children:"[release]"})," with ",(0,s.jsx)(n.code,{children:"[skip release]"})," and change the logic of the work, now if we meet the specified marker, we skip the step of creating the release."]}),"\n",(0,s.jsxs)(n.p,{children:["Updating the file ",(0,s.jsx)(n.code,{children:".github/workflows/kubernetes.yml"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"name: 'Kubernetes'\n\non:\n  push:\n    branches: ['master']\nenv:\n  REGISTRY: ghcr.io\n  BASE_SERVER_IMAGE_NAME: ${{ github.repository }}-base-server\n  BUILDER_IMAGE_NAME: ${{ github.repository }}-builder\n  MIGRATIONS_IMAGE_NAME: ${{ github.repository }}-migrations\n  SERVER_IMAGE_NAME: ${{ github.repository }}-server\n  NGINX_IMAGE_NAME: ${{ github.repository }}-nginx\n  E2E_TESTS_IMAGE_NAME: ${{ github.repository }}-e2e-tests\n  COMPOSE_INTERACTIVE_NO_CLI: 1\n  NX_DAEMON: false\n  NX_PARALLEL: false\n  NX_SKIP_NX_CACHE: true\n  DISABLE_SERVE_STATIC: true\njobs:\n  release:\n    runs-on: ubuntu-latest\n    permissions:\n      contents: write # to be able to publish a GitHub release\n      issues: write # to be able to comment on released issues\n      pull-requests: write # to be able to comment on released pull requests\n      id-token: write # to enable use of OIDC for npm provenance\n    steps:\n      - uses: actions/checkout@v4\n        if: ${{ !contains(github.event.head_commit.message, '[skip release]') }}\n      - run: npm install --prefer-offline --no-audit --progress=false\n        if: ${{ !contains(github.event.head_commit.message, '[skip release]') }}\n      - run: npm run nx -- run-many --target=semantic-release --all --parallel=false\n        if: ${{ !contains(github.event.head_commit.message, '[skip release]') }}\n        env:\n          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}\n# ...\n"})}),"\n",(0,s.jsx)(n.h3,{id:"13-adding-strictness-to-the-code",children:"13. Adding strictness to the code"}),"\n",(0,s.jsxs)(n.p,{children:["In addition to the ",(0,s.jsx)(n.code,{children:"lint-staged"})," settings to bring the code to a common style, it is also necessary to have common ",(0,s.jsx)(n.code,{children:"eslint"})," and ",(0,s.jsx)(n.code,{children:"typescript-CompilerOptions"})," parameters with additional code strictness rules."]}),"\n",(0,s.jsxs)(n.p,{children:["I usually don't touch the standard ",(0,s.jsx)(n.code,{children:"eslint"})," And ",(0,s.jsx)(n.code,{children:"prettier"})," settings, just add a little strictness to the root ",(0,s.jsx)(n.code,{children:"Typescript"})," config."]}),"\n",(0,s.jsxs)(n.p,{children:["Adding additional rules to ",(0,s.jsx)(n.code,{children:"tsconfig.base.json"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  // ...\n  "compilerOptions": {\n    // ...\n    "allowSyntheticDefaultImports": true,\n    "strictNullChecks": true,\n    "noImplicitOverride": true,\n    "strictPropertyInitialization": true,\n    "noImplicitReturns": true,\n    "noFallthroughCasesInSwitch": true,\n    "esModuleInterop": true,\n    "noImplicitAny": false\n    // ...\n  }\n  // ...\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Run the ",(0,s.jsx)(n.code,{children:"npm run manual:prepare"})," and fix everything that is broken and restart it again until we fix all the errors."]}),"\n",(0,s.jsx)(n.h3,{id:"14-commit-the-code-and-wait-for-the-successful-creation-of-releases-and-passing-tests",children:"14. Commit the code and wait for the successful creation of releases and passing tests"}),"\n",(0,s.jsxs)(n.p,{children:["Current result of CI/CD operation: ",(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod/nestjs-mod-fullstack/actions/runs/10904254598",children:"https://github.com/nestjs-mod/nestjs-mod-fullstack/actions/runs/10904254598"}),"\nCurrent site: ",(0,s.jsx)(n.a,{href:"https://fullstack.nestjs-mod.com",children:"https://fullstack.nestjs-mod.com"})]}),"\n",(0,s.jsx)(n.h3,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["If there are other files in the project that may change depending on the settings of the development environment, these files must also be specified in the ",(0,s.jsx)(n.code,{children:"lint-staged"})," rules."]}),"\n",(0,s.jsxs)(n.p,{children:["Strictness can also be made even stronger, as well as the ",(0,s.jsx)(n.code,{children:"eslint"})," rules, but each time you need to measure the running time, so for example, the ",(0,s.jsx)(n.code,{children:"eslint"})," rule for sorting imports runs the ",(0,s.jsx)(n.code,{children:"ast"})," view parser, in a large project it just works for a very long time."]}),"\n",(0,s.jsx)(n.p,{children:"In this post, I showed how you can speed up deployment by versioning the frontend, and you can do the same with microservices."}),"\n",(0,s.jsx)(n.h3,{id:"plans",children:"Plans"}),"\n",(0,s.jsx)(n.p,{children:"Since I managed to complete the main points on devops, the following posts will already contain brief descriptions of the development of the main features that I planned to do."}),"\n",(0,s.jsxs)(n.p,{children:["In the next post, I will create a webhook module on ",(0,s.jsx)(n.code,{children:"NestJS"})," to provide access to our api to third-party services..."]}),"\n",(0,s.jsx)(n.h3,{id:"links",children:"Links"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nestjs.com",children:"https://nestjs.com"})," - the official website of the framework"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://nestjs-mod.com",children:"https://nestjs-mod.com"})," - the official website of additional utilities"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://fullstack.nestjs-mod.com",children:"https://fullstack.nestjs-mod.com"})," - website from the post"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod/nestjs-mod-fullstack",children:"https://github.com/nestjs-mod/nestjs-mod-fullstack"})," - the project from the post"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/nestjs-mod/nestjs-mod-fullstack/compare/2f9b6eddb32a9777fabda81afa92d9aaebd432cc..460257364bb4ce8e23fe761fbc9ca7462bc89b61",children:"https://github.com/nestjs-mod/nestjs-mod-fullstack/compare/2f9b6eddb32a9777fabda81afa92d9aaebd432cc..460257364bb4ce8e23fe761fbc9ca7462bc89b61"})," - current changes"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"#lint #format #nestjsmod #fullstack\n#2024-09-17"})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);