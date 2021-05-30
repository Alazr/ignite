import React from 'react';
import  Game from '../components/Game'
import styled from 'styled-components';
import {motion} from 'framer-motion'

function GameLists({title,data}) {
    return (
        <>
          <h2>{title} Games</h2>
            <Games>
            {
                data.map(game=>(
                    <Game key={game.id} game={game}/>
                ))
            }
            </Games>  
        </>
    );
}

const Games = styled(motion.div)`
    min-height:80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(270px,1fr));
    grid-column-gap: 2rem;
    grid-row-gap:  4rem;
`

export default GameLists;