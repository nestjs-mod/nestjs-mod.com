# nestjs-mod
rm -rf tmp/nestjs-mod
git clone https://github.com/nestjs-mod/nestjs-mod.git tmp/nestjs-mod

## common
cp -fr LICENSE docs/packages/common/LICENSE
cp -fr tmp/nestjs-mod/libs/common/README.md docs/packages/common/common.md
cp -fr tmp/nestjs-mod/libs/misc/README.md docs/packages/common/misc.md
cp -fr tmp/nestjs-mod/libs/schematics/README.md docs/packages/common/schematics.md

## system
cp -fr LICENSE docs/packages/system/LICENSE
cp -fr tmp/nestjs-mod/libs/fastify/README.md docs/packages/system/fastify.md
cp -fr tmp/nestjs-mod/libs/microservices/README.md docs/packages/system/microservices.md
cp -fr tmp/nestjs-mod/libs/testing/README.md docs/packages/system/testing.md

## infrastructure
cp -fr LICENSE docs/packages/infrastructure/LICENSE
cp -fr tmp/nestjs-mod/libs/reports/README.md docs/packages/infrastructure/reports.md

# nestjs-mod-contrib
rm -rf tmp/nestjs-mod-contrib
git clone https://github.com/nestjs-mod/nestjs-mod-contrib.git tmp/nestjs-mod-contrib

npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/core --find=README --replace=README --dest-path=./docs/packages/core --glob-rules=**/README.md --extensions=MD
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/feature --find=README --replace=README --dest-path=./docs/packages/feature --glob-rules=**/README.md --extensions=MD
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/infrastructure --find=README --replace=README --dest-path=./docs/packages/infrastructure --glob-rules=**/README.md --extensions=MD
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/integration --find=README --replace=README --dest-path=./docs/packages/integration --glob-rules=**/README.md --extensions=MD
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/system --find=README --replace=README --dest-path=./docs/packages/system --glob-rules=**/README.md --extensions=MD

npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/core --find=LICENSE --replace=LICENSE --dest-path=./docs/packages/core --glob-rules=**/LICENSE --extensions=*
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/feature --find=LICENSE --replace=LICENSE --dest-path=./docs/packages/feature --glob-rules=**/LICENSEd --extensions=*
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/infrastructure --find=LICENSE --replace=LICENSE --dest-path=./docs/packages/infrastructure --glob-rules=**/LICENSE --extensions=*
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/integration --find=LICENSE --replace=LICENSE --dest-path=./docs/packages/integration --glob-rules=**/LICENSE --extensions=*
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-contrib/libs/system --find=LICENSE --replace=LICENSE --dest-path=./docs/packages/system --glob-rules=**/LICENSE --extensions=*

# nestjs-mod-fullstack
rm -rf tmp/nestjs-mod-fullstack
git clone https://github.com/nestjs-mod/nestjs-mod-fullstack.git tmp/nestjs-mod-fullstack

rm -rf ./docs/ru-posts
rm -rf ./docs/en-posts
mkdir -p ./docs/ru-posts/fullstack
mkdir -p ./docs/en-posts/fullstack
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-fullstack/steps --find=20 --replace=20 --dest-path=./docs/ru-posts/fullstack --glob-rules=**/ru.md --extensions=*
npx -y rucken@latest copy-paste --path=./tmp/nestjs-mod-fullstack/steps --find=20 --replace=20 --dest-path=./docs/en-posts/fullstack --glob-rules=**/en.md --extensions=*
./node_modules/.bin/ts-node --project ./tools/custom-tsconfig.json ./tools/fullstack-util.ts