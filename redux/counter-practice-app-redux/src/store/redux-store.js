import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
    showCounter: true
}

// counter reducer
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        countUp(state, action) { 
            state.counter++
        },
        countDown(state, action) {
            state.counter--
        },
        increment(state, action) { 
            state.counter = state.counter + action.payload
        },
        toggleCounter(state, action) { 
            state.showCounter = !state.showCounter
        }
    }
})

const authInitialState = {
    isLoggedIn: false
}

// auth reducer
const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store

// using create store 
/*
import { createStore } from 'redux'

const defaultState = {
    counter: 0,
    showCounter : true
}

const counterReducer = (state = defaultState, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'increase') {
        return {
            counter: state.counter + action.value,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'decrement'){
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter
        }
    }

    if (action.type === 'toggle') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter
        }
    }

    return state
}

const store = createStore(counterReducer)

export default store
*/