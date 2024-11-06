import './NavBar.scss'

import { Link, useMatch } from 'react-router-dom'

import { CtaButton } from '../CtaButton/CtaButton'
import { HomeButton } from '../HomeButton/HomeButton'
import { Wordmark } from '../Wordmark/Wordmark'

export function NavBar({ filterPanelOpen, toggleFilterPanel, closeFilterPanel }) {
    const match = useMatch('/')

    return (
        <nav className="navbar">
            <Link to='/' className='navbar__wordmark'><Wordmark /></Link>
            {match ? <CtaButton filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} /> : <HomeButton closeFilterPanel={closeFilterPanel} />}
        </nav>
    )
}
