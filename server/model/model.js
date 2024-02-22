import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    url : String,
    urlId : String
})

const Link = mongoose.model('Link', linkSchema)

export default Link