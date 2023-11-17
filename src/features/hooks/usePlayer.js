import { useContext, useEffect, useRef } from "react";
import { PlayerContext } from "../context/PlayerProvider";
import { PLAYER } from "../reducer/playerReducer";
import { songs } from "../data/songs";

export const usePlayer = () => {
    const { state, dispatch } = useContext(PlayerContext);
    const audioRef = useRef();

    const { playing, currentSongIndex, currentTime } = state;

    useEffect(() => {
        const audioEl = audioRef.current;

        if (!audioEl) return;

        if (playing) {
            audioEl.play();
        } else {
            audioEl.pause();
        }
    }, [playing, currentSongIndex]);

    useEffect(() => {
        const audioEl = audioRef.current;

        if (playing && audioEl.paused) {
            audioEl.play();
        }
    }, [playing, currentTime]);

    const handlePlay = () => {
        dispatch({ type: PLAYER.PLAY });
    };

    const handlePause = () => {
        dispatch({ type: PLAYER.PAUSE });
    };

    const handleNext = () => {
        dispatch({ type: PLAYER.NEXT });
    };

    const handlePrev = () => {
        dispatch({ type: PLAYER.PREV });
    };

    const handleTimeUpdate = (currentTime) => {
        dispatch({ type: PLAYER.ADJUST_TIME, payload: { currentTime } });
    };

    const toggleLoop = () => {
        dispatch({ type: PLAYER.LOOP });
    };

    const toggleShuffle = () => {
        dispatch({ type: PLAYER.SHUFFLE });
    };

    const handleEnded = () => {
        if (state.loop) {
            dispatch({ type: PLAYER.ADJUST_TIME, payload: { currentTime: 0 } });
        } else {
            dispatch({ type: PLAYER.NEXT });
        }
    };

    const handleMouseDown = () => {
        audioRef.current.muted = true;
    };

    const handleMouseUp = () => {
        audioRef.current.muted = false;
    };

    const handleCurrentTimeChange = (e) => {
        audioRef.current.currentTime = e.target.value;
    };

    const handleVolumeChange = (e) => {
        dispatch({ 
            type: PLAYER.ADJUST_VOLUME,
            payload: { volume: e.target.value }
        });
        audioRef.current.volume = e.target.value;
    };

    const handleChooseSong = (song) => {
        dispatch({ type: PLAYER.SET_SONG, payload: { song } })
    };

    const currentSong = songs[state.currentSongIndex];
    const isLoop = state.loop;
    const isShuffle = state.shuffle;

    return {
        ...state,
        currentSong,
        isLoop,
        isShuffle,
        audioRef,
        onPlay: handlePlay,
        onPause: handlePause,
        onNext: handleNext,
        onPrev: handlePrev,
        onTimeUpdate: handleTimeUpdate,
        onLoop: toggleLoop,
        onShuffle: toggleShuffle,
        onEnded: handleEnded,
        onMouseDown: handleMouseDown,
        onMouseUp: handleMouseUp,
        onCurrentTimeChange: handleCurrentTimeChange,
        onVolumeChange: handleVolumeChange,
        onChooseSong: handleChooseSong
    };
};