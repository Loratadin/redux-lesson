const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

//Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC-COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    if (action.type === 'ADD-COUNTER') {
        return {
            ...state,
            counter: state.counter + 1
        };
    }
    return state;
}

// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching Action 
store.dispatch({ type: 'INC-COUNTER' });
store.dispatch({ type: 'ADD-COUNTER', value: 10 });
console.log(store.getState());

//Subscription