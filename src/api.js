require('dotenv').config();

const base_url = `https://api.rawg.io/api/games`;
const base_key_url = `?key=${process.env.REACT_APP_RAWG_API}`

//March is 3 but comes 03
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1;
    if (month < 10) {
        return `0${month}`;
    } else {
        return month;
    }
}

const getCurrentDay = () => {
    const day = new Date().getDate();
    if (day < 10) {
        return `0${day}`;
    } else {
        return day;
    }
}

const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${base_key_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${base_key_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${base_key_url}${new_games}`;


//GAME DETAILS

export const gameDetailsURL = (game_id) => `${base_url}/${game_id}${base_key_url}`

//console.log(base_url);