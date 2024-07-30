import { Routes, Route, BrowserRoute  } from 'react-router-dom'
import Post from './pages/Post'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className="app">
      <BrowserRoute>
      <Routes>
        <Route path={'/'} example={<Dashboard/>}/>
        <Route path={'/posts/:id'} example={<Post/>}/>
      </Routes>
      </BrowserRoute>
    </div>
  )
}

export default App
