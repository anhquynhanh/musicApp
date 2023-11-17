import { songs } from "../data/songs";
import { usePlayer } from "../hooks/usePlayer";

function PlayList() {
    const { currentSong } = usePlayer();

    return (
        <div>
            <h1>Playlist</h1>

            <div>
                {songs.map((song) => (
                    <div
                        key={song.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            background: currentSong.id === song.id ? 'pink' : 'none'
                        }}
                    >
                        <div>
                            <img
                                src={song.thumbnail}
                                alt={song.title}
                                width={100}
                                height={100}
                            />
                        </div>
                        <div>
                            <h3>{song.title}</h3>
                            <p>{song.artist}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PlayList