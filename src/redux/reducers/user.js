import { GET_USER_REPOSITORIES } from '../Constants';
const initialState = {
    userRepoData: false
}

const getUserRepoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REPOSITORIES:
            return { ...state, ...action.payload }
        default:
            return state
    }
}

export default getUserRepoReducer;