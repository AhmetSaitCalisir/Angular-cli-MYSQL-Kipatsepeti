import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kitap } from 'src/app/models/Kitap';
import { KitapService } from 'src/app/services/kitap.service';

@Component({
  selector: 'app-kitap-item',
  templateUrl: './kitap-item.component.html',
  styleUrls: ['./kitap-item.component.css'],
})
export class KitapItemComponent implements OnInit {
  constructor(private bookService: KitapService) {}

  @Input() book: Kitap = new Kitap(0, '', '', '', 0, 0, '', '');
  @Output() deleteBook: EventEmitter<Kitap> = new EventEmitter();

  ngOnInit(): void {}

  //dynamic classes
  setClasses() {
    let classes = {
      book: true,
    };
    return classes;
  }

  //onDelete
  onDelete(dbook: any) {
    this.deleteBook.emit(dbook);
  }
}
