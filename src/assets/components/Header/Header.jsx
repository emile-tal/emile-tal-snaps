import './Header.scss'

import { NavBar } from "../NavBar/NavBar";
import { useState } from 'react'

export function Header() {
    const [filterPanel, setFilterPanel] = useState(false)

    const toggleFilterPanel = () => {
        setFilterPanel((previous) = !previous)
    }

    return (
        <header className="header">
            <NavBar filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />
        </header>
    )
}