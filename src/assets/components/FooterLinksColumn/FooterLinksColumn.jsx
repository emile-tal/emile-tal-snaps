import './FooterLinksColumn.scss'

export function FooterLinksColumn({ links }) {
    return (
        <div className='footer__links-column'>
            {links.map((link, index) => (
                <p key={index} className='footer__link'>{link}</p>
            ))}
        </div>
    )
}