import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kitap } from 'src/app/models/Kitap';
import { KitapService } from 'src/app/services/kitap.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-kitap-item',
  templateUrl: './kitap-item.component.html',
  styleUrls: ['./kitap-item.component.css'],
})
export class KitapItemComponent implements OnInit {
  constructor(private bookService: KitapService,private router:Router) {}

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

  kitapGuncelle() {
    this.router.navigate(['/kitapguncelle', this.book.id]);
  }
}
