import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToneSelectionPageRoutingModule } from './tone-selection-routing.module';

import { ToneSelectionPage } from './tone-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToneSelectionPageRoutingModule
  ],
  declarations: [ToneSelectionPage] 
})
export class ToneSelectionPageModule {}
