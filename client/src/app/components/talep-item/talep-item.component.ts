import { Component, Input, OnInit } from '@angular/core';
import { TalepSatis, TalepSatisKitap } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-talep-item',
  templateUrl: './talep-item.component.html',
  styleUrls: ['./talep-item.component.css']
})
export class TalepItemComponent implements OnInit {

  constructor(private talepService:SatisTalepService) { }

  @Input() talep: TalepSatis = new TalepSatis(0,0,'','2021-01-01',0,'','','','','','','');
  
  talepKitaplar: TalepSatisKitap[]= [new TalepSatisKitap(0,0,0,0,'dnm','yazar','kategoori',2020,20,'minnakımı çok seviom ki ben ya off yicez onu')]


  ngOnInit(): void {
  }

 

}
