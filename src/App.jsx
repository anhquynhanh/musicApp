import './App.css'
import PlayerProvider from './features/context/PlayerProvider'
import Player from './features/player/Player'
import PlayList from './features/playlist/PlayList'

function App() {

  return (
    <PlayerProvider className="player-container">
      <PlayList />
      <Player />
    </PlayerProvider>
  )
}

export default App