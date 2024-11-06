import './CommentForm.scss'

import axios from 'axios'
import { useState } from 'react'

export function CommentForm({ imageId, getComments }) {
    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    const baseUrl = 'https://unit-3-project-c5faaab51857.herokuapp.com/'
    const apiKey = '3ad59781-bca8-4c49-97df-4e9a69cdc9a7'

    const handleSubmit = (event) => {
        event.preventDefault()
        if (isNameValid() && isCommentValid()) {
            const newComment = {
                name: name,
                comment: comment
            }
            putComment(newComment)
            setName("")
            setComment("")
        }
    }

    const handleNameChange = (event) => {
        setName(event.target.value)
        isNameValid()
    }

    const handleCommentChange = (event) => {
        setComment(event.target.value)
        isCommentValid()
    }

    const isNameValid = () => {
        return name.length > 0
    }

    const isCommentValid = () => {
        return comment.length > 0
    }

    const putComment = async (newComment) => {
        console.log(newComment)
        await axios.post(`${baseUrl}photos/${imageId}/comments?api_key=${apiKey}`, newComment)
        getComments()
    }

    return (
        <form className='comment-form' onSubmit={handleSubmit}>
            <label htmlFor='name' className='comment-form__label'>Name</label>
            <input
                type='text'
                name='name'
                className={`comment-form__input ${!isNameValid() && 'comment-form__input--invalid'}`}
                onChange={handleNameChange}
                value={name}
            />
            <label htmlFor='comment' className='comment-form__label'>Comment</label>
            <textarea
                name='comment'
                className={`comment-form__input comment-form__input--textarea ${!isCommentValid() && 'comment-form__input--invalid'}`}
                onChange={handleCommentChange}
                value={comment}
            />
            <button type='submit' className='comment-form__submit-button'>Submit</button>
        </form>
    )
}