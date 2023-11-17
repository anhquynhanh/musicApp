export const formatTime = (time) => {
    const rounded = Math.ceil(time);
    const seconds = rounded % 60;
    const minutes = ((rounded - seconds) / 60) % 60;

    const formattedSeconds = String(seconds).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
};