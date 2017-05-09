import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo/foo.component';

export { FooComponent }

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [FooComponent],
  declarations: [FooComponent]
})
export class FooModule { }
