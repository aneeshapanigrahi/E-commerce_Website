import React from 'react';
import { connect } from 'react-redux';
import { fetchUserBlogs } from '../../actions';
import MyBlogs from './MyBlogs';
import warning from './warning.png';
import './style.css';
import { Link } from 'react-router-dom';

class BlogDetail extends React.Component {

    state = { intial: false }

    componentDidMount() {

        if (this.props.blog === null) {
            this.setState({ intial: true });
        }

        this.props.fetchUserBlogs(this.props.blog);
    }

    renderList = () => {
        return this.props.userBlogs.map((userBlog) => {
            return (
                <MyBlogs userBlog={userBlog} key={userBlog._id} />
            )
        })
    }

    render() {
        if (this.state.intial) {
            return (
                <div className="ui red icon message back" style={{ alignContent: "center" }}>
                    <img src={warning} className="image ui medium" style={{ margin: '10px' }} />
                    <i className="notched circle loading icon"></i>
                    <div className="content">
                        <div className="header">
                            Look's like
                    </div>
                        <p>You haven't selected the Blog to read</p>
                        <p>To see the Blogs
                            <Link to="/blog">
                                Click here
                            </Link>
                        </p>
                    </div>
                </div >
            )
        } else {
            return (
                <div className="ui items back1" style={{ margin: '10px', padding: '10px' }}>
                    {this.renderList()}
                </div>
            );
        }
    };
}

const mapStateToProp = (state) => {
    return {
        blog: state.selectedBlog,
        userBlogs: state.userBlogs
    };
}

export default connect(mapStateToProp, { fetchUserBlogs })(BlogDetail);