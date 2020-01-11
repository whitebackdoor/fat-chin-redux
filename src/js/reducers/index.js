import * as actionTypes from '../actions';

const initialState = {
    albums: [],
    isCoverZoom: false,
    areLyrics: false,
    lyrics: {
        name: '',
        lyric: '',
    },
};

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    let newAlbums = {};

    switch (action.type) {
        case actionTypes.SET_ALBUMS:
            newState.albums = action.albums;
            break;
        case actionTypes.SET_TRACKS_VISIBILITY:
            newAlbums = newState.albums.map((album, albumIndex) => {
                let { tracksVisible } = album;
                tracksVisible = albumIndex === action.index ? !tracksVisible : tracksVisible;
                const newAlbum = { ...album, tracksVisible };

                return newAlbum;
            });

            newState.albums = newAlbums;
            break;
        case actionTypes.SET_IS_COVER_ZOOM:
            if (action.index === undefined) {
                newState.isCoverZoom = false;
                break;
            }

            newAlbums = newState.albums.map((album, albumIndex) => {
                let { coverZoom } = album;
                coverZoom = albumIndex === action.index;
                const newAlbum = { ...album, coverZoom };

                return newAlbum;
            });

            newState.albums = newAlbums;
            newState.isCoverZoom = true;
            break;
        case actionTypes.SET_LYRICS:
            if (action.name === undefined) {
                newState.areLyrics = false;
                break;
            }

            newState.lyrics.name = action.name;
            newState.lyrics.text = action.lyric;
            newState.areLyrics = true;

            break;
        default:
            // do nothing
    }

    return newState;
};

export default reducer;
