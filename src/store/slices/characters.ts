import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICharacter } from '../../services/types'

interface ICharactersState {
    characters: ICharacter[]
}

const initialState: ICharactersState = {
    characters: []
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        setCharacters: (state, action: PayloadAction<ICharacter[]>) => {
            state.characters = action.payload
        }
    }
})

export const { setCharacters } = charactersSlice.actions

export default charactersSlice.reducer
