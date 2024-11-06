import './Tag.scss'

export function Tag({ text, clickable, handleClick, selected, singleImage }) {
    return (
        <p className={`tag ${clickable && 'tag--clickable'} ${selected && 'tag--selected'} ${singleImage && 'tag--singleImage'}`} onClick={handleClick} >{text}</p>
    )
}