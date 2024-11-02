import './Main.scss'

import { FilterPanel } from "../FilterPanel/FilterPanel";
import { GallerySection } from "../GallerySection/GallerySection";
import { MissionSection } from "../MissionSection/MissionSection";
import { useState } from 'react';

export function Main({ filterPanel, toggleFilterPanel }) {
    const [filter, setFiler] = useState[null]

    return (
        <main className={`main ${filterPanel && 'main--filter-open'}`}>
            {filterPanel && <FilterPanel filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />}
            <div className={`main__content ${filterPanel && 'main__content--filter-open'}`}>
                <MissionSection />
                <GallerySection />
            </div>
        </main>
    )
}