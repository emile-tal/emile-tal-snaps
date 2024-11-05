import './CommentForm.scss'

import { useState } from 'react'

export function CommentForm() {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [isNameValid, setIsNameValid] = useState(false)
    const [isCommentValid, setIsCommentValid] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
        name.length > 0 ? setIsNameValid(true) : setIsNameValid(false)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
        comment ? setIsCommentValid(true) : setIsCommentValid(false)
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label htmlFor='name' className='comment-form__label'>Name</label>
            <input type='text' name='name' className={`comment-form__input ${!isNameValid && 'comment-form__input--invalid'}`} onChange={handleNameChange} value={name} />
            <label htmlFor='comment' className='comment-form__label'>Comment</label>
            <textarea name='comment' className={`comment-form__input comment-form__input--textarea ${!isCommentValid && 'comment-form__input--invalid'}`} onChange={handleCommentChange} value={comment} />
            <button type='submit' className='comment-form__submit-button'>Submit</button>
        </form>
    )
}