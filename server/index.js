const PORT = 8000
const { default: axios } = require('axios')
require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
app.use((req, res, next) => {
  console.log(`Incoming request: ${req.method} ${req.url}`)
  next()
})

//Default route
app.get('/', (req, res) => {
  res.status(200).json('Welcome to the port 8000 :)')
})

//Get all posts
app.get('/posts', async (req, res) => {
  const url = `${process.env.ASTRA_URL}?page-size=20`
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
// Update a post
app.put('/update/:postId', async (req, res) => {
  const id = req.params.postId
  const data = req.body.data
  const url = `${process.env.ASTRA_URL}/${id}`
  const options = {
    method: 'PUT',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
      Accepts: 'application/json',
    },
    data
  }
  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: 'Error updating post' })
  }
})

// Create a post
// const { v4: uuidv4 } = require('uuid')
app.put('/create', async (req, res) => {
  const data = req.body.data
  console.log('Data received:', data); // Loguj dane, aby upewnić się, że są poprawne
  // const documentId = uuidv4()
  const url = process.env.ASTRA_URL
  const options = {
    method: 'PUT',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
      'Content-Type': 'application/json',
    },
    data
  }
 
  try {
    const response = await axios(url, options)
    console.log('Post created successfully:', response.data);
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err })
  }
})

// Delete a post
app.delete('/delete/:postId', async (req, res) => {
  const id = req.params.postId
  const url = `${process.env.ASTRA_URL}/${id}`
  const options = {
    method: 'DELETE',
    headers: {
      'X-Cassandra-Token': process.env.TOKEN,
    }
  }
  try {
    const response = await axios(url, options)
    res.status(200).json(response.data)
  } catch (err) {
    console.error(err)
    res.status(500).json({ message: err})
  }
})
app.listen(PORT, console.log('Server is running on port ' + PORT))