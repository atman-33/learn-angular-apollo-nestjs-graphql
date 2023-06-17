## change to your choice of directory
open shell
```
cd ~/Sites
```
> ~/Sites is example

## create nx workspace NestJS app
```
npx create-nx-workspace@latest --preset nest
```
- workspace name? => learn-angular-apollo-nestjs-graphql
- app name? => server

> preset angular-nest does not exist.

## add Angular app
```
npm install @nrwl/angular
```
```
nx generate @nrwl/angular:application --name client
```
- style? => scss
- config? => false
- routing? => true

## add domain in the library
```
npx nx generate @nx/js:library domain --directory=shared --importPath=@libs/shared/domain --tags=scope:shared,type:domain
```
- unit test runner => none
- bundler => none

> if you don't need shared-domain.ts, remove it.