import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import { GlobalCss } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
