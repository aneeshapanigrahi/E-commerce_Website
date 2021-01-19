
export default (selectedBlog = null, action) => {
    if (action.type === 'SELECTED_BLOG') {
        return action.payload;
    }
    return selectedBlog;
}
