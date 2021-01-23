export class Kitap {
  constructor(
    public id: string,
    public isim: string,
    public yayinevi: string,
    public yazar: string,
    public yil: string,
    public fiyat: string,
    public dil: string,
    public aciklama: string,
    public kategori: string[]
  ) {}
}
