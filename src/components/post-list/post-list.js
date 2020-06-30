import React from 'react';
import PostListItem from '../post-list-item';

import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem {...itemProps} />
            </li>
        );
    });

    return (
        <ListGroup className="app-list list-group">
            {elements}
        </ListGroup>
        // <ul className="app-list list-group">
        //     {elements}
        //     {/* <PostListItem label={posts[0].label} important={posts[0].important} /> */}
        //     {/* <PostListItem label="That is so good" />
        //     <PostListItem label="I need to break..." /> */}
        // </ul>

    )
}

export default PostList;