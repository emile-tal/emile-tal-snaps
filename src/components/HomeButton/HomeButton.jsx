import './HomeButton.scss'

import { Link } from 'react-router-dom'
import backArrow from '../../assets/images/Arrow.svg'

export function HomeButton({ }) {
    return (
        <Link to='/' className='home-button' onClick={() => setFilterPanel(false)}>
            <img src={backArrow} alt="Arrow icon" className='home-button__arrow' />
            <p className='home-button__text'>Home</p>
        </Link>
    )
}