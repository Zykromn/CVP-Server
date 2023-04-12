import express from 'express'
import routerAdmin from "./routers/routerAdmin.js";
import routerClient from "./routers/routerClient.js";
import mongoose from 'mongoose'

const PORT = process.env.PORT || 5000;
const DB_URL = `mongodb+srv://Kyle:123@cluster0.igeqooz.mongodb.net/CVP?retryWrites=true&w=majority`

const app = express()

app.use(express.json())
app.use('/client', routerClient)
app.use('/admin', routerAdmin)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('SERVER STARTED. PORT ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp()
