import axios from 'axios';

import { getUsers,getUserImg,addUser } from '../reducers/userReducer';


export const postUserMidd = ({ dispatch, getState }) => next => action => {

    // if (action.type === 'GET_USERS') {
    //     // Perform the asynchronous operation
    //     axios.get('http://localhost:8585/api/users/all/firstname', action.payload)
    //         .then((response) => {
    //             console.log('response.data', response.data);
    //             if (response.status == 200)
    //                 dispatch(getUsers(response.data));
    //             else if (response.status == 201) {
    //                 //מייל קיים סיסמא לא
    //             }
    //         })
    //         .catch((error) => {
    //             console.error(error);

    //         });
    // }
    // else if (action.type === 'POST_USER_UP') {
    //     axios.post('http://localhost:8585/api/users/all/firstname', action.payload.user)
    //         .then((response) => {

    //             console.log('response.data', response.data);

    //             dispatch(postUser(response.data));
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    if (action.type === 'GET_USER_IMAGE') {
        // Perform the asynchronous operation
        axios.get(`http://localhost:8585/api/users/get/${action.id}/profileImg`, action.payload)
            .then((response) => {
                console.log('response.data', response.data);
                if (response.status == 200)
                    dispatch(getUserImg(response.data));
                else if (response.status == 201) {
                    //מייל קיים סיסמא לא
                }
            })
            .catch((error) => {
                console.error(error);

            });
    }
    if (action.type === 'LOGIN_USER') {
        // Perform the asynchronous operation
        axios.get(`http://localhost:8585/api/users/all`, action.payload)
            .then((response) => {
                console.log('response.data', response.data);
                if (response.status == 200)
                    dispatch(getUsers(response.data));
                else if (response.status == 201) {
                    //מייל קיים סיסמא לא
                }
            })
            .catch((error) => {
                console.error(error);

            });
    }
    if (action.type === 'SIGN_UP') {
        
        // Perform the asynchronous operation
        axios.post(`http://localhost:8585/api/users/createUser`, action.payload)
        .then((response) => {
            console.log('response.data', response.data);
            dispatch(addUser(response.data));
        })
        .catch((error) => {
            console.error('Error fetching user:', error);
        });
    }
    return next(action);
};