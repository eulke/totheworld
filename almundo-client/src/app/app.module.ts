import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { HotelsModule } from './hotels/hotels.module';
import { NgxsModule } from '@ngxs/store';
import { HotelState } from 'src/shared/states/hotels.state';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HotelsModule,
    NgxsModule.forRoot([HotelState], {developmentMode: !environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
