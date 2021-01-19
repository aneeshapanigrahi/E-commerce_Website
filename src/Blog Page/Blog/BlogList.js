import React from 'react';
import { connect } from 'react-redux';
import { fetchBlogs } from '../../actions';
import BlogCard from './BlogCard';
import './style.css';

class BlogList extends React.Component {

    componentDidMount() {
        this.props.fetchBlogs();
    }

    renderList = () => {

        return this.props.blogs.map((blog) => {
            return (
                <BlogCard blog={blog} key={blog._id} />
            )
        })

    }

    render() {

        return (
            <div className="ui container back2">
                <div className="ui special cards" style={{ margin: '10px', marginLeft: '50px' }}>
                    {this.renderList()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return { blogs: state.blogs }
};

export default connect(mapStateToProps, { fetchBlogs })(BlogList);