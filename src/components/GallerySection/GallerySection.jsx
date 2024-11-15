import './GallerySection.scss'

import { useEffect, useState } from 'react'

import { PhotoCard } from '../PhotoCard/PhotoCard'
import axios from 'axios'

export function GallerySection({ selectedFilter }) {
    const [imageData, setImageData] = useState([])

    // Fetching data from API:
    const baseUrl = import.meta.env.VITE_API_URL

    const getImages = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}photos`)
            setImageData(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getImages()
    }, [])

    const filteredPhotoArray = selectedFilter ? imageData.filter((photo) => photo.tags.includes(selectedFilter)) : imageData

    return (
        <div className='gallery'>
            {filteredPhotoArray.map(photoObj => (
                <PhotoCard key={photoObj.id} imageId={photoObj.id} source={photoObj.photo} photographer={photoObj.photographer} tags={photoObj.tags} alt={photoObj.photoDescription} />
            ))}
        </div>
    )
}