import './GallerySection.scss'

import { PhotoCard } from '../PhotoCard/PhotoCard'
import photoArray from '../../../data/photos.json'

export function GallerySection({ selectedFilter }) {
    console.log(`selected filter: ${selectedFilter}`)
    const filteredPhotoArray = photoArray.filter((photo) => selectedFilter ? photo.tags.includes(selectedFilter) : photoArray)


    return (
        <section className='gallery'>
            {filteredPhotoArray.map(photoObj => (
                <PhotoCard key={photoObj.id} source={photoObj.photo} photographer={photoObj.photographer} tags={photoObj.tags} alt={photoObj.photoDescription} />
            ))}
        </section>
    )
}