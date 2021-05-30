import React,{useEffect} from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {loadGames} from '../actions/gamesAction'
import GameLists from '../Shared/GameLists';
import GameDetail from '../components/GameDetail'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'


function Home(props) {
    const dispatch = useDispatch()
    const {pathname} = useLocation() 
    const pathId = pathname.split("/")[2]
    useEffect(()=>{
      dispatch(loadGames())
    },[])

    const {popular,upcoming,newGames,searched} = useSelector(state=>state.game)
    
    return (
        <GameList>
           {pathId && ( <GameDetail pathId={pathId}/>)}
           {searched.length > 0 && ( <GameLists title="Searched" data={searched}/>)}
            <GameLists title="Upcoming" data={upcoming}/>
            <GameLists title="Popular" data={popular}/>
            <GameLists title="New" data={newGames}/>
        
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 3rem;
    h2{
        padding: 3rem;
    }
`

export default Home;