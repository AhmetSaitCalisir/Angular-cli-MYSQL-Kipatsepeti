const express = require("express");

const db = require('./connection');
const router = express.Router();

//talep listele
router.get("/", (req, res) => { //tüm kolonları getiriyor şstediklerimizi secicez
    let sql =
        "select * from (talepler t join kitap_talep kt on kt.talep_id=t.talep_id) join kitap_bilgi kb on kb.kitap_id=kt.kitap_id";
    db.query(sql, (err, results) => {
        if (err) throw err;
        console.log("Tüm talepler listelendi");
        res.json(results);
    });
});

async function IdBul(bayi_isim, bayi_sahibi, kitap_isim) {
    let promise = new Promise((resolve, reject) => {
        let sqlID = `select b.id as 'bayi_id',k.id as 'kitap_id' from bayiler b,kitap_bilgi k where (b.bayi_isim='${bayi_isim}' and b.bayi_sahibi='${bayi_sahibi}') and k.isim='${kitap_isim}'`;
        db.query(sqlID, (err, result) => {
            console.log("sqlıd qwuery içine girildi");
            if (err) reject(err);
            let IDs = {};
            IDs.bayi_id = -1;
            IDs.kitap_id = -1;
            IDs.bayi_id = result[0].id;
            IDs.kitap_id = result[0].id;
            console.log("bayi id bulundu", IDs.bayi_id, "kitap id:", IDs.kitap_id);
            resolve(IDs);
        });
    });
    let result = await promise;
    return result;
}

async function ekle(bilgi) {
    let ID = -1;
    let promise = new Promise((resolve, reject) => {
        let sql = `insert into talepler (bayi_id,fiyat,tarih,onay_durumu) values (${bilgi.bayi_id},${bilgi.fiyat},'${bilgi.tarih}','1')`;
        db.query(sql, (err, result) => {
            console.log('insert sorgusu içine girldi.');
            if (err) {
                console.log(err);
            }
            console.log('talep eklendi');
            resolve("ekle query sona erdi");
        })
    }).then(async() => {
        let promiseID = new Promise((resolve, reject) => {
            let sqlTalepId = `select talep_id from talepler  where bayi_id=${bilgi.bayi_id} and tarih='${bilgi.tarih}'`;
            db.query(sqlTalepId, (err, results) => {
                if (err) {
                    console.log(err);
                }
                ID = results[0].talep_id;
                resolve(ID);
            });
        });
        let result = await promiseID;
        return result;
    });
    return await promise;
}

async function kitap_talep_ekle(
    talep_id, kitap_id, adet
) {
    let promise = new Promise((resolve, reject) => {
        let sql = `insert into kitap_talep (adet,talep_id,kitap_id) values (${adet},${talep_id},${kitap_id})`;
        db.query(sql, (err, results) => {
            if (err) {
                console.log(err);
            }
            resolve("talep kitap bilgileri eklendi");
        });
    });
}

//ekle 
router.post('/add', async(req, res) => {
    let IDs = await IdBul(req.body.bayi_isim, req.body.bayi_sahibi, req.body.kitap_isim);

    let gonder_bilgi = {};
    gonder_bilgi.bayi_id = IDs.bayi_id;
    gonder_bilgi.fiyat = req.body.fiyat;
    gonder_bilgi.tarih = req.body.tarih;

    const kitap_bilgi = {};
    kitap_bilgi.adet = req.body.adet;
    kitap_bilgi.kitap_id = IDs.kitap_id;

    await kitap_talep_ekle(
        await ekle(gonder_bilgi),
        kitap_bilgi.kitap_id,
        kitap_bilgi.adet
    );

})

//talep sil
router.delete('/delete/:id', (req, res) => {
    let sql = `delete from talepler where talep_id=${req.params.id}`;
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log("Talep silindi.");
    });

})

module.exports = router;