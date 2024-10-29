import './Header.scss'
import { MissionSection } from "../MissionSection/MissionSection";
import { NavBar } from "../NavBar/NavBar";

export function Header() {
    return (
        <header className="header">
            <NavBar />
            <MissionSection />
        </header>
    )
}