/* eslint-disable no-undef */
import express from "express"
import mysql from "mysql"
import cors from "cors"
import * as dotenv from "dotenv"
dotenv.config()

const app = express()
app.use(cors())

// PORT address
const PORT = process.env.PORT

// * Connection to mysql db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "designo",
})

// * api call for categories
app.get("/categories", (req, res) => {
  const sql = "SELECT * FROM Categories"
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

// * api call for qualities
app.get("/qualities", (req, res) => {
  const sql = "SELECT * FROM Qualities"
  db.query(sql, (err, data) => {
    if (err) return res.json(err)
    return res.json(data)
  })
})

app.get("/", (req, res) => {
  return res.json("From the backend")
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
