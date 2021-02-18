import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZoneComponent } from './zone.component';
import { ShareModule } from '../share/share.module';

@NgModule({
  imports: [
    CommonModule,
    ShareModule
  ],
  declarations: [ZoneComponent]
})
export class ZoneModule { }
