import styled from "styled-components";
import { motion } from "framer-motion";

const Nav = () => {
    return (
        <StyledNav>
            <Logo>
            <h1>Ignite</h1>
            </Logo>
            <div className="search">
                    <input type="text" />
                    <button>Search</button>
            </div>
        </StyledNav>
    )          
}

const StyledNav = styled(motion.nav)`
    text-align: center;
    margin-top: 2rem;
    input {
        width: 30%;
        max-width: 200rem;
        font-size: 1rem;
        padding: 0.5rem 1rem;
        margin-top: 1rem;
        box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.2);
        outline: none;
        border: none;
        font-weight: bold;
    }
    button {
        font-size: 1rem;
        padding: 0.5rem 1.5rem;
        border: none;
        background: darkgray;
    }
`

const Logo = styled(motion.nav)`
    color: white;
    cursor: pointer;
`

export default Nav;