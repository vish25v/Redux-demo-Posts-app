import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { fetchPosts } from "../actions/postAction";

class Post extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         posts : []
    //     }
    //
    // }

    // componentWillMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //         .then(res => res.json())
    //         .then(data => this.setState({ posts : data }));
    // }

    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                Post
                {postItems}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts.items
});

Post.propTypes = {
    fetchPosts : PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
};

export default connect (mapStateToProps, {fetchPosts}) (Post);
