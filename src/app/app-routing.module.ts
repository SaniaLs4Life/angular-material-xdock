import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CbrComponent } from './components/cbr/cbr.component';
import { LaunchpadComponent } from './components/launchpad/launchpad.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { XbrComponent } from './components/xbr/xbr.component';
import { XtbrComponent } from './components/xtbr/xtbr.component';

const routes: Routes = [
  {
    path: '',
    component: LaunchpadComponent,
  },
  {
    path: 'xbr',
    component: XbrComponent,
  },
  {
    path: 'xtbr',
    component: XtbrComponent,
  },
  {
    path: 'cbr',
    component: CbrComponent,
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
