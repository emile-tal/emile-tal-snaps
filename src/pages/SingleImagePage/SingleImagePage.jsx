import './SingleImagePage.scss'

import { useEffect, useState } from 'react'

import { CommentForm } from '../../components/CommentForm/CommentForm'
import { CommentsContainer } from '../../components/CommentsContainer/CommentsContainer'
import { SinglePhotoCard } from '../../components/SinglePhotoCard/SinglePhotoCard'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export function SingleImagePage() {
    const { imageId } = useParams()
    const [singleImage, setSingleImage] = useState(null)
    const [comments, setComments] = useState([])

    const baseUrl = import.meta.env.VITE_API_URL

    const getImage = async () => {
        try {
            const response = await axios.get(`${baseUrl}photos/${imageId}`)
            setSingleImage(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${baseUrl}photos/${imageId}/comments`)
            setComments(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getImage()
        getComments()
    }, [])

    return (
        <main className='single-image-page'>
            {singleImage && <SinglePhotoCard photo={singleImage} />}
            <CommentForm imageId={imageId} getComments={getComments} />
            {comments && <CommentsContainer comments={comments} />}
        </main>
    )
}