import "reflect-metadata";
import {createConnection} from "typeorm";
import express from 'express'

const app = express()

app.use(express.json())

