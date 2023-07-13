import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';

interface EstadoUsuario {
  value: string;
  status: 'idle' | 'loading' | 'failed';
}

const estadoInicial: EstadoUsuario = {
  value: '',
  status: 'idle',
};

export const usuarioSlice = createSlice({
  name: 'usuario',
  initialState: estadoInicial,
  reducers: {
    alterarNome: (state, action: PayloadAction<string>) => {
        state.value = action.payload
    }
  }
});

export const {alterarNome} = usuarioSlice.actions;

export const selecionaNome = (state: RootState) => state.usuario.value;

export default usuarioSlice.reducer;
