import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TpCustomModule } from 'custom';
import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { TpCoreModule } from '@tp-ui/tp-core';
import { TpCommonModule } from '@tp-ui/tp-common';
import { AppRoutingModule } from './app-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TpCommonModule,
    TranslateModule.forRoot(),
    TpCoreModule.forRoot(),
    AppRoutingModule,
    NxModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
