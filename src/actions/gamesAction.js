import games from '../services/gameService'


export const loadGames = () => async (dispatch) =>{
    const {data:popularData} = await games.getPopularGame()
    const {data:upcomingData} = await games.getUpcomingGames()
    const {data:newData} = await games.getNewGames()
    dispatch({
        type:"FETCH_GAMES",
        payload:{
            popular:popularData.results,
            upcoming:upcomingData.results,
            new:newData.results
            
        }
    })
}

export const fetchSearch = (game_name) => async (dispatch) =>{
    const {data} = await games.getSearchedGame(game_name)
    console.log(data.results)
    dispatch({
        type:"FETCH_SEARCHED",
        payload:{
            searched:data.results
        }
    })
}
