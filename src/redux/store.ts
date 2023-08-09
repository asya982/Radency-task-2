import { configureStore } from "@reduxjs/toolkit";
import noteList  from "./reducers/notesReducer";

export const store = configureStore({
  reducer: {
    noteList
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
