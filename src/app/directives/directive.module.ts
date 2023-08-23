import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';

@NgModule({
    imports: [CoreModule]
})

 export class DirectiveModule {
    static forRoot() {
       return {
           ngModule: DirectiveModule,
           providers: [],
       };
    }
  } 