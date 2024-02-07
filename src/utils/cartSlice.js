import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      //pop remove from end
      state.items.pop();
    },
    clearCart: (state) => {
      // state=[] ,here cannot do this because this changed only local not in Storage.

      // 1 way 1
      // state.items.length = 0;

      // or way 2
return {items:[]}  // This [] array replaced the original cart arra

      // or you can return [] It also clear cart no need of state parameter.It modify the original cart array.
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
