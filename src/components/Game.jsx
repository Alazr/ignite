import React from 'react';
import styled from 'styled-components'
import {motion} from 'framer-motion'
import {useDispatch} from 'react-redux'
import {loadGameDetail} from '../actions/detailAction'
import {Link} from 'react-router-dom'
import {smallImage} from '../util'

function Game({game}) {
    
    const dispatch = useDispatch()
    const stringPathId = game.id.toString()
    const clickHandler = () =>{
        document.body.style.overflow = "hidden"
        dispatch(loadGameDetail(game.id))
    }
    const gImage = game.background_image
    return (
        <>
        {gImage && (<StyledGame  onClick={clickHandler}>
            <Link to={`/game/${game.id}`}>
           <h3>{game.name}</h3> 
           <p>{game.released}</p>
           <img  src={smallImage(gImage,640)} alt={game.name} />
            </Link>
        </StyledGame>)}
        </>
    );
}

const StyledGame = styled(motion.div)`
    border-radius: 1rem;
    text-align: center;
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
    overflow:hidden;
    img{
        width:100%;
        height:30vh;
        object-fit:cover;
    }
`

export default Game;