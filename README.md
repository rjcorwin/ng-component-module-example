# NgComponentModuleExample

This repository serves as an example how how you make a Component from one Module available in the Component of another Module. 

The [first commit](https://github.com/rjsteinert/ng-component-module-example/commit/1042ec02cbbfd53b66ccd8faa6edb5e7ca5637ca) in this repository is the result of `ng new ng-component-module-example`. 

The [second commit](https://github.com/rjsteinert/ng-component-module-example/commit/656f66bc1dffd337434d31918a0854da0d39c614) is the result of creating a Foo Module and then a Foo Component in the Foo Module with `cd src/app && ng generate module foo && cd foo && ng generate component foo`. 

The [third commit](https://github.com/rjsteinert/ng-component-module-example/commit/2c9b0cb8bd89da9e34274ba10cba7669d17711e2) shows the 4 changes you need to make to then be able to use Foo Component in App Component via the App Module importing the Foo Module.


1. Generate the module and component.
```
cd ./src/app/
ng generate module foo
cd foo
ng generate component foo
```
2. In the Module declaration, tell the Module to export the Component when this module is imported into other Modules.
```
  "declarations": [ FooComponent ],
+ "exports": [ FooComponent ]
```
3. From your App Module, or any other module, ES6 import the FooModule Class from the Foo Module's `.module` file.
```
import { FooModule } from './foo/foo.module';
```
4. From your App Module declaration, or any other module declaration, Angular import the FooModule Class.
```
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
+   FooModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
```
5. The last step is to restart the `npm start` you are probably running.
