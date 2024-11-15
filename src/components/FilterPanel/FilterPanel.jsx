import './FilterPanel.scss'

import { useEffect, useState } from 'react'

import { Tag } from '../Tag/Tag'
import axios from 'axios'

export function FilterPanel({ selectedFilter, setSelectedFilter }) {
    const [tags, setTags] = useState([])
    const baseUrl = import.meta.env.VITE_API_URL

    const getTags = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}tags`)
            setTags(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTags()
    }, [])


    return (
        <nav className='filter-panel'>
            <h2 className='filter-panel__heading'>Filters</h2>
            <div className='filter-panel__container'>
                {tags.map((tag, index) => (
                    <Tag key={index} text={tag} clickable handleClick={() => setSelectedFilter(selectedFilter === tag ? null : tag)} selected={selectedFilter === tag} />
                ))}
            </div>
        </nav>
    )
}