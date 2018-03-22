
//define action
const types = {
    INCREMENT: 'INCREMENT'
};

// define reducer
export const reducer = (state, action) => {
    if (action.type === types.INCREMENT) {
        return {count: state.count + 1};
    }
    return state;
};

//initial state
export const initialState = {count: 0};
