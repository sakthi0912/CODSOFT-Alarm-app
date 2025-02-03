import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tone-selection',
  templateUrl: './tone-selection.page.html',
  styleUrls: ['./tone-selection.page.scss'],
  standalone: false,
})
export class ToneSelectionPage {
  tones = ['Beep', 'Chime', 'Alarm Tone 1', 'Alarm Tone 2'];

  constructor(private navCtrl: NavController) { }

  selectTone(tone: string) {
    this.navCtrl.navigateBack('/add-alarm', { queryParams: { tone } });
  }

  closePage() {
    this.navCtrl.navigateBack('/add-alarm');
  }
}

