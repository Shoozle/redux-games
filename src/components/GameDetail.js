import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import styled from "styled-components"


const GameDetail = () => {
    const { screen, game } = useSelector(state => state.detail)

    return (
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                    </div>
                    <div className="info">
                        <h3>Platforms</h3>
                        <div className="platforms">
                            {game.platforms.map(data => (
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.name} />
                </div>
                <div className="description">
                    <p>{game.description}</p>
                </div>
                <div className="gallery">
                    {screen.results.map(screen => (
                        <img key={screen.id} src={screen.image} alt="game" />
                    ))}
                </div>
            </Detail>
        </CardShadow>
    )
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    top: 0;
    left: 0;
    position: fixed;
    background: rgba(0, 0, 0, .1);
    &::-webkit-scrollbar {
        width:.5rem;
    }
    &::-webkit-scrollbar-thumb {
        background-color: #c89efa;
    }
    &::-webkit-scrollbar {
        width:.5rem;
    }
    &::-webkit-scrollbar-track {
         background-color: white;
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: #eee;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`

export default GameDetail