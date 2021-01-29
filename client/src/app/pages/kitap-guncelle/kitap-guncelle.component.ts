import { KitapService } from './../../services/kitap.service';
import { Component, OnInit } from '@angular/core';
import { Kitap } from 'src/app/models/Kitap';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-kitap-guncelle',
  templateUrl: './kitap-guncelle.component.html',
  styleUrls: ['./kitap-guncelle.component.css'],
})
export class KitapGuncelleComponent implements OnInit {
  kitap: Kitap = new Kitap(
    0,
    'Güncellenecek',
    'Güncellenecek',
    'Güncellenecek',
    0,
    0,
    'Güncellenecek',
    'Güncellenecek'
  );

  constructor(
    private bookService: KitapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }

    this.route.params.subscribe((params) => {
      this.kitap.id = params['id'];
    });
    this.bookService.kitapGetir().subscribe((books) => {
      books.forEach((book) => {
        if (book.id == this.kitap.id) {
          this.kitap = book;
        }
      });
    });
  }

  kitapGuncelle() {
    this.bookService.bookUpdate(this.kitap).subscribe((res) => {
      alert('GÜNCELLEDİN');
      this.router.navigate(['/kitaplar']);
    })
    
  }
}
