import './SinglePhotoCard.scss'

import { Tag } from '../Tag/Tag'
import likeIcon from '../../assets/images/Like_Outline.svg'

export function SinglePhotoCard({ photo }) {
    const date = new Date(photo.timestamp)

    return (
        <div className='single-photo-card'>
            <img src={photo.photo} alt={photo.photoDescription} className='single-photo-card__image' />
            <div className='single-photo-card__tag-container'>
                {photo.tags.map((tag, index) => (
                    <Tag key={index} text={tag} clickable={false} singleImage={true} />
                ))}
            </div>
            <div className='single-photo-card__text-container'>
                <div className='single-photo-card__like-container'>
                    <img src={likeIcon} alt='Like icon' className='single-photo-card__like-icon' />
                    <p className='single-photo-card__text'>{`${photo.likes} likes`}</p>
                </div>
                <p className='single-photo-card__text'>{`Photo by ${photo.photographer}`}</p>
                <p className='single-photo-card__text single-photo-card__text--displaced'>{date.toLocaleDateString()}</p>
            </div>
        </div>
    )
}