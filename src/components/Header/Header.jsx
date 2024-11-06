import './Header.scss'

import { NavBar } from "../NavBar/NavBar";

export function Header({ filterPanel, toggleFilterPanel, setFilterPanel }) {

    return (
        <header className="header">
            <NavBar filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} setFilterPanel={setFilterPanel} />
        </header>
    )
}