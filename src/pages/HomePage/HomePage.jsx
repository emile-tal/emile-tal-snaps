import './HomePage.scss'

import { useEffect, useState } from 'react';

import { FilterPanel } from "../../components/FilterPanel/FilterPanel";
import { GallerySection } from "../../components/GallerySection/GallerySection";
import { MissionSection } from "../../components/MissionSection/MissionSection";

export function HomePage({ filterPanelOpen, toggleFilterPanel, closeFilterPanel }) {
    const [selectedFilter, setSelectedFilter] = useState(null)

    useEffect(() => {
        closeFilterPanel()
    }, [])

    return (
        <main className={`home ${filterPanelOpen && 'home--filter-open'}`}>
            {filterPanelOpen && <FilterPanel filterPanelOpen={filterPanelOpen} toggleFilterPanel={toggleFilterPanel} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />}
            <div className={`home__content ${filterPanelOpen && 'home__content--filter-open'}`}>
                <MissionSection />
                <GallerySection selectedFilter={selectedFilter} />
            </div>
        </main>
    )
}