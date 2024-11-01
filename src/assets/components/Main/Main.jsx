import { FilterPanel } from "../FilterPanel/FilterPanel";
import { GallerySection } from "../GallerySection/GallerySection";
import { MissionSection } from "../MissionSection/MissionSection";

export function Main() {
    return (
        <main>
            <FilterPanel />
            <MissionSection />
            <GallerySection />
        </main>
    )
}