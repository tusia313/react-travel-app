import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Post from './pages/Post'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    {/* this syntax is how you create pages in react project */}
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path={'/'} element={<Dashboard/>}></Route>
          <Route path={'/posts/:id'} element={<Post/>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
