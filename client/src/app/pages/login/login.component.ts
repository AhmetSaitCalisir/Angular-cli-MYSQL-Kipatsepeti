import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/models/Kullanici';
import { AuthenticationService } from 'src/app/services/authentication.service';

import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUser: Kullanici = new Kullanici('', '', '', '', '');

  constructor(private authService: AuthenticationService,private router:Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('isLogged')) {
      this.router.navigate(['/kitaplar']);
    }
  }

  //login
  login() {
    if (localStorage.getItem('isLogged')) {
      alert('zaten giriş yapıldı');
    } else {
      this.authService.login(this.loginUser).subscribe((durum) => {
        if (durum) {
          localStorage.setItem('isLogged', this.loginUser.ad);
          alert('giriş yaptınız');
          window.location.reload();
        } else {
          alert('lütfen tekrar deneyin');
        }
      });
    }
  }
}
