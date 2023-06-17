## run the server NestJS
```
nx serve server
```

## run the client Angular
```
nx serve client
```

## run the client and server
```
nx run-many --target=serve --projects=client,server
```
or  
```
nx run-many --target=serve --all
```
npx nx g @angular/material:ng-add --project=client
## generate angular module
```
nx generate @nx/angular:module <module-name> --project=client
```
> outside of nx, ng g module <module-name>

## generate angular component
```
nx generate @nx/angular:component <module-name> --project=client
```
> outside of nx, ng g component <module-name>

## generate nestjs module
```
nx generate @nx/nest:module <module-name> --project=server
```
> outside of nx, nest g <module-name>
