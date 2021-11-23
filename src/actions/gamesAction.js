import axios from "axios";
import { popularGamesURL, newGamesURL, upcomingGamesURL, SearchGameURL } from '../api';

export const loadGames = () => async (dispatch) => {
    //returns string to make api request
    const popularData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());

    //dispatches an action of type fetch_games and the payload data into the popular array state
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newGamesData.data.results
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) => {
    const searchGames = await axios.get(SearchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED_GAMES",
        payload: {
            searched: searchGames.data.results
        }
    })
}
