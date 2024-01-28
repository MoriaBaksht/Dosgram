//לא לשכוח להתקין את הספריות
// npm install @reduxjs/toolkit react-redux
import { configureStore } from '@reduxjs/toolkit'

//מיבאים את הרדוסר
//אם יש כמה רדוסרים מיבאים כאן את כולם
// import adsReducer from './reducers/adsReducer'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'

//מיבאים את המידלוור - כמובן שאם יש כמה מיבאים את כולם כאן
//אם יש ממש הרבה אפשר ליצור בקובץ אחר משתנה גדול של כל המידלוור (כמו ברדוסר) ולייבא אותו לכאן
import { getPostsMidd } from './middleware/postmiddleware'

import { postUserMidd } from './middleware/usermiddleware'
import {postCommentMidd} from './middleware/commentmiddleware'
import commentReducer from './reducers/commentReducer'


//יוצרים אובייקט סטור שהוא מכיל את כל הרידקס
export const store = configureStore({
    //יוצרים משתנה רדוסר שהוא מכיל את כל הרדוסרים
    reducer: {
        post: postReducer,
        user:userReducer,
        comment:commentReducer
        //כאן מוסיפים את הרדוסרים הנוספים לדוגמה
        //tip: tipReducer
    },
    //מוסיפים משתנה מידלוור ומכניסים אליו את המידלוורים שיצרנו
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({serializableCheck:false}),getPostsMidd,postUserMidd,postCommentMidd],

})