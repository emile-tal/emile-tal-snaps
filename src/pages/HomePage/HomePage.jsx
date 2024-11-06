import './HomePage.scss'

import { FilterPanel } from "../../components/FilterPanel/FilterPanel";
import { GallerySection } from "../../components/GallerySection/GallerySection";
import { MissionSection } from "../../components/MissionSection/MissionSection";
import { useState } from 'react';

export function HomePage({ filterPanelOpen, toggleFilterPanel }) {
    const [selectedFilter, setSelectedFilter] = useState(null)

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