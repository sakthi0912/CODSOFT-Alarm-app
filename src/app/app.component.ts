import { Component } from '@angular/core';
import { LocalNotifications } from '@awesome-cordova-plugins/local-notifications/ngx';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  constructor(private localNotifications: LocalNotifications,
    private storage : Storage
  ) {
    this.initStorage();
  }

 
  async initStorage(){
    await this.storage.create();
  }
}
