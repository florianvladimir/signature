import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SignatureComponent } from './container/signature/signature.component';
import { AtramentComponent } from './component/sketchpad/atrament/atrament.component';
import { ResponsiveSComponent } from './component/sketchpad/responsive-s/responsive-s.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignatureComponent,
    AtramentComponent,
    ResponsiveSComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
