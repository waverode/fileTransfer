import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareComponent } from './share.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from '../icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { DownloadListComponent } from '../common/components/downloadList/downloadList.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzFormModule } from 'ng-zorro-antd/form';
import { ReactiveFormsModule } from '@angular/forms';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NzDividerModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    ReactiveFormsModule,
    NzTableModule,
    NzDrawerModule,
    NzInputModule,
    NzIconModule,
    NzAvatarModule,
    NzUploadModule,
    NzFormModule,
    NzModalModule
  ],
  exports:[
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzDividerModule,
    NzMenuModule,
    NzTableModule,
    ReactiveFormsModule,
    NzInputModule,
    NzDrawerModule,
    NzIconModule,
    NzAvatarModule,
    NzUploadModule,
    NzFormModule,
    NzModalModule,
    DownloadListComponent
  ],
  declarations: [
    ShareComponent,
    DownloadListComponent
  ]
})
export class ShareModule { }
