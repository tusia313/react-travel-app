import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<Dashboard />} />
          <Route path={'/posts/:id'} element={<Post />} />
        </Routes>
        <Footer />
      </BrowserRouter>
  )
}

export default App
