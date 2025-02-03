import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToneSelectionPage } from './tone-selection.page';

const routes: Routes = [
  {
    path: '',
    component: ToneSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToneSelectionPageRoutingModule {}
