
import styled from "styled-components";
import { motion } from "framer-motion";

const Game = ({name, released, image}) => {

    return (
        <StyledGame>
            <h3>{name}</h3>
            <p>{released}</p>
            <img src={image} alt={name} />
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 30vh;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, .1);
    overflow: hidden;
    text-align: center;
    border-radius: .5rem .5rem 0 0;
    background-color: #eee;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: 50%;
        max-height: 22rem;
        vertical-align: bottom;
    }
`

export default Game;