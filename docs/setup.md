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

add angular material  
```
npm install @angular/material --dev
npx nx g @angular/material:ng-add --project=client
```
- custom theme? => pink-bluegrey(no matter what you choose)
- global angular material typography styles? => true
- include angular animations module? => do not include

> outside of nx, ng add @angular/material

## add domain in the library
```
npx nx generate @nx/js:library domain --directory=shared --importPath=@libs/shared/domain --tags=scope:shared,type:domain
```
- unit test runner => none
- bundler => none

> if you don't need shared-domain.ts, remove it.