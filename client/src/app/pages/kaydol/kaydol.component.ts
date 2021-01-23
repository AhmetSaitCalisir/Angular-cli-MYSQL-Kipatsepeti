import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/models/Kullanici';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-kaydol',
  templateUrl: './kaydol.component.html',
  styleUrls: ['./kaydol.component.css'],
})
export class KaydolComponent implements OnInit {
  constructor(private authService: AuthenticationService) {}
  User: Kullanici = new Kullanici('', '', '', '', '');
  ngOnInit(): void {}

  // tslint:disable-next-line: typedef
  addUser() {
    this.authService.addUser(this.User).subscribe((durum) => {
      if (durum) {
        alert('kayıt olundu');
      } else {
        alert('kayıt olunmadı');
      }
    });
  }
}
