import './CommentsContainer.scss'

import { Comment } from '../Comment/Comment'

export function CommentsContainer({ comments }) {
    const sortedComments = comments.sort((a, b) => b.timestamp - a.timestamp)

    return (
        <div className='comments-container'>
            <p className='comments-container__count'>{comments.length} Comments</p>
            {sortedComments.map((comment) => (
                <Comment key={comment.id} name={comment.name} comment={comment.comment} timestamp={comment.timestamp} />
            ))}
        </div>
    )
}