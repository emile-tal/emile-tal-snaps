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

    // Fetching data from API:
    const baseUrl = 'https://unit-3-project-c5faaab51857.herokuapp.com/'
    const apiKey = '3ad59781-bca8-4c49-97df-4e9a69cdc9a7'

    const getImage = async () => {
        try {
            const response = await axios.get(`${baseUrl}photos/${imageId}?api_key=${apiKey}`)
            setSingleImage(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const getComments = async () => {
        try {
            const response = await axios.get(`${baseUrl}photos/${imageId}/comments?api_key=${apiKey}`)
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