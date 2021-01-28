export class TalepSatis {
  constructor(
    public talep_id: number,
    public bayi_id: number,
    public fiyat: string,
    public tarih: string,
    public onay_durumu: number,
    public bayi_isim: string,
    public il: string,
    public ilce: string,
    public posta_kodu: string,
    public tel: string,
    public bayi_sahibi: string,
    public email: string
  ) {}
}

export class TalepSatisKitap {
  constructor(
    public id: number,
    public adet: number,
    public talep_id: number,
    public kitap_id: number,
    public isim: string,
    public yazar: string,
    public kategori: string,
    public yil: number,
    public fiyat: number,
    public aciklama: string
  ) {}
}

export class TalepOlustur {
  constructor(
    public bayi_id: number,
    public fiyat: string,
    public kitaplar: TalepKitaplar[]
  ) {}
}

export class TalepKitaplar {
  constructor(public adet: number, public kitap_id: number) {}
}
