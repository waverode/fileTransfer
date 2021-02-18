import { Component } from '@angular/core';
import { LoginService } from './common/services/login.service';

export interface folder {
  router: string,
  name: string,
  isPrivate: boolean
}

export interface contact {
  name: string,
  group: string,
  router: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isCollapsed = false;
  folders:folder[] = [
    {
      router: '/zone/main',
      name: 'main',
      isPrivate: false
    },
    {
      router: '/zone/new-folder1',
      name: 'new folder1',
      isPrivate: false
    }
  ]

  contacts:contact[] = [
    {
      name: 'chen',
      group: 'group1',
      router: '/contact/1001'
    },
    {
      name: 'wang',
      group: 'group2',
      router: '/contact/1002'
    },
    {
      name: 'tian',
      group: 'group1',
      router: '/contact/1003'
    },
    {
      name: 'long',
      group: 'group1',
      router: '/contact/1004'
    },
    {
      name: 'YONG',
      group: 'group1',
      router: '/contact/1005'
    },
  ]

  constructor(public loginService:LoginService) {
  }
  
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }

  changeLogin() {
    this.loginService.isLogin = true;
  }

}
