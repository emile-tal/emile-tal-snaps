import './FooterLinksColumn.scss'

export function FooterLinksColumn({ links }) {
    return (
        <div className='footer__links-column'>
            {links.map((link) => (
                <p className='footer__link'>{link}</p>
            ))}
        </div>
    )
}