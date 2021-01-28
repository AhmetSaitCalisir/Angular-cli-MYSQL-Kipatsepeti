import { Component, OnInit } from '@angular/core';
import { TalepSatis } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-satislar',
  templateUrl: './satislar.component.html',
  styleUrls: ['./satislar.component.css'],
})
export class SatislarComponent implements OnInit {
  taleps: TalepSatis[] = [];

  constructor(private talepService: SatisTalepService) {}

  ngOnInit(): void {
    this.talepService.satisListele().subscribe((talepler) => {
      this.taleps = talepler;
    });
  }
}
