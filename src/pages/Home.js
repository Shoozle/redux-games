import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

import { loadGames } from "../actions/gamesAction";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router";

const Home = () => {

    const location = useLocation();
    const pathId = location.pathname.split('/')[2];
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadGames())
    }, [dispatch])

    //get data back
    const { popular, newGames, upcoming } = useSelector(state => state.games)

    return (
        <GameList>
                <AnimatePresence>
                    {pathId && <GameDetail key="game-detail" pathId={pathId}/>}
                </AnimatePresence>
                <h2>Upcoming Games</h2>
                <Games>
                    {upcoming.map(game => (
                        <Game name={game.name} released={game.released} key={game.id} id={game.id} image={game.background_image} />
                    ))}
                </Games>
                <h2>Popular Games</h2>
                <Games>
                    {popular.map(game => (
                        <Game name={game.name} released={game.released} key={game.id} id={game.id} image={game.background_image} />
                    ))}
                </Games>
                <h2>New Games</h2>
                <Games>
                    {newGames.map(game => (
                        <Game name={game.name} released={game.released} key={game.id} id={game.id} image={game.background_image} />
                    ))}
                </Games>
        </GameList>
    )
}

const GameList = styled(motion.div)`
    padding: 0 5rem;
    h2 {
        padding: 5rem 0;
    }
`

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(475px, 1fr));
    column-gap: 3rem;
    row-gap: 3.5rem;
`


export default Home;