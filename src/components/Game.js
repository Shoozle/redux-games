
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";
import { popUp } from "../animations";

const Game = ({ name, released, image, id }) => {

    const dispatch = useDispatch();
    const loadDetailHandler = () => {
        document.body.style.overflow = "hidden";
        dispatch(loadDetail(id))
    }

    return (
        <StyledGame variants={popUp} initial="hidden" animate="show" layoutId={id} onClick={loadDetailHandler}>
            <Link to={`/game/${id}`}>
                <motion.h3 layoutId={`title ${id}`}>{name}</motion.h3>
                <p>{released}</p>
                <motion.img layoutId={`image ${id}`} src={smallImage(image, 640)} alt={name} />
            </Link>
        </StyledGame>
    )
}

const StyledGame = styled(motion.div)`
    min-height: 22rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, .1);
    overflow: hidden;
    text-align: center;
    border-radius: .5rem .5rem 0 0;
    background-color: #eee;
    img {
        width: 100%;
        height: 18rem;
        object-fit: cover;
    }
`

export default Game;