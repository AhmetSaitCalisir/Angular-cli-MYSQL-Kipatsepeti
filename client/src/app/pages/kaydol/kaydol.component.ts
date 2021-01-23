import { Component, OnInit } from '@angular/core';
import { Kullanici } from 'src/app/models/Kullanici';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-kaydol',
  templateUrl: './kaydol.component.html',
  styleUrls: ['./kaydol.component.css']
})
export class KaydolComponent implements OnInit {
User:Kullanici[]=[];
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
  }


  addUser(user:Kullanici){
    this.authService.addUser(user).subscribe(user => {
this.User.push(user);
    })
  }

}
