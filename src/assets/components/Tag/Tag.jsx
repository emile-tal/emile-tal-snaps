import './Tag.scss'

export function Tag({ text, clickable, handleClick, selected }) {
    return (
        <p className={`tag ${clickable && 'tag--clickable'} ${selected && 'tag--selected'}`} onClick={handleClick} >{text}</p>
    )
}