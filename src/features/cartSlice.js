import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []  ,
  //cart items array
  totalQuantity: 0,
  quantity:0 // total quantity of items
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }

      state.totalQuantity += 1;
    },

    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          state.items = state.items.filter(item => item.id !== action.payload);
          state.totalQuantity -= 1;
        }
      }
    },
    removeItem:(state,action)=>{
      state.items = state.items.filter((value)=>{
           return  value.id !== action.payload.id
      })   
    },
    
    removeAll: (state)=>{
      state.items = []
    }
  
  } 
})


export const {addItem, incrementQuantity, decrementQuantity, removeAll, removeItem} = cartSlice.actions;

export default cartSlice.reducer;