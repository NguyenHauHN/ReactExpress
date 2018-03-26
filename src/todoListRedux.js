const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE'
};

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item};
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index};
    }
};

// initial state

const initialState = {
    todos: ["Click to remove", "Learn React", "Write Code", "Ship App"]
};

// reducer to update state

export const reducer = (state = initialState, action) => {
    const {type, payload} = action;
    const {todos} = state;

    switch (type) {
        case types.ADD: {
            return {
                ...state,
                todos: [...todos, payload]
            };
        }

        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload)
            }
        }
    }

    return state;
}