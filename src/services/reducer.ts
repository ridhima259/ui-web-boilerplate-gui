import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GameState {
  loading: boolean;
  errors: any;
  token: string;
  value: number;
}

const initialState: GameState = {
  loading: true,
  errors: null,
  token: '',
  value: 0,
};

export const gameSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
  },
});

export default gameSlice.reducer;
export const { setToken } = gameSlice.actions;
