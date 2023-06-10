import { configureStore } from '@reduxjs/toolkit'
import NotesSlice from './api/NotesSlice'
 const store  =  configureStore({

    reducer:{
        note:NotesSlice
    },

})
export default store;