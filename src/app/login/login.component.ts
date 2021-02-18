import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../common/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  validateForm:FormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  
  constructor(private route:Router, private service:LoginService) { }

  ngOnInit() {
  }

  login() {
    this.service.isLogin = false;
    this.route.navigateByUrl('/zone/main')
  }

}
