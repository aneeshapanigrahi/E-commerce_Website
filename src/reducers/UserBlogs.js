
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER_BLOGS': return action.payload;
        default: return state;
    }
}