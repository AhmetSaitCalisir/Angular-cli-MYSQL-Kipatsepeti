import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/models/Kullanici';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: Kullanici = new Kullanici('ad', 'soyad', '', '', 'sifre');

  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {}

  //login
  login() {
    if (localStorage.getItem('isLogged')) {
      alert('zaten giriş yapıldı');
    } else {
      this.authService.login(this.loginUser).subscribe((durum) => {
        if (durum) {
          localStorage.setItem('isLogged', this.loginUser.ad);
          alert('giriş yaptınız');
        } else {
          alert('lütfen tekrar deneyin');
        }
      });
    }
  }
}
