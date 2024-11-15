import './CommentForm.scss'

import axios from 'axios'
import { useState } from 'react'

export function CommentForm({ imageId, getComments }) {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [styleInvalidName, setStyleInvalidName] = useState(false)
    const [styleInvalidComment, setStyleInvalidComment] = useState(false)

    const baseUrl = import.meta.env.VITE_API_URL

    const handleSubmit = (event) => {
        event.preventDefault()

        if (!isNameValid()) {
            setStyleInvalidName(true)
        } else {
            setStyleInvalidName(false)
        }

        if (!isCommentValid()) {
            setStyleInvalidComment(true)
        } else {
            setStyleInvalidComment(false)
        }

        if (isNameValid() && isCommentValid()) {
            const newComment = {
                name: name,
                comment: comment
            }
            putComment(newComment)
            setName("")
            setComment("")
            setStyleInvalidComment(false)
            setStyleInvalidName(false)
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
    }

    const isNameValid = () => {
        return name.length > 0
    }

    const isCommentValid = () => {
        return comment.length > 0
    }

    const putComment = async (newComment) => {
        await axios.post(`${baseUrl}photos/${imageId}/comments`, newComment)
        getComments()
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label htmlFor='name' className='comment-form__label'>Name</label>
            <input
                type='text'
                name='name'
                className={`comment-form__input ${styleInvalidName && 'comment-form__input--invalid'}`}
                onChange={handleNameChange}
                value={name}
            />
            <label htmlFor='comment' className='comment-form__label'>Comment</label>
            <textarea
                name='comment'
                className={`comment-form__input comment-form__input--textarea ${styleInvalidComment && 'comment-form__input--invalid'}`}
                onChange={handleCommentChange}
                value={comment}
            />
            <button type='submit' className='comment-form__submit-button'>Submit</button>
        </form>
    )
}