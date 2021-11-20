
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";


const Game = ({ name, released, image, id }) => {

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame layoutId={id} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <h3>{name}</h3>
                <p>{released}</p>
                <img src={smallImage(image, 640)} alt={name} />
            </Link>
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
    }
`

export default Game;