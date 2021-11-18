import axios from "axios";
import { gameDetailsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
    //Fetch url from api with id we pass in here
    const detailData = await axios.get(gameDetailsURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data
        }
    })
}