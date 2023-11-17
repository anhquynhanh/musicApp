import { useReducer } from "react";
import { createContext } from "react";
import { playerReducer } from "../reducer/playerReducer";

const initialPlayerState = {
    playing: false,
    currentTime: 0,
    currentSongIndex: 0,
    volume: 1,
    loop: false,
    shuffle: false
};

export const PlayerContext = createContext();

export default function PlayerProvider({ children }) {
    const [state, dispatch] = useReducer(playerReducer, initialPlayerState);

    return (
        <PlayerContext.Provider value={{ state, dispatch }}>
            { children }
        </PlayerContext.Provider>
    );
}