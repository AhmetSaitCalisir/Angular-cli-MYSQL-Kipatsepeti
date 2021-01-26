import { Component, OnInit } from '@angular/core';
import { Bayi } from 'src/app/models/Bayi';
import { BayiService } from 'src/app/services/bayi.service';

@Component({
  selector: 'app-bayiler',
  templateUrl: './bayiler.component.html',
  styleUrls: ['./bayiler.component.css'],
})
export class BayilerComponent implements OnInit {
  bayiler: Bayi[] = [];
  constructor(private bayiService: BayiService) {}

  ngOnInit(): void {
    this.bayiService.bayiListele().subscribe((bayis) => {
      this.bayiler = bayis;
    });
  }
  
}
