const initialState = {
    popular : [],
    newGames : [],
    upcoming : [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES": 
            return {...state, popular: action.payload.popular};
        default:
            return {...state};
    }
}

//Action creator
const fetchGames = (userDate) => {
    return {
        type: 'FETCH_GAMES',
        payload: userDate
    }
}

export default gamesReducer;