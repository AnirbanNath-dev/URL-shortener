import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import connectDb from "./db/index.js";
import Link from "./model/model.js";

const app = express();


app.use(express.json());
app.use(cors())

connectDb()
app.use('/api' , router)

app.get('/:id' , async (req , res) => {
    const id = req.params.id;
    const link = await Link.findOne({
        urlId : id
    })
    console.log(link)
    res.redirect(link.url);
})

app.listen(3000)