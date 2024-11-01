import './FilterPanel.scss'

import { Tag } from '../Tag/Tag'
import tags from '../../../data/tags.json'

export function FilterPanel() {
    return (
        <nav className='filter-panel'>
            <h2 className='filter-panel__heading'>Filters</h2>
            <div className='filter-panel__container'>
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} clickable={true} />
                ))}
            </div>
        </nav>
    )
}