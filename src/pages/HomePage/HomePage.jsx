import './HomePage.scss'

import { FilterPanel } from "../../components/FilterPanel/FilterPanel";
import { GallerySection } from "../../components/GallerySection/GallerySection";
import { MissionSection } from "../../components/MissionSection/MissionSection";
import { useState } from 'react';

export function HomePage({ filterPanel, toggleFilterPanel }) {
    const [selectedFilter, setSelectedFilter] = useState(null)

    return (
        <main className={`home ${filterPanel && 'home--filter-open'}`}>
            {filterPanel && <FilterPanel filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />}
            <div className={`home__content ${filterPanel && 'home__content--filter-open'}`}>
                <MissionSection />
                <GallerySection selectedFilter={selectedFilter} />
            </div>
        </main>
    )
}