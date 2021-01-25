import { Component, OnInit, Input } from '@angular/core';
import { Bayi } from 'src/app/models/Bayi';

@Component({
  selector: 'app-bayi-item',
  templateUrl: './bayi-item.component.html',
  styleUrls: ['./bayi-item.component.css'],
})
export class BayiItemComponent implements OnInit {
  constructor() {}

  @Input() bayi: Bayi = new Bayi(2, '', '', '', '', '', '', '');

  ngOnInit(): void {}

  //dynamic classes
  setClasses() {
    let classes = {
      book: true,
    };
    return classes;
  }
}
