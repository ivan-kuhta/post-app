import React from 'react';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="Про що ви думаєте зараз"
                className="form-control new-post-label"
            />
            <button
                type="submit"
                className="btn btn-outline-secondary">
                Добавити</button>
        </form>
    )
}

export default PostAddForm;