import { Outlet } from 'react-router-dom'
import { ItemsProvider } from './Context/SearchContext'

import Navbar from './components/Navbar'

function App () {
  return (
    <ItemsProvider>
      <Navbar />
      <Outlet />
    </ItemsProvider>
  )
}

export default App
