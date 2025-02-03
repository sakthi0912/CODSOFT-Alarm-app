import { Component } from '@angular/core';
import {  NavController } from '@ionic/angular';
import {Storage } from '@ionic/storage-angular'
import { LocalNotifications} from '@awesome-cordova-plugins/local-notifications/ngx'
@Component({
  selector: 'app-add-alarm',
  templateUrl: './add-alarm.page.html',
  styleUrls: ['./add-alarm.page.scss'],
  standalone: false,
})
export class AddAlarmPage  {

  alarm ={
    time :'',
    label:'',
    repeat :'none',
    tone : 'Default',
  };
  isEdit = false;
  editIndex: number | null = null;

  constructor(private navCtrl : NavController,
    private storage : Storage,
    private localNotifications : LocalNotifications
  ) { }

   async ionViewWillEnter(){
    const queryParams = new URLSearchParams(window.location.search);
    const index= queryParams.get('index');
    if(index !==null){
      const alarms =await this.storage.get('alarms');
      this.alarm = alarms[+index];
      this.isEdit= true ;
      this.editIndex =+index;
    }
   }


   async saveAlarm(){
    const alarms =(await this.storage.get('alarms')) || [];
     const currentDate =new Date();
     const[hours,minutes]=
     this.alarm.time.split(':').map(Number);
     const alarmTime = new Date(
      currentDate .getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hours,
      minutes
     );

    if(this.isEdit){
      alarms[this.editIndex!] =this.alarm;
       }else{
        alarms.push(this.alarm);
       }

       await this.storage.set('alarms',alarms);

       

       this.localNotifications.schedule({
        id : Date.now(),
        title : 'Alarm',
        text : this.alarm.label || 'Your alarm is ringing!',
        trigger : { at : alarmTime},
        sound : 'file://assets/sounds/Beep.mp3',
        foreground : true,
        
  
      });



       this.navCtrl .navigateBack('/home');
   }

  closePage(){
    this.navCtrl.navigateBack('/home');
  }

  goToToneSelection(){
    this.navCtrl.navigateForward('/tone-selection');
  }

}
