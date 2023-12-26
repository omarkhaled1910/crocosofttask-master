export const youtubeRegExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;

export const getYouTubeVideoId = (url) => {
    if (!url.includes('youtube.com/') && !url.includes('youtu.be/')) return '';
    const match = url.match(youtubeRegExp);
    return match && match[7].length === 11 ? match[7] : '';
};
