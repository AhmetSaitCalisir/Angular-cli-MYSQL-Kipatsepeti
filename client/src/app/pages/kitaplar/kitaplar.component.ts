import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kitap } from 'src/app/models/Kitap';
import { KitapService } from 'src/app/services/kitap.service';
@Component({
  selector: 'app-kitaplar',
  templateUrl: './kitaplar.component.html',
  styleUrls: ['./kitaplar.component.css'],
})
export class KitaplarComponent implements OnInit {
  books: Kitap[] = [];

  constructor(private kitapService: KitapService,private router:Router) {}

  ngOnInit(): void {
    if (!localStorage.getItem('isLogged')) {
      alert('Giriş yapınız.');
      this.router.navigate(['/']);
    }

    this.kitapService.kitapGetir().subscribe((kitaps) => {
      this.books = kitaps;
    });
  }

  //delete book
  deleteBook(book: Kitap) {
    this.books = this.books.filter((b) => b.id !== book.id);
    //remove from server
    this.kitapService.bookDelete(book).subscribe();
  }
}
