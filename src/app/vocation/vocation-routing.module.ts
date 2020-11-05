import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VocationPage } from './vocation.page';

const routes: Routes = [
  {
    path: '',
    component: VocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VocationPageRoutingModule {}
