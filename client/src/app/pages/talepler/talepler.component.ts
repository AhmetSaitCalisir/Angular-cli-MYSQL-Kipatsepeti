import { Component, OnInit } from '@angular/core';
import { TalepSatis } from 'src/app/models/TalepSatis';
import { SatisTalepService } from 'src/app/services/satis-talep.service';

@Component({
  selector: 'app-talepler',
  templateUrl: './talepler.component.html',
  styleUrls: ['./talepler.component.css'],
})
export class TaleplerComponent implements OnInit {
  taleps: TalepSatis[] = [];

  constructor(private talepService: SatisTalepService) {}

  ngOnInit(): void {
    this.talepService.talepListele().subscribe((talepler) => {
      this.taleps = talepler;
    });
  }
}
