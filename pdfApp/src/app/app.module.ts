import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { myContentComponent } from './mycontent/mycontent.component';
import { topnavComponent } from './mycontent/topnav/topnav.component';
import { HeaderComponent } from './mycontent/header/header.component';
import { RegisterComponent } from './mycontent/header/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    myContentComponent,
    topnavComponent,
    HeaderComponent,
    RegisterComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
