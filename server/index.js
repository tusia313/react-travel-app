const PORT = 8000
const { default: axios } = require('axios')
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())

//Default route
app.get('/', (req, res) => {
  res.status(200).json('Welcome to the port 8000 :)')
})

//Get all posts
app.get('/posts', async (req, res) => {
  const url = `${process.env.ASTRA_URL}?posts-size=20`
  const options = {
    method: 'GET',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
    }
  }
  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching posts' })
  }
})

// Get a single post 
app.get('/posts/:postId', async (req, res) => {
  console.log(req)
  const id = req.params.postId
  const url = `${process.env.ASTRA_URL}/${id}`
  const options = {
    method: 'GET',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
    }
  }
  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error fetching post' })
  }
})
// Create a new post
app.listen(PORT, console.log('Server is running on port ' + PORT))