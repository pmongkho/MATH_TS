import { createSlice } from '@reduxjs/toolkit'
import {RootState} from '../store'

const initialState = {
    correctCount: 0,
    multiCount: 0,
    divCount: 0,
    plusCount: 0,
    minusCount: 0,
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		addCorrect: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.correctCount += 1
		},
		addMulti: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.multiCount += 1
		},
		addDiv: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.divCount += 1
		},
		addPlus: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.plusCount += 1
		},
		addMinus: (state) => {
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.minusCount += 1
		},

	},
})

// Action creators are generated for each case reducer function
export const {addCorrect, addDiv, addMinus, addMulti, addPlus} = counterSlice.actions

export const selectCorrect = (state:RootState) => state.counter.correctCount
export const selectMult = (state:RootState) => state.counter.multiCount
export const selectDiv = (state:RootState) => state.counter.divCount
export const selectPlus = (state:RootState) => state.counter.plusCount
export const selectMinus = (state:RootState) => state.counter.minusCount


export default counterSlice.reducer
