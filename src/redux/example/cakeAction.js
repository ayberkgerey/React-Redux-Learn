const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

//ACTION
function buyCake(){
    return{
        type: BUY_CAKE,
            info: 'First Redux Acton'
    }
}

function buyIceCream(){
    return{
        type: BUY_ICECREAM,
        info: 'Ice Cream Acton'
    }
}

//REDUCER
// (previousState, action) => newState

const initialCakeState = {
    numOfCakes: 10,
}

const initialIceCreamState = {
    numOfIceCreams: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type){
        case BUY_CAKE: return{
            ...state, //state copy / spread operator.
            numOfCakes: state.numOfCakes -1
        }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type){
        case BUY_ICECREAM:  return {
            ...state, //state copy / spread operator.
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state;
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial state', store.getState())
//const unsubscribe = store.subscribe(() => console.log('Updated State', store.getState())) //it works when anytime state updates.
const unsubscribe = store.subscribe(() => {}) //it works with logger.
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
