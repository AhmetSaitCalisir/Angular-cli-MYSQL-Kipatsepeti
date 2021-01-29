import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Kullanici } from 'src/app/models/Kullanici';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-kaydol',
  templateUrl: './kaydol.component.html',
  styleUrls: ['./kaydol.component.css'],
})
export class KaydolComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}
  User: Kullanici = new Kullanici('', '', '', '', '');
  ngOnInit(): void {
    if (localStorage.getItem('isLogged')) {
      alert('Zaten giriş yaptınız.');
      this.router.navigate(['/']);
    }
  }

  // tslint:disable-next-line: typedef
  addUser() {
    this.authService.addUser(this.User).subscribe((durum) => {
      if (durum) {
        alert('kayıt olundu');
        this.router.navigate(['/']);
      } else {
        alert('kayıt olunmadı');
      }
    });
  }
}
