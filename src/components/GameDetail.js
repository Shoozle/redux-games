import { motion } from "framer-motion"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { useNavigate } from "react-router"
import { smallImage } from "../util"

//Images
import playstation from '../img/playstation.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import xbox from '../img/xbox.svg';
import steam from '../img/steam.svg';
import star from '../img/star.svg';
import starFilled from '../img/star-filled.svg';

const GameDetail = ({ pathId }) => {
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

    const getPlatform = (platform) => {
        switch (platform) {
            case "PlayStation 4":
                return playstation;
            case "Xbox One":
                return xbox;
            case "Nintendo Switch":
                return nintendo;
            case "Xbox Series S/X":
                return xbox;
            case "PlayStation 5":
                return playstation;
            case "PC":
                return steam;
            default:
                return apple;
        }
    }

    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);

        for (let i=0; i<5; i++) {
            if (i <= rating) {
                stars.push(<img alt="star" key={i} src={starFilled}/>)
            } else {
                stars.push(<img alt="star" key={i} src={star}/>)
            }
        }
        return stars;
    }


    return (
        <>
            {!isLoading && (
                <CardShadow className="shadow" onClick={exitDetailHandler}>
                    <Detail layoutId={numId}>
                        <Stats>
                            <div className="rating">
                                <motion.h3 layoutId={`title ${numId}`}>{game.name}</motion.h3>
                                <p>{game.rating}</p>
                                {getStars()}
                            </div>
                            <Info>
                                <h3>Platforms</h3>
                                <Platforms>
                                    {game.platforms.map(data => (
                                        <img src={getPlatform(data.platform.name)} alt={data.platform.name} key={data.platform.id} />
                                    ))}
                                </Platforms>
                            </Info>
                        </Stats>
                        <Media>
                            <motion.img layoutId={`image ${numId}`} src={smallImage(game.background_image, 1280)} alt={game.name} />
                        </Media>
                        <Description>
                            <p>{game.description_raw}</p>
                        </Description>
                        <Gallery>
                            {screen.results.map(screen => (
                                <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game" />
                            ))}
                        </Gallery>
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
    background: rgba(0, 0, 0, .3);
    z-index: 8;
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
    z-index: 10;
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        display: inline-block;
    }
`

const Info = styled(motion.div)`
    text-align: center;
`

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        width: 2.5rem;
        margin: 0 1rem;
        fill: darkgray;
        stroke: darkgray;
    }
`

const Media = styled(motion.div)`
    margin: 5rem;
    img {
        width: 100%;
    }
`

const Description = styled(motion.div)`
    margin: 2.5rem 0;
`

const Gallery = styled(motion.div)`
    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`

export default GameDetail