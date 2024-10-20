import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Produtos from './pages/Produtos'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
