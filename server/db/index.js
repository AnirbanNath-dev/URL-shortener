import mongoose from 'mongoose';
import DATA from '../constants.js'

const connectDb = async () => {
    try {
        await mongoose.connect(`${DATA.MONGO_URI}/${DATA.DB_NAME}`)
        console.log('connected to db')
    } catch (error) {
        console.log('error in connecting in db', error);
    }
}

export default connectDb