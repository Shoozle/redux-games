import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";

import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";

const Home = () => {

    const dispatch = useDispatch(); 

    useEffect(() => {
      dispatch(loadGames())
    }, [dispatch])

    //get data back
    const {popular, newGames, upcoming} = useSelector(state => state.games)
    

    return (
        <GameList>
            <Games>
                {upcoming.map(game => (
                    <Game name={game.name} released={game.released} key={game.id} id={game.id} image={game.background_image}/>
                ))}
            </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`

`

const Games = styled(motion.div)`

`


export default Home;