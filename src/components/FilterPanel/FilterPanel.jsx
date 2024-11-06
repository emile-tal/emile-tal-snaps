import './FilterPanel.scss'

import { useEffect, useState } from 'react'

import { Tag } from '../Tag/Tag'
import axios from 'axios'

export function FilterPanel({ selectedFilter, setSelectedFilter }) {
    const [tags, setTags] = useState([])
    const baseUrl = 'https://unit-3-project-c5faaab51857.herokuapp.com/'
    const apiKey = '3ad59781-bca8-4c49-97df-4e9a69cdc9a7'

    const getTags = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}tags?api_key=${apiKey}`)
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
                    <Tag key={index} text={tag} clickable={true} handleClick={() => setSelectedFilter(selectedFilter === tag ? null : tag)} selected={selectedFilter === tag} />
                ))}
            </div>
        </nav>
    )
}