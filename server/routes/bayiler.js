const express = require("express");
const db = require("./connection");

const router = express.Router();

//Bayi Listele
router.get("/", (req, res) => {
  const sql = "SELECT * FROM kitap_angular.bayiler";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Kitaplar Getirilemedi");
    } else {
      res.json(result);
    }
  });
});

//Bayi Ekle
router.post("/", (req, res) => {
  const sql = `INSERT INTO bayiler (bayi_isim,il,ilce,posta_kodu,tel,bayi_sahibi,email) VALUES ('${req.body.bayi_isim}', '${req.body.il}', '${req.body.ilce}', '${req.body.posta_kodu}', '${req.body.tel}','${req.body.bayi_sahibi}','${req.body.email}')`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Bayi Eklenemedi");
    } else {
      res.send(result);
    }
  });
});

//Bayi Sil
router.delete("/:id", (req, res) => {
  const sql = `DELETE FROM bayiler WHERE id='${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Bayi Silinemedi");
    } else {
      res.send(result);
    }
  });
});

//Bayi Güncelle
router.put("/:id", (req, res) => {
  const sql = `UPDATE bayiler SET bayi_isim='${req.body.bayi_isim}',il='${req.body.il}',ilce='${req.body.ilce}',posta_kodu='${req.body.posta_kodu}',tel='${req.body.tel}',bayi_sahibi='${req.body.bayi_sahibi}',email='${req.body.email}' WHERE id='${req.params.id}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Bayi Güncellenemedi");
    } else {
      res.send(result);
    }
  });
});

module.exports = router;
