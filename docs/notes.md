# Angular

## add component
*flow*  
1. create module, component  
```
nx generate @nx/angular:module <module-name> --project=client
nx generate @nx/angular:component <component-name> --project=client
```

# NestJS

## add rest component

*flow* 
1. create module, component  
```
nx generate @nx/nest:module app/<module-name> --project=server
nx generate @nx/nest:controller app/<controller-name> --project=server
nx generate @nx/nest:service app/<service-name> --project=server
```

## add graphql resolver

*init*  
1. create common/abstract.model.ts
2. create database/abstract.schema.ts
3. create database/abstract.repository.ts

*flow*  
1. create module, resolver, service
```
nx generate @nx/nest:module app/<module-name> --project=server
nx generate @nx/nest:resolver app/<resolver-name> --project=server
nx generate @nx/nest:service app/<service-name> --project=server
```

> following example is create any ver.  

2. create <name>.model.ts           *name => singular
3. create <name>.schema.ts          *name => singular
4. create <name>.repository.ts      *name => plural
5. update Module
    - add MongooseModule.forFeature... in imports
    - add Repository in Providers
6. create dto/input/<name>.dto.ts
7. update Resolver  
    - add create method
8. update Service
    - add create method
    - add toModel method

