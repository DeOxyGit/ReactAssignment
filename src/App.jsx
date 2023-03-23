import { useState } from 'react'
import './App.css'
import viteLogo from '/vite.svg'
import Profile from './component/Profile'
import FavoriteSites from './component/FavoriteSites'
import Gallery from './component/Gallery'
import style from './component/style/style.css'
import StateAssignmentOne from './component/StateAssignmentOne'
import StateAssignmentTwo from './component/StateAssignmentTwo'
function App() {
  return (
    <div className="App">
      {/* <FavoriteSites />
      <Profile />
      <Gallery /> */}
      {/* <StateAssignmentOne /> */}
      <StateAssignmentTwo />
    </div>
  )
}

export default App
