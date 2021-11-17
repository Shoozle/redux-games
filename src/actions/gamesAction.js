import axios from "axios";
import { popularGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
    //returns string to make api request
    const popularData = await axios.get(popularGamesURL());
    
    //dispatches an action of type fetch_games and the payload data into the popular array state
    dispatch({
        type: "FETCH_GAMES",
        payload: {
            popular: popularData.data.results
        }
    })
}