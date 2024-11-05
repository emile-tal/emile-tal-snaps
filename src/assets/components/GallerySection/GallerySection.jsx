import './GallerySection.scss'

import { useEffect, useState } from 'react'

import { PhotoCard } from '../PhotoCard/PhotoCard'
import axios from 'axios'
import photoArray from '../../../data/photos.json'

export function GallerySection({ selectedFilter }) {
    const [imageArray, setImageArray] = useState([])

    // Fetching data from API:
    const baseUrl = 'https://unit-3-project-c5faaab51857.herokuapp.com/'
    const apiKey = '3ad59781-bca8-4c49-97df-4e9a69cdc9a7'

    const getImages = async () => {
        try {
            const response = await axios.get(`${baseUrl}photos?api_key=${apiKey}`)
            setImageArray(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getImages()
    }, [])

    useEffect(() => {
        const filteredPhotoArray = photoArray.filter((photo) => selectedFilter ? photo.tags.includes(selectedFilter) : photoArray)
        setImageArray(filteredPhotoArray)
    }, [selectedFilter])



    return (
        <section className='gallery'>
            {imageArray.map(photoObj => (
                <PhotoCard key={photoObj.id} imageId={photoObj.id} source={photoObj.photo} photographer={photoObj.photographer} tags={photoObj.tags} alt={photoObj.photoDescription} />
            ))}
        </section>
    )
}