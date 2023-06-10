import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


const initialState = ({
    notes:[],
    status:'idle',
    errors:null
})  

export const fetchNOtes   = createAsyncThunk("notes/fetchNotes",async()=>{
    const response   = await axios.get("http://localhost:9001/notes")

    return response.data
})
export const addNotes   = createAsyncThunk("notes/addNotes",async(note)=>{
    
const response   = await axios.post("http://localhost:9001/create_note",note)

return response.data;
})
export const editNote   = createAsyncThunk("notes/editNote",async({id,updateNoteId})=>{
    
    const response   = await axios.put(`http://localhost:9001/update_note/${id}`,updateNoteId)
    return response.data;
    })
export const deleteNote   = createAsyncThunk("notes/deleteNote",async(id)=>{
    await  axios.delete(`http://localhost:9001/delete_note/${id}`)
 return id
})

export  const  notesSlice  = createSlice({
    name:"note",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchNOtes.pending,(state)=>{
            state.status =  "Loading";
            state.errors = null;
        })
        .addCase(fetchNOtes.fulfilled,(state,action)=>{
            state.status  = "Succeeded";
            
            state.notes = action.payload;
        })
        .addCase(fetchNOtes.rejected, (state, action)=>{
            state.status = "failed";
            state.errors  = action.error.message;
        })
        .addCase(addNotes.fulfilled,(state,action)=>{
          state.notes.push(action.payload) 
        //   state.errors =  action.error.message;
        
        })
        .addCase(deleteNote.fulfilled,(state,action)=>{
            const id  = action.payload; 
            state.notes =  state.notes.filter((note)=>note !==id); 

    
        })

        .addCase(editNote.fulfilled,(state,action)=>{
            const {id,updateNoteId} =  action.payload;
            const existingNote  = state.notes.find((note)=>note.id === Number(id))
          
            // console.log(existingNote)
            if(existingNote){
               
                existingNote.title   =  updateNoteId.title;
                existingNote.content   = updateNoteId.content;
            }
        })
  
        
        
       

    }
    
})
// console.log(notesSlice)
export default notesSlice.reducer