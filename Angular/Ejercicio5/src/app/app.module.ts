import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SubComponent } from './sub/sub.component';
import { MathService } from './math.service';

@NgModule({
  declarations: [
    AppComponent,
    SubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MathService],
  bootstrap: [AppComponent]
})
export class AppModule { }
