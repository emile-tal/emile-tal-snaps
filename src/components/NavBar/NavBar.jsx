import './NavBar.scss'

import { Link, useMatch } from 'react-router-dom'

import { CtaButton } from '../CtaButton/CtaButton'
import { HomeButton } from '../HomeButton/HomeButton'
import { Wordmark } from '../Wordmark/Wordmark'

export function NavBar({ filterPanelOpen, toggleFilterPanel }) {
    const match = useMatch('/')

    return (
        <header className='header'>
            <nav className="header__navbar">
                <Link to='/' className='header__wordmark'><Wordmark /></Link>
                {match ? <CtaButton filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} /> : <HomeButton />}
            </nav>
        </header>
    )
}
