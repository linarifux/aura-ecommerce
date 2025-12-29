import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state, action) => {
      state.isCartOpen = action.payload === undefined ? !state.isCartOpen : action.payload;
    },

    addToCart: (state, action) => {
      const newItem = action.payload;
      
      // Create a unique ID for this specific variation
      // If a color is selected, the ID becomes "productId-colorCode" (e.g., "aura-one-#0a0a0a")
      // If no color, it stays as the original ID
      const variantId = newItem.selectedColor 
        ? `${newItem.id}-${newItem.selectedColor}` 
        : newItem.id;

      // Check if this specific variant already exists
      const existingItem = state.items.find((item) => item.variantId === variantId);

      state.totalQuantity++;
      state.totalPrice += newItem.price;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,       // Original Product ID (for links)
          variantId: variantId, // Unique Cart ID (for logic)
          name: newItem.name,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          selectedColor: newItem.selectedColor, // Store the color
        });
      } else {
        existingItem.quantity++;
      }
    },

    removeFromCart: (state, action) => {
      // Expects the 'variantId' to be passed as payload
      const variantId = action.payload;
      const existingItem = state.items.find((item) => item.variantId === variantId);

      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
        state.items = state.items.filter((item) => item.variantId !== variantId);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { toggleCart, addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;