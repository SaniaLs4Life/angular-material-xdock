import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatModuleModule } from './materialModule/mat-module/mat-module.module';
import { LaunchpadComponent } from './components/launchpad/launchpad.component';
import { XbrComponent } from './components/xbr/xbr.component';
import { XtbrComponent } from './components/xtbr/xtbr.component';
import { CbrComponent } from './components/cbr/cbr.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LaunchpadComponent,
    XbrComponent,
    XtbrComponent,
    CbrComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
