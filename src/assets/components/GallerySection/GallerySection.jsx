import './GallerySection.scss'
import photoArray from '../../../data/photos.json'
import { PhotoCard } from '../PhotoCard/PhotoCard'

export function GallerySection() {
    return (
        <section className='gallery'>
            {photoArray.map(photoObj => (
                <PhotoCard key={photoObj.id} source={photoObj.photo} photographer={photoObj.photographer} tags={photoObj.tags} alt={photoObj.photoDescription} />
            ))}
        </section>
    )
}