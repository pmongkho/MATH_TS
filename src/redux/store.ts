import {configureStore} from '@reduxjs/toolkit'
import symbolReducer from './features/symbolSlice'
import counterReducer from './features/counterSlice'
// ...

export const store = configureStore({
	reducer: {
		symbol: symbolReducer,
		counter: counterReducer,
	},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
