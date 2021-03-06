const initialState = {
    popular: [],
    upcoming: [],
    newGames: [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES":
            return {
                ...state,
                popular: action.payload.popular,
                upcoming: action.payload.upcoming,
                newGames: action.payload.newGames
            };
        case "FETCH_SEARCHED_GAMES":
            return {
                ...state,
                searched: action.payload.searched
            }
        case "CLEAR_SEARCH":
            return {
                ...state,
                searched: []
            }
        default:
            return { ...state };
    }
}

export default gamesReducer;