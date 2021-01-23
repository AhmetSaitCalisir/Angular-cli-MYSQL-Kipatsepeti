const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const auth = require("./routes/auth.js");
const bayiler = require("./routes/bayiler.js");
const kitaplar = require("./routes/kitaplar.js");
const satis_talep = require("./routes/satis-talep.js");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("MERHABA DÜNYA");
});

app.use("/auth", auth);
app.use("/bayiler", bayiler);
app.use("/kitaplar", kitaplar);
app.use("/satistalep", satis_talep);

const port = process.env.PORT || 3545;

app.listen(port, () => {
    console.log(`Server başlatıldı => http://localhost:${port}/`);
});