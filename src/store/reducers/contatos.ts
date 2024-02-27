import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'João',
      email: 'teste@teste.com',
      numero: '(31) XXXX-XXXX'
    },
    {
      id: 2,
      nome: 'Maria',
      email: 'teste@teste.com',
      numero: '(31) XXXX-XXXX'
    },
    {
      id: 3,
      nome: 'Márcio',
      email: 'teste@teste.com',
      numero: '(31) XXXX-XXXX'
    },
    {
      id: 4,
      nome: 'Patrícia',
      email: 'teste@teste.com',
      numero: '(31) XXXX-XXXX'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const contatoJaExiste = state.itens.find(
        (contato) => contato.numero === action.payload.numero
      )

      if (contatoJaExiste) {
        alert('Já existe um contato com esse número')
      } else {
        state.itens.push(action.payload)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
