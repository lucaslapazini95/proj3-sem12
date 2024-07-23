import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    // Adicione seus reducers aqui
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
