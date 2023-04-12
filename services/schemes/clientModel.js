import mongoose from 'mongoose';

const clientDataSchema = new mongoose.Schema({
    FIO: {type: String, required: true},
    sex: {type: String, required: true},
    birth: {type: String, required: true},
    location: {type: String, required: true},
    citizenship: {type: String, required: true},
    email: {type: String, required: true},
    connect: {type: String, required: true},
    salary: {type: String, required: true},
    education: {type: String, required: true},
    experience: {type: String, required: true},
    addition: {type: String}
})

export default mongoose.model("clientDatas", clientDataSchema)