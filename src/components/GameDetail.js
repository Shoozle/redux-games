import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { useNavigate } from "react-router"
import { smallImage } from "../util"

const GameDetail = ({pathId}) => {
    const { screen, game, isLoading } = useSelector(state => state.detail)

    //Path id is string when passed in, convert to int
    const numId = +pathId;

    const navigate = useNavigate();

    const exitDetailHandler = (e) => {
        const element = e.target;
        if (element.classList.contains('shadow')) {
            document.body.style.overflow = 'auto';

            navigate('/');
        }
    }

    console.log('gamedetail', typeof pathId)

    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail >
                        <Stats>
                            <div className="rating">
                                <h3>{game.name}</h3>
                                <p>Rating: {game.rating}</p>
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <h3 key={data.platform.id}>{data.platform.name}</h3>
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <img src={smallImage(game.background_image, 1280)} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <div className="gallery">
                            {screen.results.map(screen => (
                                <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game" />
                            ))}
                        </div>
                    </Detail>
                </CardShadow>
            )}
        </>
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
    padding: 2rem 5rem;
    background: #eee;
    position: absolute;
    left: 10%;
    color: black;
    img{
        width: 100%;
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin: 5rem;
    img {
        width: 100%;
        height: 60vh;
        object-fit: cover;
    }
`

const Description = styled(motion.div)`
    margin: 2.5rem 0;
`

export default GameDetail