import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  
  visible = false;

  constructor() { }

  ngOnInit() {
  }

  openDetail() {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
