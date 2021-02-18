import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
