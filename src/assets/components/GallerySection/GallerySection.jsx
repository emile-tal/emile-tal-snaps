import './GallerySection.scss'
import photoArray from '../../../data/photos.json'
import { PhotoCard } from '../PhotoCard/PhotoCard'

export function GallerySection() {
    return (
        <section className='gallery'>
            {photoArray.map(photo => (
                <PhotoCard key={photo.id} source={photo.photo} photographer={photo.photographer} tags={photo.tags} alt={photo.photoDescription} />
            ))}
        </section>
    )
}