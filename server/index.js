const PORT = 8000
const { default: axios } = require('axios')
require('dotenv').config()
const express = require('express')
const app = express()

//Default
app.get('/', (req, res) => {
  res.status(200).json('Welcome to the port 8000 :)')
})
//Get all posts
app.get('/posts', async(req, res) => {
  const url = `${process.env.ASTRA_URL}?posts-size=20`
  const options = {
    method: 'GET',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
    }
  }
  try {
    const response = await axios (url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching posts' })
  }
})
app.listen(PORT, console.log('Server is running on port ' + PORT))