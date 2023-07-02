import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from './pages/home'
import Detail from './pages/detail'
import Watch from './pages/watch'
import NotFound from '../src/components/molekul/notFound'
import RecentEpisode from './pages/recentEpisode'
import { SearchProvider } from './components/globalState/searchContext'

function App() {

  const [load, setLoad] = useState(false)

  return (
    <SearchProvider>
      <Router basename='/anime'>
        <Routes>
          <Route path='/' element={<Home load={load} setLoad={setLoad} />} />
          <Route path='/newEpisode' element={<RecentEpisode load={load} setLoad={setLoad} />} />
          <Route path='/detail/:id' element={<Detail load={load} setLoad={setLoad} />} />
          <Route path='/watch/:episodeId' element={<Watch load={load} setLoad={setLoad} />} />


          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </SearchProvider>
  )
}

export default App
