import React from 'react';

class MyBlogs extends React.Component {

    render() {

        const { imageUrl, title, body, username } = this.props.userBlog;

        return (
            <div className="item" style={{ margin: '10px' }}>
                <a className="ui medium image">
                    <img src={imageUrl} />
                </a>
                <div className="content" style={{ alignContent: "center" }}>
                    <a className="header">{title}</a>
                    <div className="meta">
                        <span className="price">{username}</span>
                    </div>
                    <div className="description">
                        {body}
                    </div>
                </div>
            </div>

        )
    }
}

export default MyBlogs;