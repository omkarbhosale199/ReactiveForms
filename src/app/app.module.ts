import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Reactiveform1Component } from './reactiveform1/reactiveform1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Reactiveform2ValidationComponent } from './reactiveform2-validation/reactiveform2-validation.component';
import { Reactiveform3withradiodropdownComponent } from './reactiveform3withradiodropdown/reactiveform3withradiodropdown.component';
import { Reactiveform4customvalidationComponent } from './reactiveform4customvalidation/reactiveform4customvalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    Reactiveform1Component,
    Reactiveform2ValidationComponent,
    Reactiveform3withradiodropdownComponent,
    Reactiveform4customvalidationComponent
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
