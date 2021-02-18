import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadListComponent } from './common/components/downloadList/downloadList.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ZoneComponent } from './zone/zone.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'zone/main', 
    pathMatch: 'full'
  },
  {
    path: 'zone/:zoneId',
    component: ZoneComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    outlet: 'popup'
  },
  {
    path: 'contact/:personId',
    component: ContactComponent
  },
  {
    path: 'downloadList',
    component: DownloadListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
