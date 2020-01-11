/*
 * action types
 */
export const SET_ALBUMS = 'SET_ALBUMS';
export const SET_TRACKS_VISIBILITY = 'SET_TRACKS_VISIBILITY';
export const SET_IS_COVER_ZOOM = 'SET_IS_COVER_ZOOM';
export const SET_LYRICS = 'SET_LYRICS';

/*
 * action creators
 */
export const setAlbums = (albums) => ({
    type: SET_ALBUMS,
    albums,
});

export const setTracksVisibility = (index) => ({
    type: SET_TRACKS_VISIBILITY,
    index,
});

export const setIsCoverZoom = (index) => ({
    type: SET_IS_COVER_ZOOM,
    index,
});

export const setLyrics = (name, lyric) => ({
    type: SET_LYRICS,
    name,
    lyric,
});
