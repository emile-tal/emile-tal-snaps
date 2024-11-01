import './CtaButton.scss'

import FilterIcon from '../../Icons/Filter.svg'

export function CtaButton({ toggleFilterPanel }) {
    return (
        <button className='cta-button' onClick={toggleFilterPanel}>
            <p className='cta-button__text'>Filters</p>
            <img src={FilterIcon} alt='Filter icon' />
        </button>
    )
}