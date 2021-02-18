import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-downloadList',
  templateUrl: './downloadList.component.html',
  styleUrls: ['./downloadList.component.less']
})
export class DownloadListComponent implements OnInit {

  dataSet = [
    {
      name: 'dfile1',
      size: '1kb',
      ispaused: false
    },
    {
      name: 'dfile2',
      size: '1kb',
      ispaused: false
    },
    {
      name: 'dfile3',
      size: '1kb',
      ispaused: false
    },
    {
      name: 'dfile4',
      size: '1kb',
      ispaused: false
    }
  ]

 

  constructor() { 
  }

  ngOnInit() {
  }

  pausedItem(index) {
    this.dataSet[index].ispaused = !this.dataSet[index].ispaused;
  }

  deleteItem(index) {
      this.dataSet.splice(index,1);
      console.log(this.dataSet)
    
  }
}
