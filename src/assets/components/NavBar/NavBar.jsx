import './NavBar.scss'

import { CtaButton } from '../CtaButton/CtaButton'
import { Wordmark } from '../Wordmark/Wordmark'

export function NavBar({ filterPanel, toggleFilterPanel }) {
    return (
        <>
            <nav className="navbar">
                <Wordmark />
                <CtaButton toggleFilterPanel={toggleFilterPanel} />
            </nav>
        </>
    )
}