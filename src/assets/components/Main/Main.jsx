import './Main.scss'

import { FilterPanel } from "../FilterPanel/FilterPanel";
import { GallerySection } from "../GallerySection/GallerySection";
import { MissionSection } from "../MissionSection/MissionSection";

export function Main({ filterPanel, toggleFilterPanel }) {
    return (
        <main className='main'>
            {filterPanel && <FilterPanel filterPanel={filterPanel} toggleFilterPanel={toggleFilterPanel} />}
            <div>
                <MissionSection />
                <GallerySection />
            </div>
        </main>
    )
}