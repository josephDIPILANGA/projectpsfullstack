import express from 'express'
import connectDb from './config/db.js'
import dotenv from'dotenv'

const  app = express()

dotenv.config()
connectDb()

app.get('/' , (req, res) => {
    res.send('App is running')
})

const port = process.env.PORT || 5000

app.listen(5000, () => console.log('server run on port 5000'))