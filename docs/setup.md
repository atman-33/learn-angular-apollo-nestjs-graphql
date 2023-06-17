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
nx generate @nrwl/angular:application --name client \
--style scss \
--prefix app \
--routing
```

*add angular material*  
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

## install graphql etc for nestjs
```
npm install @nestjs/graphql @nestjs/apollo graphql apollo-server-express
```

## install class validator etc for nestjs
```
npm install class-validator class-transformer
```

## install mongoose and config for nestjs
```
npm install @nestjs/mongoose mongoose @nestjs/config
```

## install joi for nestjs *joi for validating .env values
```
npm install joi
```

## install bcrypt for nestjs
```
npm install bcrypt
```

## install apollo for angular
```
npm install apollo-angular @apollo/client graphql --force
```

```
npm install @graphql-codegen/cli @graphql-codegen/schema-ast @graphql-codegen/typescript-apollo-angular @graphql-codegen/typescript-operations
```
*tsconfig.base.json => add "ESNext.AsyncIterable" in lib*  
```
  "compilerOptions": {
    ...,
    "lib": ["es2020", "dom", "ESNext.AsyncIterable"],
    ...
```