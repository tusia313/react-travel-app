PORT = 8000
const { default: axios } = require('axios')
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

app.use(cors())

app.listen(PORT, console.log('Server is listening on port ' + PORT))

// Default
app.get('/', (req, res) => {
    res.status(200).json('Welcome to my travel app !')
})

// Get all posts
app.get('/posts', async (req, res) => {
    const url = `${process.env.ASTRA_URL}?page-size=20`

    const options = {
        method: "GET",
        headers: {
            'X-Cassandra-Token': process.env.TOKEN
        }
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    } catch (err) {
        console.error(err)
        res.status(500).json({ message : err })
    }
})

