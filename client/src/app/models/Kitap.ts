export class Kitap {
  constructor(
    public id: number,
    public isim: string,
    public yayinevi: string,
    public yazar: string,
    public yil: number,
    public fiyat: number,
    public aciklama: string,
    public kategori: string
  ) {}
}
