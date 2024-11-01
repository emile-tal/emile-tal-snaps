import './FooterSocial.scss'

export function FooterSocial({ icons }) {
    console.log(icons)
    return (
        <div className='footer__socials-container'>
            {
                icons.map((icon, index) => (
                    <img key={index} src={icon.icon} alt={`${icon.company} icon`} className='footer__social-icon' />
                ))
            }
        </div>
    )
}