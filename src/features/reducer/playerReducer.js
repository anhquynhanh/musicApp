import { songs } from "../data/songs";

export const PLAYER = {
    PLAY : 'player/play',
    PAUSE: 'player/pause',
    NEXT: 'player/next',
    PREV: 'player/previous',
    SHUFFLE: 'player/shuffle',
    LOOP: 'player/loop',
    ADJUST_TIME: 'player/adjustTime',
    SET_SONG: 'player/setSong',
    ADJUST_VOLUME: 'player/adjustVolume'
};

export const playerReducer = (state, action) => {
    switch (action.type) {
        case PLAYER.PLAY: {
            return {
                ...state,
                playing: true
            };
        }

        case PLAYER.PAUSE: {
            return {
                ...state,
                playing: false
            };
        }

        case PLAYER.NEXT: {
            let nextSongIndex = state.currentSongIndex + 1;

            if(nextSongIndex >= songs.length) {
                nextSongIndex = 0;
            }

            return {
                ...state,
                currentSongIndex: nextSongIndex
            };
        }
        
        case PLAYER.PREV: {
            let prevSongIndex = state.currentSongIndex - 1;

            if (prevSongIndex < 0) {
                prevSongIndex = songs.length -1;
            }

            return {
                ...state,
                currentSongIndex: prevSongIndex
            };
        }

        case PLAYER.ADJUST_TIME: {
            return {
                ...state,
                currentTime: action.payload.currentTime
            };
        }

        case PLAYER.LOOP: {
            return {
                ...state,
                loop:  !state.loop
            };
        }

        case PLAYER.SHUFFLE: {
            return {
                ...state,
                shuffle: !state.shuffle
            };
        }

        case PLAYER.ADJUST_VOLUME: {
            return {
                ...state,
                volume: action.payload.volume
            };
        }

        case PLAYER.SET_SONGS: {
            const songIndex = songs.findIndex(
                song => song.id === action.payload.song.id,
            );
            return {
                ...state,
                currentSongIndex: songIndex
            };
        }

        default: {
            throw new Error(`Invalid action ${action.type}`);
        }
    }
}