import { Routes, Route, BrowserRouter  } from 'react-router-dom'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Dashboard/>}/>
        <Route path={'/posts/:id'} element={<Post/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
