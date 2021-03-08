import { STORE_USER_DATA, STORE_LATESTBLOCK_DATA, RESET_REDUX } from '../actions/app.action';

const initialState = {
    user: false,
    loggedIn: false,
    block: false
};

function appReducer(state = initialState, action) {
    console.warn("App reducer invoked with state: " + JSON.stringify(state) + " with action " + JSON.stringify(action));

    switch (action.type) {
        case STORE_USER_DATA:
            return {
                ...state,
                user: action.user,
                loggedIn: !!action.user
            };

        case STORE_LATESTBLOCK_DATA:
            return {
                ...state,
                block: action.block
            }
    }

    return {
        ...initialState
    };
}

export default appReducer;