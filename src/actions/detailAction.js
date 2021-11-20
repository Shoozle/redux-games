import axios from "axios";
import { gameDetailsURL, gameImagesURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
    //Fetch url from api with id we pass in here

    dispatch({
        type: "LOADING_DETAIL"
    })

    const detailData = await axios.get(gameDetailsURL(id))
    const screenshotData = await axios.get(gameImagesURL(id))

    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen: screenshotData.data
        }
    })
}