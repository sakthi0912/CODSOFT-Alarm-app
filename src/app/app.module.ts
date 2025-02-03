import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AddAlarmPageModule } from './add-alarm/add-alarm.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';

import { ToneSelectionPageModule } from './tone-selection/tone-selection.module';
import { SettingsPageModule } from './settings/settings.module';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(),IonicStorageModule.forRoot(), AppRoutingModule,AddAlarmPageModule,ToneSelectionPageModule,SettingsPageModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },LocalNotifications],
  bootstrap: [AppComponent],
})
export class AppModule {}
