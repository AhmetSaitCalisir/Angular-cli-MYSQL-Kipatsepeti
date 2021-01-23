const express = require("express");
const db = require("./connection");

const router = express.Router();

router.get("/", (req, res) => {
  const sql = "SELECT * FROM kitap_angular.kitap_bilgi";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Kitaplar Getirilemedi");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const sql = `INSERT INTO kitap_bilgi (isim, yazar, kategori, yayinevi, yil, fiyat, aciklama) VALUES ('${req.body.isim}', '${req.body.yazar}', '${req.body.kategori}', '${req.body.yayinevi}', ${req.body.yil}, ${req.body.fiyat}, '${req.body.aciklama}')`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Kitaplar Getirilemedi");
    } else {
      res.send(result);
    }
  });
});

router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM kitap_bilgi WHERE id='${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Kitap Silinemedi");
    } else {
      res.send(result);
    }
  });
});

router.put("/:id", (req, res) => {
  const sql = `UPDATE kitap_bilgi SET isim='${req.body.isim}',yazar='${req.body.yazar}',kategori='${req.body.kategori}',yayinevi='${req.body.yayinevi}',fiyat=${req.body.fiyat},aciklama='${req.body.aciklama}',yil=${req.body.yil} WHERE id='${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Kitap Güncellenemedi");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
