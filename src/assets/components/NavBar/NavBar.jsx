import './NavBar.scss'

import { Link, useMatch } from 'react-router-dom'

import { CtaButton } from '../CtaButton/CtaButton'
import { HomeButton } from '../HomeButton/HomeButton'
import { Wordmark } from '../Wordmark/Wordmark'

export function NavBar({ filterPanel, toggleFilterPanel, setFilterPanel }) {
    const match = useMatch('/')

    return (
        <nav className="navbar">
            <Link to='/' className='navbar__wordmark'><Wordmark /></Link>
            {match ? <CtaButton filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} /> : <HomeButton />}
        </nav>
    )
}


// setFilterPanel={setFilterPanel}