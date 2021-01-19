

import blog from '../Blog Page/api/blog';

export const fetchBlogs = () => async dispatch => {
    const response = await blog.get('/blog');
    dispatch({ type: 'FETCH_BLOGS', payload: response.data });
};

export const selectedBlog = (blog) => {
    return {
        type: 'SELECTED_BLOG',
        payload: blog
    }
};

export const fetchUserBlogs = (userBlogs) => async dispatch => {
    if (userBlogs) {
        const response = await blog.get(`/blog/${userBlogs.userId}`);
        dispatch({ type: 'FETCH_USER_BLOGS', payload: response.data });
    }
};

export const TotalPrice = (detail) => {
    return ({
        type: 'TOTAL_PRICE',
        payload: detail
    });
};