import { BayiGuncelleComponent } from './pages/bayi-guncelle/bayi-guncelle.component';
import { BayiEkleComponent } from './pages/bayi-ekle/bayi-ekle.component';
import { KitapEkleComponent } from './pages/kitap-ekle/kitap-ekle.component';
import { KitaplarComponent } from './pages/kitaplar/kitaplar.component';
import { BayilerComponent } from './pages/bayiler/bayiler.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitapGuncelleComponent } from './pages/kitap-guncelle/kitap-guncelle.component';
import { TaleplerComponent } from './pages/talepler/talepler.component';
import { SatislarComponent } from './pages/satislar/satislar.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'bayiler', component: BayilerComponent },
  { path: 'kitaplar', component: KitaplarComponent },
  { path: 'kitapekle', component: KitapEkleComponent },
  { path: 'bayiekle', component: BayiEkleComponent },
  { path: 'bayiguncelle/:id', component: BayiGuncelleComponent },
  { path: 'kitapguncelle/:id', component: KitapGuncelleComponent},
  { path: 'talepler', component:TaleplerComponent},
  { path: 'satislar', component:SatislarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
