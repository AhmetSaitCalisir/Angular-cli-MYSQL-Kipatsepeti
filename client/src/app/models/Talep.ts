export class Talep{
    constructor(
        public talep_id: number,
        public bayi_isim: string,
        public toplam_fiyat: string,
        public tarih: string,
        public onay_durumu: boolean,
        public adet: number,
        public kitap_isim: string,
        public bayi_sahibi: string
    ){}
}