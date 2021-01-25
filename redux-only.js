const {createStore} =require('redux');

const initialState={
    count:0
}

const reducer=(state=initialState,action)=>{
    const tempState = {...state}
    
    if (action.type==='ADD'){
         tempState.count += 1;
    }
    if (action.type==='ADD_WITH_PAYLOAD'){
        tempState.count += action.payload;
   }
    if (action.type==='SUB'){
        tempState.count -= 1;
   }
    return tempState
}

const store = createStore(reducer)
store.subscribe(()=>{console.log('state channged..',store.getState())})

store.dispatch({type:'ADD'})
store.dispatch({type:'ADD_WITH_PAYLOAD',payload:5})
store.dispatch({type:'SUB'})
store.dispatch({type:'SUB'})
store.dispatch({type:'ADD_WITH_PAYLOAD',payload:10})

