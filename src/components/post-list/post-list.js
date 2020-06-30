import React from 'react';
import PostListItem from '../post-list-item';

import { ListGroup } from 'reactstrap';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                />
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