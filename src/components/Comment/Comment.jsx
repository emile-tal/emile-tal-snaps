import './Comment.scss'

export function Comment({ name, comment, timestamp }) {
    const commentTimestamp = new Date(timestamp)

    return (
        <div className='comment'>
            <div className='comment__header'>
                <p className='comment__header-text'>{name}</p>
                <p className='comment__header-text'>{commentTimestamp.toLocaleDateString()}</p>
            </div>
            <p className='comment__content'>{comment}</p>
        </div>
    )
}