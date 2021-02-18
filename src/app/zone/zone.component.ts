import { Component, OnInit } from '@angular/core';

export interface file {
  title: string,
  isfile: boolean,
  children: file[],
  desc: string,
  createDate: string,
  lastModifed: string,
  size: number
}

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {

  isVisible = false;
  filedatas:file[] = [
    {
      title: 'file1',
      isfile: true,
      children: [],
      desc: 'this is the first file.',
      createDate: '2020-01-14',
      lastModifed: '2020-01-14',
      size: 2
    },
    {
      title: 'file2',
      isfile: true,
      children: [],
      desc: 'this is the second file.',
      createDate: '2020-01-14',
      lastModifed: '2020-01-14',
      size: 2
    },
    {
      title: 'folder1',
      isfile: false,
      children: [
        {
          title: 'file1',
          isfile: true,
          children: [],
          desc: 'this is the first file.',
          createDate: '2020-01-14',
          lastModifed: '2020-01-14',
          size: 2
        },
        {
          title: 'file2',
          isfile: true,
          children: [],
          desc: 'this is the second file.',
          createDate: '2020-01-14',
          lastModifed: '2020-01-14',
          size: 2
        }
      ],
      desc: 'this is the first folder.',
      createDate: '2020-01-14',
      lastModifed: '2020-01-14',
      size: 2
    },
    {
      title: 'file3',
      isfile: true,
      children: [],
      desc: 'this is the 3 file.',
      createDate: '2020-01-14',
      lastModifed: '2020-01-14',
      size: 2
    },
    {
      title: 'file4',
      isfile: true,
      children: [],
      desc: 'this is the 4 file.',
      createDate: '2020-01-14',
      lastModifed: '2020-01-14',
      size: 2
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  addFile() {
    
  }

  fileDownload() {
    this.isVisible = true;
  }

  folderclick(index) {
    this.filedatas = this.filedatas[index].children;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
