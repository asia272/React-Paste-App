import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes: localStorage.getItem("pastes")
    ? JSON.parse(localStorage.getItem("pastes"))
    : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      let newPast = action.payload;
      state.pastes.push(newPast); 
      localStorage.setItem("pastes", JSON.stringify(state.pastes));
      toast('past added')
    },
    deleteToPaste: (state, action) => {
      let id = action.payload;
      state.pastes = state.pastes.filter((paste)=> paste.id !== id )
      localStorage.setItem("pastes",JSON.stringify(state.pastes))
    },
    updateToPaste: (state, action) => {
      let updatePaste = action.payload;
     let pasteIndex =  state.pastes.findIndex((paste)=> paste.id === updatePaste.id)

     state.pastes[pasteIndex] = updatePaste;
     toast.success('paste successfully Edit')
    },
    resetAllPastes: (state, action) => {

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPaste, deleteToPaste, updateToPaste, resetAllPastes } = pasteSlice.actions

export default pasteSlice.reducer