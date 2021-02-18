import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [ContactComponent]
})
export class ContactModule { }
