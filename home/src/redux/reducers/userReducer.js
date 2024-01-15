import { createSlice } from '@reduxjs/toolkit';

//אתחול הסטייט הגלובלי במשתנים ריקים שאת ערכם נקבל מהשרת ונכניס לסטייט בפונקציה של הוספת מודעה
const initialState = {
    listUsers: [],
    image: "",
    user:{}
    // listAds1: [],
    // listAds2: [],
    // listAds3: [],
    // listAds4: [],
    // listAds5: [],
    // listAds6: [],
    // listAds7: [],
    // listAds8: [],

}

//יצירת רדוסר למודעות
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //הפונקציה מקבלת רשימה של כל המודעות ומכניסה אותם למשתנה מודעות הקיים בסטייט הגלובלי
        getUsers: (state, action) => {
            state.user =  (action.payload);
            // state.listRecipes.push(action.payload);
        },
        getUserImg: (state, action) => {
            state.image = (action.payload);
            // state.listRecipes.push(action.payload);
        },
        // getAdsById1: (state, action) => {
        //     state.listAds1 = (action.payload);    
        // },
        // getAdsById2: (state, action) => {
        //     state.listAds2 = (action.payload);    
        // },
        // getAdsById3: (state, action) => {
        //     state.listAds3 = (action.payload);    
        // },
        // getAdsById4: (state, action) => {
        //     state.listAds4 = (action.payload);    
        // },
        // getAdsById5: (state, action) => {
        //     state.listAds5 = (action.payload);    
        // },
        // getAdsById6: (state, action) => {
        //     state.listAds6 = (action.payload);    
        // },
        // getAdsById7: (state, action) => {
        //     state.listAds7 = (action.payload);    
        // },
        // getAdsById8: (state, action) => {
        //     state.listAds8 = (action.payload);    
        // },
        // הפונקציה שמכניסה מודעה למשתנה מודעות הקיים בסטייט הגלובלי
        addUser: (state, action) => {
            state.listUsers.push(action.payload);
        },
        // כאן מוסיפים פונקציות נוספות לעידכון הסטייט לדוגמה updateRecipe
    },
})
// Action creators are generated for each case reducer function
//מיצאים את הפעולות - פונקציות שכתבנו ברדוסר
export const { getUsers, addUser,getUserImg } = UserSlice.actions
//מיצאים את הרדוסר
export default UserSlice.reducer
