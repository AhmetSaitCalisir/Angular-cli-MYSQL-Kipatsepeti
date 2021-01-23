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
        } else {
            console.log(result);
            res.json(result);
        }
    });
});

//giris
router.post('/login', (req, res) => {
    let sql = `select * from kullanıcılar where (ad='${req.body.ad}' and soyad='${req.body.soyad}') and sifre='${req.body.sifre}'`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result[0].ad, result[0].soyad, 'giriş yaptınız');
        res.json(result);
    })
})


module.exports = router;