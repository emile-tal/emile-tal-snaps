import './Tag.scss'

export function Tag({ text, clickable }) {
    return (
        <p className={`tag ${clickable && 'tag--clickable'}`}>{text}</p>
    )
}