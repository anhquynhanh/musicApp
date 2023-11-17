import './App.css'
import PlayerProvider from './features/context/PlayerProvider'
import Player from './features/player/Player'
import PlayList from './features/playlist/PlayList'

function App() {

  return (
    <PlayerProvider>
      <PlayList />
      <Player />
    </PlayerProvider>
  )
}

export default App
