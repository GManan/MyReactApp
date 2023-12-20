import actionTypes from "../constants/actionTypes";
const initialState = {
    articles: []
};
function rootReducer(state = initialState, action) {
    if (action.type === actionTypes.ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    if (action.type === actionTypes.LOG_IN) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)
        });
    }
    return state;
};
export default rootReducer;
