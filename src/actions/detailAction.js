import games from '../services/gameService'



export const loadGameDetail = id => async (dispatch) =>{
    dispatch({
        type:"LOADING_DETAIL"
    })
    const {data} = await games.getGameDetail(id)
    const {data:screenshotsData} = await games.getGameScreenshot(id)
    dispatch({
        type:"FETCH_DETAIL",
        payload:{
            game:data,
            screen:screenshotsData
        }
    })
}