
const initialState = {count:0};

    const CounterReducer = (state,action)=>{

        switch (action.type) {
            case "increment":
              return ({count:state.count+1});
            case "decrement":
                return ({count:state.count-1});
            case "incrementbyamount":
                return ({count:state.count+action.payload});
            case "decrementbyamount":
                    return ({count:state.count-action.payload});
            case "reset":
                return ({count:0});        
            default:
                return(state);
        }

    }
  

export {initialState,CounterReducer}