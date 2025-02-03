import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
  standalone: false,
})
export class SettingsPage {
  settings = {
    defaultTone: 'Default',
    darkMode: true, // Set this as a boolean, not a string
  };
  tones = ['Default', 'Beep', 'Chime', 'Alarm Tone 1', 'Alarm Tone 2'];

  constructor(
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  async ionViewWillEnter() {
    const savedSettings = await this.storage.get('settings');
    this.settings = savedSettings || this.settings;


    document.body.classList.toggle('dark', this.settings.darkMode);
  
  }

  async saveSettings() {
    await this.storage.set('settings', this.settings);

    document.body.classList.toggle('dark', this.settings.darkMode);
  }

  closePage() {
    this.navCtrl.navigateBack('/home');
  }
}

