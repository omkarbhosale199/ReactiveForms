import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Reactiveform2ValidationComponent } from './reactiveform2-validation/reactiveform2-validation.component';
import { Reactiveform3withradiodropdownComponent } from './reactiveform3withradiodropdown/reactiveform3withradiodropdown.component';
import { Reactiveform4customvalidationComponent } from './reactiveform4customvalidation/reactiveform4customvalidation.component';
import { Reactiveform5setvalueandpatchvalueComponent } from './reactiveform5setvalueandpatchvalue/reactiveform5setvalueandpatchvalue.component';
import { Reactiveform6nestedformComponent } from './reactiveform6nestedform/reactiveform6nestedform.component';
import { Reactiveform7formbilderComponent } from './reactiveform7formbilder/reactiveform7formbilder.component';
import { Reactiveform8deletehobbytaskComponent } from './reactiveform8deletehobbytask/reactiveform8deletehobbytask.component';

@NgModule({
  declarations: [
    AppComponent,
    Reactiveform1Component,
    Reactiveform2ValidationComponent,
    Reactiveform3withradiodropdownComponent,
    Reactiveform4customvalidationComponent,
    Reactiveform5setvalueandpatchvalueComponent,
    Reactiveform6nestedformComponent,
    Reactiveform7formbilderComponent,
    Reactiveform8deletehobbytaskComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
