import './Tag.scss'

export function Tag({ text, clickable, handleClick }) {
    return (
        <p className={`tag ${clickable && 'tag--clickable'}`} onClick={handleClick} >{text}</p>
    )
}