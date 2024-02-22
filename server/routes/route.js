import { Router } from "express";
import { nanoid } from "nanoid";
import Link from "../model/model.js";

const router = Router()

router.post('/' , async (req , res) => {
    const url = req.body.url;
    const id = nanoid(4)
    await Link.create({
        url : url,
        urlId : id
    })
    res.json({
        msg : 'success',
        id : id
    })
    
})



export default router