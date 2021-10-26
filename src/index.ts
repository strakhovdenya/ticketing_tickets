import mongoose from 'mongoose';
import {app} from "./app";

const start = async () => {
    if(!process.env.JWT_KEY){
        throw new Error('JWT_KEY must be defined');
    }
    if(!process.env.MONGO_URI){
        throw new Error('MONGO_URI must be defined');
    }

    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to mongoDB in tickets');
    } catch (e) {
        console.log(e);
    }

    app.listen(3000, () => {
        console.log('Listening on port 3000!!!');
    })
};

start();
// test 2

