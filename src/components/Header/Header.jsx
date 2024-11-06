import './Header.scss'

import { NavBar } from "../NavBar/NavBar";

export function Header({ filterPanelOpen, toggleFilterPanel, closeFilterPanel }) {

    return (
        <header className="header">
            <NavBar filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} closeFilterPanel />
        </header>
    )
}