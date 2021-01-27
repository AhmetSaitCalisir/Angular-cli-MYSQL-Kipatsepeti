const express = require("express");

var db = require("./connection");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("BEN AUTH");
});

//kaydol
router.post("/signin", (req, res) => {
  let sql = `insert into kullanıcılar (ad,soyad,email,tel,sifre) values('${req.body.ad}','${req.body.soyad}','${req.body.email}','${req.body.tel}','${req.body.sifre}')`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else {
      console.log(result);
      res.send(true);
    }
  });
});

//giris
router.post("/login", (req, res) => {
  console.log(req.body);
  let sql = `select * from kullanıcılar where (ad='${req.body.ad}' and soyad='${req.body.soyad}') and sifre='${req.body.sifre}'`;
  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send(false);
    } else if (result.length < 1) {
      //console.log(result[0].ad, result[0].soyad, 'giriş yaptınız');
      res.send(false);
    } else {
      res.send(true);
    }
  });
});

module.exports = router;
