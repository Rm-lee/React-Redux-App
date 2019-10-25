import { 
 GET_LOCATION_START,
 GET_LOCATION_SUCCESS,
 GET_LOCATION_ERROR
} from "../actions/weather"

const initialState = {
 isLoading: false,
 weatherData: null,
 error: null
}

export function reducer(state = initialState,action) {
 switch(action.type) {
  case GET_LOCATION_START:
   return{
    ...state,
    isLoading: true
   }
   case GET_LOCATION_SUCCESS:
    return{
     ...state,
     weatherData: action.payload,
     isLoading: false
    }

   case GET_LOCATION_ERROR:
    return {
     ...state,
     error: action.payload,
     isLoading: false
    }
   default:
    return state
 }
}