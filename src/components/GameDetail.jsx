import React from 'react';
import {useSelector} from 'react-redux'
import styled from 'styled-components';
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'
import {smallImage} from '../util'

import apple from '../img/apple.svg'
import gamePad from '../img/gamepad.svg'
import nintendo from '../img/nintendo.svg'
import playstation from '../img/playstation.svg'
import steam from '../img/steam.svg'
import xbox from '../img/xbox.svg'

import fullStar from '../img/star-full.png'
import emptyStar from '../img/star-empty.png'

function GameDetail({pathId}) {

    const {game,screen,isLoading} = useSelector(state=>state.gameDetail)
    const history = useHistory()
    const exitCardHandler = ({target}) =>{
       if(target.classList.contains("shadow")){
           document.body.style.overflow="auto";
           history.push("/")
       }
    }
    const getStar = () =>{
        const stars = []
        const rating = Math.floor(game.rating)
        for (let i =1; i <=5; i++ ){
            if(i <= rating){
                stars.push(<img src={fullStar} alt="star" key={i}/>)
            }else{
                stars.push(<img src={emptyStar} alt="star" key={i}/>)
            }
        }
        return stars
    }
    const getPlatform = (platform) =>{
        switch(platform){
            case "playStation 4":
            return playstation
            case "Xbox One":
                return xbox
            case "PC":
                return steam
            case "Nintendo Switch":
                return nintendo
            case "iOs":
                return apple
            default:
                return gamePad
        }
    }
    return (
        <>
   {!isLoading && (     
        <CardShadow className="shadow" onClick={exitCardHandler}>
            <Detail >
                <Stats>
                    <div className="rating">
                        <h3>{game.name}</h3>
                        <p>Rating: {game.rating}</p>
                        {
                            getStar()
                        }
                    </div>
                    <Info>
                        <h3>platforms</h3>
                        <Platforms>
                        {
                            game.platforms.map(data=>(
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name}/>
                            ))
                        }
                      </Platforms>
                    </Info>
                </Stats>
                <Media>
                   <img src={smallImage(game.background_image,640)} alt="image" /> 
                </Media> 
                <Description>
                    <p>{game.description}</p>
                </Description>
                <div className="gallery">
                    {
                        screen.results.map(screen=>(
                            <img key={screen.id} src={smallImage(screen.image,640)} alt="screenshot of the game" />
                        ))
                    }
                </div>
            </Detail>
        </CardShadow>)}
        </>
    );
}

const CardShadow = styled(motion.div)`
    width:100%;
    min-height:100vh;
    background: rgba(0,0,0,0.5);
    overflow-y: scroll;
    position: fixed;
    top:0;
    left:0;
    &::-webkit-scrollbar{
        width:0.3rem;
    }

    &::-webkit-scrollbar-thumb{
        background: #ff7676;
    }
    &::-webkit-scrollbar-track{
        background: white;
    }
`
const Detail = styled(motion.div)`
    background: white;
    width:80%;
    border-radius:1rem;
    padding:2rem 5rem;
    position: absolute;
    left:10%;
    z-index:2;
    color: #000;
    img{
        width:100%;
    }
`
const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width:1.2rem;
        height:1.2rem;
        display: inline;
    }
`
const Info = styled(motion.div)`
    text-align:center
`
const Platforms = styled(motion.div)`
display:flex;
    justify-content: space-evenly;
    img{
        margin-left: 2rem;
        width:1.5rem;
        height:1.5rem
    }
`
const Media = styled(motion.div)`
    margin-top: 3rem;
    img{
        width:100%;
    }
`
const Description = styled(motion.div)`
    margin: 4rem 0;
`



export default GameDetail;