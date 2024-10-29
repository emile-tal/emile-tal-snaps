import { CtaButton } from '../CtaButton/CtaButton'
import { Wordmark } from '../Wordmark/Wordmark'
import './NavBar.scss'

export function NavBar() {
    return (
        <nav className="navbar">
            <Wordmark />
            <CtaButton />
        </nav>
    )
}