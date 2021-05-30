import styled from 'styled-components'
import {motion} from 'framer-motion'
import logo from '../img/logo.svg'
import {fetchSearch} from '../actions/gamesAction'
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';


function Nav(props) {
    const [data,setData] = useState("")
    const dispatch = useDispatch()

    const changeHandler = ({target}) =>{
        setData(target.value)
    }

    const submitHandler = (e) =>{
        e.preventDefault()
        dispatch(fetchSearch(data))
        setData("")
    }
    const clearHandler = () =>{
        dispatch({type:"CLEAR_SEARCH"})
    } 
    return (
        <StyledNav>
           <Logo onClick={clearHandler}>
               <img src={logo} alt="logo" />
               <h1>Ignite</h1>
            </Logo> 
            <form onSubmit={submitHandler} className="search">
                <input value={data} onChange={changeHandler} type="text" />
                <button type="submit">Search</button>
            </form>
        </StyledNav>
    );
}

const StyledNav = styled(motion.div)`
    padding :2rem 5rem;
    text-align: center;
    input{
        width:30%;
        font: 1.3rem;
        padding:0.5rem;
        border:none;
        margin-top: 1rem;
        box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
        &:focus{
            outline: none;
        }
    }
    button{
        font-size: 1rem;
        background: #ff7676;
        border: none;
        padding: 0.5rem 1.2rem ;
        color:white;
        cursor: pointer;
    }
`
const Logo = styled(motion.div)`
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    cursor: pointer;
    img{
        width:1.8rem;
        height:1.8rem;
    }
    h1{
        font-size: 2rem;
    }
`

export default Nav;

