import './Footer.scss'

import { FooterSocial } from '../FooterSocial/FooterSocial'
import { Wordmark } from '../Wordmark/Wordmark'
import facebookIcon from '../../assets/images/Facebook.svg'
import instagramIcon from '../../assets/images/Instagram.svg'
import pinterestIcon from '../../assets/images/Pinterest.svg'
import xIcon from '../../assets/images/X_twitter.svg'

export function Footer() {
    const footerLinksColumnArr1 = ['For photographers', 'Hire talent', 'Inspiration']
    const footerLinksColumnArr2 = ['About', 'Careers', 'Support']
    const footerSocialIconsObj = [{ company: 'Facebook', icon: facebookIcon }, { company: 'X', icon: xIcon }, { company: 'Instagram', icon: instagramIcon }, { company: 'Pinterest', icon: pinterestIcon }]

    return (
        <footer className="footer">
            <div className='footer__container'>
                <div className='footer__wordmark-container'>
                    <Wordmark />
                </div>
                <div className='footer__links-container'>
                    <div className='footer__links-column'>
                        {footerLinksColumnArr1.map((link, index) => (
                            <p key={index} className='footer__link'>{link}</p>
                        ))}
                    </div>
                    <div className='footer__links-column'>
                        {footerLinksColumnArr2.map((link, index) => (
                            <p key={index} className='footer__link'>{link}</p>
                        ))}
                    </div>
                    <FooterSocial icons={footerSocialIconsObj} />
                </div>
            </div>
            <div className='footer__copyright-container'>
                <p className='footer__copyright-text'>© 2024 Snaps</p>
                <p className='footer__copyright-text'>Terms</p>
                <p className='footer__copyright-text'>Privacy</p>
                <p className='footer__copyright-text'>Cookies</p>
            </div>
        </footer>
    )
}