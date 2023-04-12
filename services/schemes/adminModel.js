import mongoose from 'mongoose';

const adminDataSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})

export default mongoose.model("adminDatas", adminDataSchema)