import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitaplarComponent } from './pages/kitaplar/kitaplar.component';
import { KitapEkleComponent } from './pages/kitap-ekle/kitap-ekle.component';
import { KitapItemComponent } from './components/kitap-item/kitap-item.component';
import { KitapGuncelleComponent } from './pages/kitap-guncelle/kitap-guncelle.component';
import { KitapSilComponent } from './pages/kitap-sil/kitap-sil.component';
import { BayilerComponent } from './pages/bayiler/bayiler.component';
import { BayiItemComponent } from './components/bayi-item/bayi-item.component';
import { BayiEkleComponent } from './pages/bayi-ekle/bayi-ekle.component';
import { BayiGuncelleComponent } from './pages/bayi-guncelle/bayi-guncelle.component';
import { BayiSilComponent } from './pages/bayi-sil/bayi-sil.component';
import { TaleplerComponent } from './pages/talepler/talepler.component';
import { TalepItemComponent } from './components/talep-item/talep-item.component';
import { SatislarComponent } from './pages/satislar/satislar.component';
import { SatisItemComponent } from './components/satis-item/satis-item.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { KaydolComponent } from './pages/kaydol/kaydol.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { TalepEkleComponent } from './pages/talep-ekle/talep-ekle.component';

@NgModule({
  declarations: [
    AppComponent,
    KitaplarComponent,
    KitapEkleComponent,
    KitapItemComponent,
    KitapGuncelleComponent,
    KitapSilComponent,
    BayilerComponent,
    BayiItemComponent,
    BayiEkleComponent,
    BayiGuncelleComponent,
    BayiSilComponent,
    TaleplerComponent,
    TalepItemComponent,
    SatislarComponent,
    SatisItemComponent,
    NavbarComponent,
    KaydolComponent,
    LoginComponent,
    TalepEkleComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
