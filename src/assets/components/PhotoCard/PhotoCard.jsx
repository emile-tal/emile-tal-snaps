import './PhotoCard.scss'

import { Link } from 'react-router-dom'
import { Tag } from '../Tag/Tag'

export function PhotoCard({ source, photographer, tags, alt, imageId }) {

    return (
        <Link to={`/image/${imageId}`} className='photo-card'>
            <img src={source} alt={alt} className="photo-card__image" />
            <div className="photo-card__tag-container">
                {tags.map((tag, index) => (
                    <Tag text={tag} key={index} clickable={false} />
                ))}
            </div>
            <p className="photo-card__photographer">{photographer}</p>
        </Link>
    )
}