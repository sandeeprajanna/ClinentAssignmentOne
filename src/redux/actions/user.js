import axios from 'axios'
import { GET_USER_REPOSITORIES } from '../Constants';

export const getUserRepoData = (userRepoData) => {
    return {
        type: GET_USER_REPOSITORIES,
        payload: {
            userRepoData,
            repoData: true
        }
    }
}

export const getUserDataApi = () => {
    return (dispatch) => {
        axios.get(`https://api.github.com/users/supreetsingh247/repos`)
            .then(res => {
                dispatch(getUserRepoData(res.data))
            })
            .catch(err => {
                console.log(' Error in getUserDataApi', err)
            })
    }
}