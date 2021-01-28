import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Bayi } from 'src/app/models/Bayi';
import { BayiService } from 'src/app/services/bayi.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-bayi-item',
  templateUrl: './bayi-item.component.html',
  styleUrls: ['./bayi-item.component.css'],
})
export class BayiItemComponent implements OnInit {
  constructor(private bayiService: BayiService, private router: Router) {}

  @Input() bayi: Bayi = new Bayi(2, '', '', '', '', '', '', '');
  @Output() deleteBayi: EventEmitter<Bayi> = new EventEmitter();

  ngOnInit(): void {}

  //dynamic classes
  setClasses() {
    let classes = {
      bayi: true,
    };
    return classes;
  }

  //onDelete
  bayiSil(bayi: Bayi) {
    this.bayiService.bayiSil(bayi).subscribe((res) => {
      alert(res);
      window.location.reload();
    });
  }

  bayiGuncelle() {
    this.router.navigate(['/bayiguncelle', this.bayi.id]);
  }

  talepOlustur() {
    alert('Talep oluşturulacak');
    this.router.navigate(['/talepolustur', this.bayi.id]);
  }
}
