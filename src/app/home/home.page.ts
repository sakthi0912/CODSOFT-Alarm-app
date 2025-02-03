import { Component } from '@angular/core';
import {  NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
 alarms : any[] = [];


  constructor( private navCtrl : NavController,
    private storage : Storage

  ) {}
  async ionViewWillEnter(){
      const savedAlarms =await this.storage.get('alarms');
      this.alarms = savedAlarms || [];
     }

  async deleteAlarm(index : number){
      this.alarms.splice(index,1);
      await this.storage.set('alarms',this.alarms);

    }

  editAlarm(index : number){
      this.navCtrl.navigateForward(`/add-alarm?index=${index}`);
  }
   
 goToAddAlarm(){
  this.navCtrl.navigateForward('/add-alarm');

 }
 goToSettings(){
  this.navCtrl.navigateForward('/settings');
 }

  
 
}
