import "reflect-metadata"
import {createConnection} from "typeorm"
import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.get('/', (, res) => res.send('Hello Neel'))

app.listen(5000, async () => {
    console.log('Server running at localhost:5000')

    try {
        await createConnection()
        console.log('Database connected!')
    } catch (error) {
        console.log(error)
    }
})

