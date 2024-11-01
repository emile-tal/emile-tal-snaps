import './PhotoCard.scss'

import { Tag } from '../Tag/Tag'

export function PhotoCard({ source, photographer, tags, alt }) {
    console.log(source)
    return (
        <div className='photo-card'>
            <img src={source} alt={alt} className="photo-card__image" />
            <div className="photo-card__tag-container">
                {tags.map((tag, index) => (
                    <Tag text={tag} key={index} clickable={false} />
                ))}
            </div>
            <p className="photo-card__photographer">{photographer}</p>
        </div>
    )
}