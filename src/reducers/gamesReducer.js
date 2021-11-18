const initialState = {
    popular : [],
    upcoming : [],
    newGames : [],
    searched: []
}

const gamesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_GAMES": 
            return {...state, 
                popular: action.payload.popular, 
                upcoming: action.payload.upcoming, 
                newGames: action.payload.newGames
            };
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