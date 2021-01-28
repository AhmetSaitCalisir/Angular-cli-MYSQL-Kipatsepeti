const express = require("express");

const db = require("./connection");
const router = express.Router();

//talep listele
router.get("/talepler", (req, res) => {
  const sql =
    "select * from talepler t  join bayiler b on b.id=t.bayi_id WHERE t.onay_durumu=0";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Talepler Getirilemedi");
    } else {
      res.json(result);
    }
  });
});

//satış listele
router.get("/satislar", (req, res) => {
  const sql =
    "select * from talepler t  join bayiler b on b.id=t.bayi_id WHERE t.onay_durumu=1";
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Satışlar Getirilemedi");
    } else {
      res.json(result);
    }
  });
});

//talep edilen kitaplar
router.get("/kitaplar/:id", (req, res) => {
  const sql = `SELECT * FROM kitap_angular.kitap_talep kt join kitap_bilgi kb on kt.kitap_id=kb.id WHERE talep_id = ${req.params.id}`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Talep edilen Kitaplar Getirilemedi");
    } else {
      res.json(result);
    }
  });
});

// talep ekle
router.post("/talepler", (req, res) => {
  const talep_id = Math.floor(Math.random() * 10000) + 1000;
  const sqlTalep = `INSERT INTO kitap_angular.talepler (talep_id,bayi_id, fiyat, tarih, onay_durumu) VALUES (${talep_id},'${req.body.bayi_id}', '${req.body.fiyat}', NOW(), '0')`;
  db.query(sqlTalep, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Talep eklenirken sorun meydana geldi");
    }
  });
  let uzunluk = 0;
  console.log("req.body.kitaplar");
  console.log(req.body.kitaplar);
  req.body.kitaplar.forEach((kitap) => {
    console.log("kitap");
    console.log(kitap);
    const sqlKitaplar = `INSERT INTO kitap_angular.kitap_talep (adet, talep_id,kitap_id) VALUES ('${kitap.adet}',${talep_id}, '${kitap.kitap_id}');`;
    db.query(sqlKitaplar, (err, result) => {
      console.log(kitap.kitap_id + " id şuanda ekleniyor");
      if (err) {
        console.log(err);
        res
          .status(404)
          .send("Talep Edilen Kitap eklenirken sorun meydana geldi");
      }
      uzunluk++;
      if (uzunluk == req.body.kitaplar.length) {
        console.log("Eklenme bitti");
        res.json(result);
      }
      console.log("kitaplar.length " + req.body.kitaplar.length);
      console.log("uzunluk " + uzunluk);
    });
  });
});

//talep onayla
router.put("/onayla/:id", (req, res) => {
  const sql = `UPDATE kitap_angular.talepler SET onay_durumu = '1' WHERE (talep_id = '${req.params.id}');`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Talep onaylanırken sorun meydana geldi");
    }
    console.log("Talep Onaylanıyor");
    res.json(result);
  });
});

function talepSil(id) {
  const silSql = `DELETE FROM kitap_angular.talepler WHERE (talep_id = '${id}')`;
  db.query(silSql, (err, result) => {
    if (err) {
      console.log(err);
    }
  });
  const ksilSql = `DELETE FROM kitap_angular.kitap_talep WHERE (talep_id = '${id}')`;
  db.query(ksilSql, (err, result) => {
    if (err) {
      console.log(err);
    }
    return;
  });
}

//talep sil
router.delete("/sil/:id", (req, res) => {
  talepSil(req.params.id);
  res.send("Silindi");
});

//talep güncelle
router.put("/guncelle/:id", (req, res) => {
  talepSil(req.params.id);
  const talep_id = req.params.id;
  const sqlTalep = `INSERT INTO kitap_angular.talepler (talep_id,bayi_id, fiyat, tarih, onay_durumu) VALUES (${talep_id},'${req.body.bayi_id}', '${req.body.fiyat}', NOW(), '0')`;
  db.query(sqlTalep, (err, result) => {
    if (err) {
      console.log(err);
      res.status(404).send("Talep eklenirken sorun meydana geldi");
    }
  });
  let uzunluk = 0;
  console.log("req.body.kitaplar");
  console.log(req.body.kitaplar);
  req.body.kitaplar.forEach((kitap) => {
    console.log("kitap");
    console.log(kitap);
    const sqlKitaplar = `INSERT INTO kitap_angular.kitap_talep (adet, talep_id,kitap_id) VALUES ('${kitap.adet}',${talep_id}, '${kitap.kitap_id}');`;
    db.query(sqlKitaplar, (err, result) => {
      console.log(kitap.kitap_id + " id şuanda ekleniyor");
      if (err) {
        console.log(err);
        res
          .status(404)
          .send("Talep Edilen Kitap eklenirken sorun meydana geldi");
      }
      uzunluk++;
      if (uzunluk == req.body.kitaplar.length) {
        console.log("Eklenme bitti");
        res.send("Talep Güncellendi");
      }
      console.log("kitaplar.length " + req.body.kitaplar.length);
      console.log("uzunluk " + uzunluk);
    });
  });
});

module.exports = router;
