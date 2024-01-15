import axios from 'axios';
//מיבאים את הפעולה-פונקציה של קבלת המתכונים מתוך הרדוסר 
// כדי שיהיה אפשר לעדכן את הסטייט הגלובלי עם רשימת המתכונים שמגיעה מהשרת
import { setPosts} from '../reducers/postReducer';

export const getPostsMidd = ({ dispatch, getState }) => next => action => {

    if (action.type === 'GET_POSTS') {
        // Perform the asynchronous operation
        axios.get('http://localhost:8585/api/posts/all')
            .then((response) => {
                console.log('response.data', response.data);
                // Dispatch an action with the response data
                dispatch(setPosts(response.data));
            })
            .catch((error) => {
                console.error('Error fetching ads:', error);
                // Handle the error as needed
            });
    }
    else if (action.type === 'GET_ADS_BY_ID') {
        axios.get(`http://localhost:8585/api/ads/getAdsById/${action.id}`)
            .then((response) => {
                console.log('response.data', response.data);
                // Dispatch an action with the response data
                dispatch(getAdsById(response.data,));
            })
            .catch((error) => {
                console.error('Error fetching ads:', error);
                // Handle the error as needed
            });
    }
    // Continue the action through the middleware chain
    return next(action);
};

// export const addAdMidd = ({ dispatch, getState }) => next => action => {

//     if (action.type === 'ADD_AD') {
//         let formDataTemp = action.payload.images
//         formDataTemp.append("ad", JSON.stringify(action.payload.formData))
//         // const tempData = JSON.stringify(action.payload.formData)
//           console.log('newAd',action.payload);
//         // Perform the asynchronous operation
//         axios.post('http://localhost:8585/api/ads/uploadAd', formDataTemp, {
//             headers: {
//                 // "Content-Type": "multipart/form-data",
//                 "x-rapidapi-host": "file-upload8.p.rapidapi.com",
//                 "x-rapidapi-key": "your-rapidapi-key-here",
//             },
//         })
//             .then((response) => {
//                 console.log('response.data', response.data);
//                 // Dispatch an action with the response data
//                 dispatch(addAd(response.data));
//             })
//             .catch((error) => {
//                 console.error('Error fetching recipes:', error);
//                 // Handle the error as needed
//             });
//     }

    export const addPostMidd = ({ dispatch, getState }) => next => action => {

        if (action.type === 'ADD_POST') {
            const formData = new FormData();
            console.log("action.payload.image.length", action.payload.image.length);
            for (let i = 0; i < 5; i++) {
                formData.append("image", action.payload.image[i]);
            }
    
    
            formData.append("ad", new Blob([JSON.stringify(action.payload.ad)], { type: "application/json" }))
            console.log('newPost', action.payload);
            axios.post('http://localhost:8585/api/posts/uploadPost', formData)
                .then((response) => {
                    console.log('response.data', response.data);
                    dispatch(addAd(response.data));
                })
                .catch((error) => {
                    console.error('Error fetching ad:', error);
                });
            }
    

    // axios
    // .post("http://localhost:8585/api/ads/uploadAd", formData ,images,{
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //     "x-rapidapi-host": "file-upload8.p.rapidapi.com",
    //     "x-rapidapi-key": "your-rapidapi-key-here",
    //   },
    // })
    // .then((response) => {
    //   // handle the response
    //   console.log(response);
    // })
    // .catch((error) => {
    //   // handle errors
    //   console.log(error);
    // });
    // Continue the action through the middleware chain
    return next(action);
};
