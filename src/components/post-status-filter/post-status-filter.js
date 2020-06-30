import React from 'react';
import {Button} from 'reactstrap';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <Button color="info">Всі</Button>
            {/* <button type="button"
                    className="btn btn-info"
            >Всі</button> */}
            <button type="button"
                    className="btn btn-outline-secondary"
            >Вподобані</button>
        </div>
    )
}

export default PostStatusFilter;