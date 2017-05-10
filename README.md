# How to create an Angular Module for a Component in 5 steps
How do I create an Angular Module for a Component? Here you will find the five steps.

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
