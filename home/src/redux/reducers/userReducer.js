import { createSlice } from '@reduxjs/toolkit';

//אתחול הסטייט הגלובלי במשתנים ריקים שאת ערכם נקבל מהשרת ונכניס לסטייט בפונקציה של הוספת מודעה
const initialState = {
    image: "",
    currentUser:{},
    userById:{}
}

//יצירת רדוסר למודעות
export const UserSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        //הפונקציה מקבלת רשימה של כל המודעות ומכניסה אותם למשתנה מודעות הקיים בסטייט הגלובלי
        getUsers: (state, action) => {
            state.user =  (action.payload);
        },
        getUserById: (state, action) => {
            state.userById = action.payload
        },
        getUserImg: (state, action) => {
            state.image = (action.payload);
        },
       
        // הפונקציה שמכניסה מודעה למשתנה מודעות הקיים בסטייט הגלובלי
        addUser: (state, action) => {
            state.currentUser=(action.payload);
        },
        // כאן מוסיפים פונקציות נוספות לעידכון הסטייט לדוגמה updateRecipe
    },
})
// Action creators are generated for each case reducer function
//מיצאים את הפעולות - פונקציות שכתבנו ברדוסר
export const { getUsers, addUser,getUserImg,getUserById } = UserSlice.actions
//מיצאים את הרדוסר
export default UserSlice.reducer
