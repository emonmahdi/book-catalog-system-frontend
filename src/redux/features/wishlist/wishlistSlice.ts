import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../../../types/globalTypes";

interface IWishlist {
  books: IBooks[];
}

const initialState: IWishlist = {
  books: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action: PayloadAction<IBooks>) => {
      state.books.push(action.payload);
    },
  },
});

export const { addToWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
