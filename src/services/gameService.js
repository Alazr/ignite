import date from './time'
import config from './config.json'
import https from '../services/httpServices'

const gamesEndpoint = `${config.baseUrl}/games?key=${config.apiKey}`

const popularGame = `${gamesEndpoint}&dates=${date.lastYear},${date.currentDate}&ordering=-rating&page_size=10`
const upcomingGames = `${gamesEndpoint}&dates=${date.currentDate},${date.nextYear}&ordering=-added&page_size=10`
const newGames = `${gamesEndpoint}&dates=${date.lastYear},${date.currentDate}&ordering=-released&page_size=5`



const getPopularGame= ()=>{
    return https.get(popularGame)
}

const getUpcomingGames=()=>{
    return https.get(upcomingGames)
}

const getNewGames = () =>{
    return https.get(newGames)
}

const getGameDetail = id =>{
    return https.get(`${config.baseUrl}/games/${id}?key=${config.apiKey}`)
}
const getGameScreenshot = id =>{
    return https.get(`${config.baseUrl}/games/${id}/screenshots?key=${config.apiKey}`)
}

const getSearchedGame = gameName =>{
    return https.get(`${gamesEndpoint}&search=${gameName}&page_size=10`)
}

export default {
    getPopularGame, 
    getUpcomingGames,
    getNewGames,
    getGameDetail,
    getGameScreenshot,
    getSearchedGame
}