const initialState = {game:{},screen:{},isLoading:true}

const gameDetailReducer = (state=initialState,action) =>{
    switch (action.type) {
        case "FETCH_DETAIL":
            return {...state,game:action.payload.game,screen:action.payload.screen,isLoading:false}
            break;
        case "LOADING_DETAIL":
            return {...state,isLoading:true}
        default:
            return {...state}
    }
}


export default gameDetailReducer;